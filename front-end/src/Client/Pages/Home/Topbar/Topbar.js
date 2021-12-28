import React, { Component } from "react";
import style from  "./Topbar.module.css";
import LOGO from "./LOGO.PNG";
import { Nav,  Image } from "react-bootstrap";
export default class Topbar extends Component {
  render() {
    return (
      <div className= {style.container1}>
        <Image src={LOGO} fluid  className={style.img}/>
        
            <Nav className= {"me-auto justify-content-end " + style.nav1}>
              <Nav.Item>
              <Nav.Link href="/Login">Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link href="/SignUp">Sign Up</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link href="/AdminArea">AdminArea</Nav.Link>
              </Nav.Item>
            </Nav>
      </div>
    );
  }
}
