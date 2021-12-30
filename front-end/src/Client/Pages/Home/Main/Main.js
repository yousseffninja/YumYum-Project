import React , {Component} from "react";
import style from './Main.module.css';
import { Button } from "react-bootstrap";
 export default class Main extends Component{
     render(){
         return(
            
            <div className={style.home}>
                <h1 className={style.header}>Are You<br/> Hungry?</h1>
                <p className={style.pra}>why not come down to our resturant to see how we can feel you</p>
                <a href="/Fastfood"><Button className={style.btn}>view menu</Button></a>
            </div>
            
         )
     }
 }