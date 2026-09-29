import { useState } from "react";

export default function Card(props) {
  const { name, link, _id } = props.card;
  const [isLiked, setIsLiked] = useState(props.card.isLiked);
  const { handleCardClick, onCardLike, onCardDelete } = props;
  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_is-active" : ""
  }`;
  const imageComponent = {
    name,
    link,
    _id,
    isLiked,
  };

  async function handleLikeClick(card) {
    try {
      await onCardLike(card);
      setIsLiked(!isLiked);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteClick(card) {
    try {
      await onCardDelete(card);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => handleCardClick(imageComponent)}
      />
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
        onClick={() => handleDeleteClick(imageComponent)}
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={cardLikeButtonClassName}
          onClick={() => handleLikeClick(imageComponent)}
        />
      </div>
    </li>
  );
}
