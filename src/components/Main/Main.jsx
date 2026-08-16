import React from "react";
import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import ImagePopup from "./components/Popup/ImagePopup";
import EditBtn from "src/images/edit-icon.svg";
import Addbtn from "src/images/add-icon.svg";
import NewCard from "../form/NewCard/NewCard";

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
            class="profile__avatar-edit"
            type="button"
            aria-label="Editar avatar"
            onClick={() => handleOpenPopup(EditAvatarPopup)}
          ></button>
        </div>

        <div class="profile__info">
          <h1 class="profile__title">Jacques Cousteau</h1>
          <button
            aria-label="Editar perfil"
            class="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(EditProfilePopup)}
          ></button>
          <p class="profile__description">Explorador</p>
        </div>
        <button
          aria-label="Agregar tarjeta"
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>

      <section class="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} />
          ))}
          <template id="card-template">
            <li class="card">
              <img class="card__image" src="" alt="" />
              <button class="card__delete-button" type="button"></button>
              <div class="card__description">
                <h2 class="card__title">Valle de Yosemite</h2>
                <button
                  aria-label="Botón Me gusta"
                  class="card__like-button"
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
