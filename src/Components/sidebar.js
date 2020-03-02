import React from "react";
import { push as Menu } from "react-burger-menu";
import placeholder from "../Images/placeholder.jpg";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
           <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/introductie">
        Introductie
      </a>

      <a className="menu-item" href="/ondernemen">
        Ondernemen
      </a>

      <a className="menu-item" href="/ontwikkelen">
        Ontwikkelen
      </a>

      <a className="menu-item" href="/onderzoeken">
        Onderzoeken
      </a>

      <a className="menu-item" href="/ontwerpen">
        Ontwerpen
      </a>

      <a className="menu-item" href="/betrokken">
        Betrokken
      </a>

      <a className="menu-item" href="/bedrijf">
        Het bedrijf
      </a>
    </Menu>
  );
};