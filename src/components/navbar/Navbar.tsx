import React, { Component } from 'react'
import { menuItems } from './MenuItems';
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbarLogo">React</h1>
        <div className="menuIcon">
            
        </div>
        <ul>
            {menuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <a className={item.cName} href={item.url}>
                            {item.title}
                        </a>
                    </li>
                )
            })}
        </ul>
      </nav>
    )
  }
}

export default Navbar
