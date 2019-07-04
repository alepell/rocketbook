import React from "react";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <header>
      <nav>
        <h2>Rocketbook</h2>
        <div>
          <span>Meu perfil</span>
          <span id="icon">
            <FaUserCircle size={20} />
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
