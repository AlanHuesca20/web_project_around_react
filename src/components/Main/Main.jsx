import React from "react";
import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import ImagePopup from "./components/Popup/ImagePopup";
import EditBtn from "../../images/edit-icon.svg";
import Addbtn from "../../images/add-icon.svg";
import avatar from "../../images/avatar.jpg";
import NewCard from "../form/NewCard/NewCard";
import EditAvatar from "../form/EditAvatar/EditAvatar";
import EditProfile from "../form/EditProfile/EditProfile";
import Card from "./components/Card/Card";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

export default function Main() {
  const [popup, setPopup] = useState(null);
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

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__image-container">
          <img className="profile__image" src={avatar} alt="Avatar" />
          <button
            clasName="profile__avatar-edit"
            type="button"
            aria-label="Editar avatar"
            onClick={() => handleOpenPopup(EditAvatarPopup)}
          ></button>
        </div>

        <div className="profile__info">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(EditProfilePopup)}
          ></button>
          <p className="profile__description">Explorador</p>
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
            <Card key={card._id} card={card} />
          ))}
          <template id="card-template">
            <li className="card">
              <img className="card__image" src="" alt="" />
              <button className="card__delete-button" type="button"></button>
              <div className="card__description">
                <h2 className="card__title">Valle de Yosemite</h2>
                <button
                  aria-label="Botón Me gusta"
                  className="card__like-button"
                  type="button"
                ></button>
              </div>
            </li>
          </template>
        </ul>
      </section>
      {popup && (
        <popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </popup>
      )}
    </main>
  );
}
