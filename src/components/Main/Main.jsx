import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Popup from "./components/Popup/Popup";
import avatar from "../../images/avatar.jpg";
import NewCard from "../form/NewCard/NewCard";
import EditAvatar from "../form/EditAvatar/EditAvatar";
import EditProfile from "../form/EditProfile/EditProfile";
import ImagePopup from "./components/Popup/ImagePopup";
import api from "../../utils/api";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);

  const newCardPopup = {
    title: "Nuevo Lugar",
    children: <NewCard />,
  };
  const EditProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const EditAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };
  const imagePopup = {
    title: null,
    children: <ImagePopup />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleImageClick(card) {
    handleOpenPopup({
      title: null,
      children: <ImagePopup card={card} />,
    });
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__image-container">
          <img
            className="profile__image"
            src={currentUser.avatar}
            alt="Avatar"
          />
          <button
            className="profile__avatar-edit"
            type="button"
            aria-label="Editar avatar"
            onClick={() => handleOpenPopup(EditAvatarPopup)}
          ></button>
        </div>

        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(EditProfilePopup)}
          ></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          aria-label="Agregar tarjeta"
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>

      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onClick={handleImageClick} />
          ))}
        </ul>
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
