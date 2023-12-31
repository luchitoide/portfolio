import React from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from "./components/Project";
import About from "./components/About";
import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <div className="max-w-7xl m-auto ">
      <GlobalStyles />
      <div className="fixed z-100 w-full max-w-7xl backdrop-blur-sm z-10">
        <Header />
      </div>
      <Introduction  />
      <About />
      <Projects />
    </div>
  );
}

export default App;
