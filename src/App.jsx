import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page__content">
      <header className="header page__section" />
      <main className="content" />
      <footer className="footer page__section" />
    </div>
  );
}

export default App;
