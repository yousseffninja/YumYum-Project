import React, { Component } from "react";
import style from "./Sweets.module.css";
import Item from "../Item-Container/Item-Container";
import menu from "./data";
import { Container } from "react-bootstrap";

export default class Sweets extends Component {
  render() {
    return (
      <div>
        <h1 className={style.header}>Sweets & Drinks</h1>
        <Container className={style.mealcontainer}>
          {menu.map((meal) => (
            <div key={meal.id}>
              <Item {...meal} />
            </div>
          ))}
        </Container>
      </div>
    );
  }
}
