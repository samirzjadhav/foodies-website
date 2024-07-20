import React from "react";
import Navbar from "./Components/Navbar/Navbar.js";
import Hero from "./Components/Hero/Hero.js";
import HotDessert from "./Components/HotDessert/HotDessert.js";
import Banner from "./Components/Banner/Banner.js";
function App() {
  return (
    <div className="App overflow-x-hidden bg-white2 text-dark">
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <HotDessert />
      <Banner />
    </div>
  );
}

export default App;
