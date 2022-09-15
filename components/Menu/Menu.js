import Image from "next/image";
import React from "react";
import Logo from "../../public/malilogo.png";


const Menu = () => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container is-widescreen">
        <a class="navbar-item" href="">
          <Image src={Logo} alt="logo" />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">Sobre</a>

          <a class="navbar-item">Como Funciona</a>
          <a class="navbar-item">Formulário</a>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
