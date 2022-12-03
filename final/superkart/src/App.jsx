import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("Phones");
  const mainId = "main";

  function onNav(event) {
    const target = event.target.dataset.target;
    console.log({ target });
    if (target) {
      console.log("click", target);
      event.preventDefault();
      setPage(target);
    }
  }

  return (
    <div className="app">
      <a
        href={`#${mainId}`}
        className="header__skip-content"
        title="skip to main content"
        aria-label="skip to main content"
      >
        Skip to main content
      </a>
      <Header onNav={onNav} />
      <Main onNav={onNav} page={page} mainId={mainId} className="main" />
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;
