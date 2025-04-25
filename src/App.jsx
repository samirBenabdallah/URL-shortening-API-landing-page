import React, { useState } from "react";
import Nav from "./com/Nav";
import Header from "./com/Header";

function App() {
  const [showNav, setNavVisibility] = useState(false);
  return (
    <div
      className={`w-screen ${
        showNav
          ? "h-screen overflow-hidden"
          : "min-h-screen h-screen overflow-x-hidden"
      }`}
    >
      <Nav navState={showNav} setNavState={setNavVisibility} />
      <Header />
    </div>
  );
}

export default App;
