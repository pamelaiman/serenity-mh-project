import React, { useState } from "react";
import Login from "./Login.js";
import NavBar from "./HomeBar.js";
import Summary from "./Summary.js";
import Circles from "./Circles.js";
import Carousel from "./Carousel.js";
// import ControlledCarousel from './Carousel.js';
import Register from "./Register.js";
import Footer from "./Footer.js";
import "../App.css";

//homepage structure
function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (isUserLoggedIn) => {
    setIsLoggedIn(isUserLoggedIn);
  };

  const handleRegister = () => {
    console.log("Registration successful");
  };

  return (
    <section className="page">
      <NavBar />
      {isLoggedIn && <h2> Welcome!</h2>}
      <section className="row">
        <Register onRegister={handleRegister} />
        <Login onLogin={handleLogin} />
      </section>
      <Summary />
      <Circles />
      <Carousel />
      {/* <ControlledCarousel /> */}
      <Footer />
    </section>
  );
}

export default Home;
