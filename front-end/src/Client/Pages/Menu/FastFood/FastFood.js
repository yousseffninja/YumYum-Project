import React, { Component } from "react";
import style from "./FastFood.module.css";
import Item from "../Item-Container/Item-Container";
import menu from "./data";
import { Container } from "react-bootstrap";

export default class FastFood extends Component {
  render() {
    return (
      <div>
        <h1 className={style.header}>Fast Food</h1>
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
