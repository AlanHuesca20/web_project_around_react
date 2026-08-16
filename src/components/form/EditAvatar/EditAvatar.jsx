export default function EditAvatar() {
  return (
    <form className="popup__form" id="edit-avatar-form" novalidate>
      <input
        className="popup__input popup__input_type_url"
        name="avatar"
        placeholder="Enlace a la imagen"
        required
        type="url"
      />
      <span className="popup__error avatar-error"></span>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
