import { CurrentUserContext } from "../../../../contexts/CurrentUserContext";
import { useContext } from "react";

export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const { onClick } = props;
  const imageComponent = {
    name,
    link,
  };

  const { currentUser } = useContext(CurrentUserContext);

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_is-active" : ""
  }`;

  const handleClick = () => {
    onCardClick({ name, link });
  };

  const handleLikeClick = () => {
    onCardLike(card);
  };

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => onClick(imageComponent)}
      />
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={cardLikeButtonClassName}
        />
      </div>
    </li>
  );
}
