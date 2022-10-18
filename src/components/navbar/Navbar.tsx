import React, { Component } from "react";
import { ReactElement } from "react";
import { menuItems } from "./MenuItems";
import { DiReact } from 'react-icons/di';
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";


class Navbar extends Component {

    state = {clicked:false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbarLogo">React</h1>
        <DiReact color="white" size="35px"/>
        <div className="menuIcon" onClick={this.handleClick}>
            <i>{this.state.clicked ? <GrClose size="35px" color="white"/> : <GiHamburgerMenu size="35px" color="white"/>}</i>
        </div>
        <ul className={this.state.clicked ? "menuIcon" : "navMenu"}>
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
