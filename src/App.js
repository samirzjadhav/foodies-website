import React from "react";
import Navbar from "./Components/Navbar/Navbar.js";
import Hero from "./Components/Hero/Hero.js";
import HotDessert from "./Components/HotDessert/HotDessert.js";
function App() {
  return (
    <div className="App overflow-x-hidden bg-white2 text-dark">
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <HotDessert />
    </div>
  );
}

export default App;
