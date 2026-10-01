function ImagePopup(props) {
  const { name, link } = props.card;
  return (
    <div className="popup__is-opened">
      <div className="popup__content_content_image">
        <img className="popup__image" src={link} alt={name} />
        <p className="popup__caption">{name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
