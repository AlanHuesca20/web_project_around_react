function ImagePopup(props) {
  const { name, link } = props.card;
  return (
    <div className="popup popup_is-opened">
      <div className="popup__content popup__content_content_image">
        <button className="popup__close"></button>
        <img className="popup__image" src={link} alt={name} />
        <p className="popup__caption">{name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
