import { useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function App() {
  //**Manejo de estado de la data del usuario */
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="page__content">
      <CurrentUserContext.Provider value={currentUser}>
        <Header className="header page__section" />
        <Main className="content" />
        <Footer className="footer page__section" />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
