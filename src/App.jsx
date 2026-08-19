import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="page__content">
      <Header className="header page__section" />
      <Main className="content" />
      <Footer className="footer page__section" />
    </div>
  );
}

export default App;
