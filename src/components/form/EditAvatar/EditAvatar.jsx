import { useState, useContext, useRef } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const userContext = useContext(CurrentUserContext); // Obtiene el objeto currentUser
  const { handleUpdateAvatar } = userContext;
  const refAvatar = useRef(); // Crea una referencia
  const [avatar, setAvatar] = useState(""); // Crea el estado para el avatar

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value); // Actualiza avatar cuando cambie la entrada
  };

  function handleSubmit(event) {
    event.preventDefault();

    handleUpdateAvatar({
      avatar: refAvatar.current.value, // El valor de la entrada que obtuvimos utilizando la ref  ,
    });
  }

  return (
    <form className="popup__form" id="edit-avatar-form" noValidate>
      <input
        className="popup__input popup__input_type_url"
        name="avatar"
        placeholder="Enlace a la imagen"
        required
        type="url"
        ref={refAvatar}
        onChange={handleAvatarChange}
        value={avatar}
      />
      <span className="popup__error avatar-error"></span>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
