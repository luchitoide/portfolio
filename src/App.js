import React from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from "./components/Project";
import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <div className="max-w-7xl m-auto ">
      <GlobalStyles />
      <div className="fixed z-1000 w-full max-w-7xl">
        <Header />
      </div>
      <Introduction />
      <Projects />
    </div>
  );
}

export default App;
