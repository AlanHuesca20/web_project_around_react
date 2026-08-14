import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";

import EditBtn from "../images/edit.png";
import Addbtn from "../images/add.png";

export default function Main() {
  return (
    <>
      <main className="content">
        <section className="profile page__section">
          <div className="profile__image-container">
            <img className="profile__image" src={avatar} alt="Avatar" />
            <button
              class="profile__avatar-edit"
              type="button"
              aria-label="Editar avatar"
            ></button>
          </div>

          <div class="profile__info">
            <h1 class="profile__title">Jacques Cousteau</h1>
            <button
              aria-label="Editar perfil"
              class="profile__edit-button"
              type="button"
            ></button>
            <p class="profile__description">Explorador</p>
          </div>
          <button
            aria-label="Agregar tarjeta"
            class="profile__add-button"
            type="button"
          ></button>
        </section>

        <section class="cards page__section">
          <ul class="cards__list">
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
      </main>
    </>
  );
}
