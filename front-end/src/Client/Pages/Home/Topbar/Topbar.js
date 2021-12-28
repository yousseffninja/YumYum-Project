import React, { Component, useContext } from "react";
import style from  "./Topbar.module.css";
import LOGO from "./LOGO.PNG";
import { Nav,  Image } from "react-bootstrap";
import {LoginContext} from "../../../Authentication/loginApi";
function Topbar() {
  const {login, logoutApi} = useContext(LoginContext);
    return (
      <div className= {style.container1}>
        <Image src={LOGO} fluid  className={style.img}/>
        
            <Nav className= {"me-auto justify-content-end " + style.nav1}>
              <Nav.Item>
                {!login && (<Nav.Link href="/Login">Login</Nav.Link> )}
              </Nav.Item>
              <Nav.Item>
                {login && (<><Nav.Link onClick={(e) => logoutApi()}>sign out</Nav.Link></>)}
              </Nav.Item>
              <Nav.Item>
                {!login && (<Nav.Link href="/SignUp">Sign Up</Nav.Link> )}
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

export default Topbar