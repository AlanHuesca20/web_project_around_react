export default function EditProfile() {
  return (
    <form className="popup__form" id="edit-profile-form">
      <input
        className="popup__input popup__input_type_name"
        name="name"
        placeholder="Nombre"
        type="text"
        required
        minlength="2"
        maxlength="40"
        id="edit-name"
      />
      <span id="edit-name-error" className="popup__error name-error"></span>
      <input
        className="popup__input popup__input_type_description"
        name="description"
        placeholder="Acerca de mí"
        type="text"
        required
        minlength="2"
        maxlength="200"
        id="edit-description"
      />
      <span
        id="edit-description-error"
        className="popup__error description-error"
      ></span>
      <button className="button popup__button" type="submit" disabled>
        Guardar
      </button>
    </form>
  );
}
