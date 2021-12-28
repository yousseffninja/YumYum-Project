import React  , {Component}from "react";
import style from './BestSelling.module.css';
import Item from "../../Menu/Item-Container/Item-Container";
import menu from './data'
import { Container } from "react-bootstrap";

export default class BestSelling extends Component{
    render(){
        return(
            <div>
                <h1 className={style.header}>Best selling food</h1>
        <   Container className={style.mealcontainer } >

            {menu.map ((meal) => (
                <div key= {meal.id}>
                <Item {...meal} />
                </div>
            ))}
                    </Container>

</div>
        )
    }
}