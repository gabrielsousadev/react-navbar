import React, { Component } from "react";
import { menuItems } from "./MenuItems";
import { DiReact } from "react-icons/di";
import "./Navbar.css";
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbarItems">
        <div className="navbarLogo">
          <h1>React Navbar</h1>
          <DiReact color="white" size="35px" />
        </div>
        <div className="menuIcon" onClick={this.handleClick}>
          <i>
            {this.state.clicked ? (
              <MdClose color="white" />
            ) : (
              <MdOutlineMenu color="white" />
            )}
          </i>
        </div>
        <ul className={this.state.clicked ? "navMenu active" : "navMenu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
