import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [popup, setPopup] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await api.getUserInfo();
        setCurrentUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    const getInitialCardsData = async () => {
      try {
        const cards = await api.getInitialCards();
        setCards(cards);
      } catch (error) {
        console.error(error);
      }
    };

    getUserData();
    getInitialCardsData();
  }, []);

  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard,
          ),
        );
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(cardId) {
    try {
      const isId = cardId;
      await api.deleteCard(isId);

      setCards((state) => state.filter((card) => card._id !== isId));
    } catch (error) {
      console.error(error);
    }
  }

  const handleUpdateUser = (data) => {
    (async () => {
      await api
        .updateUserInfo(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

  const handleUpdateAvatar = async (data) => {
    api
      .updateAvatar(data)
      .then((avatarUrl) => {
        const updateAvatar = {
          ...currentUser,
          avatar: avatarUrl.avatar,
          name: avatarUrl.name,
          about: avatarUrl.about,
        };
        setCurrentUser(updateAvatar);
        handleClosePopup();
      })
      .catch((err) => {
        console.log("No se ha actualizado el perfil:", err);
      });
  };

  const handleAddPlaceSubmit = (data) => {
    (async () => {
      setIsLoading(true);
      await api.addCard(data).then((newCard) => {
        setCards([newCard, ...cards]);
        setTimeout(() => {
          handleClosePopup();
          setIsLoading(false);
        }, 2000);
      });
    })();
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        handleUpdateAvatar,
        handleAddPlaceSubmit,
      }}
    >
      <div className="page__content">
        <Header />
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
