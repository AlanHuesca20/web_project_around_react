import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import api from "./utils/api";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function App() {
  //**Manejo de estado de la data del usuario */
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        setCurrentUser(data);
      });
    })();
  }, []);

      api
      .getCardList()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api
        .setUserInfo(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

  const handleUpdateAvatar = async (data) => {
    api
      .setUserAvatar(data)
      .then((avatarUrl) => {
        const updateAvatar = {
          ...currentUser,
          avatar: avatarUrl.avatar,
          name: avatarUrl.name,
          about: avatarUrl.about,
        };
        setCurrentUser(updateAvatar);
        setIsEditAvatarPopupOpen(true);
      })
      .catch((err) => {
        console.log("No se ha actualizado el perfil:", err);
      });
  };

   function handleCardLike(card) {
    const isLike = card.likes.some((i) => i._id === currentUser._id);

    let apiRequest = isLike
      ? api.deleteLikeFromCard(card._id, isLike)
      : api.addLikeFromCard(card._id, !isLike);

    apiRequest.then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  async function handleCardDelete() {
    const isCard = cardToDelete._id;
    api.deleteCardFromServer(isCard).then(() => {
      setCards((prevCards) => prevCards.filter((c) => c._id !== isCard));
    });
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
      <div className="page__content">
        <Header className="header page__section" />
        <Main
          className="content"
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
        />
        <Footer className="footer page__section" />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
