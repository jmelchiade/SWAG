import React from "react";

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./daisy-logo.png" className="nav-logo" />
        <ul className="nav-items">
          <li>Contact</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
