import React from "react";

function ImagePopup(props) {
  const { card } = props;
  return (
    <section className={`modal ${card ? "" : "open"}`}>
      <div className="popup__overlay"></div>
      <div className="popup__container">
        <img
          className="popup__container-close"
          src=""
          alt="icon para cerra la
            imágen"
        />

        {card && (
          <>
            <img
              className="popup__image-card"
              src={card.link}
              alt={card.name}
              id="modal"
            />
            <h3 className="popup__title-text"> {card.name} </h3>
          </>
        )}
      </div>
    </section>
  );
}

export default ImagePopup;
