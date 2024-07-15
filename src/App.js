import React from "react";
import Navbar from "./Components/Navbar/Navbar.js";
import Hero from "./Components/Hero/Hero.js";
function App() {
  return (
    <div className="App overflow-x-hidden bg-white2">
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
