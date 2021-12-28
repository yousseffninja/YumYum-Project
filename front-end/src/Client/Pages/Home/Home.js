import React , {Component} from "react";
import  Navbarconb  from './Nav/Nav';
import Main from './Main/Main';
import BestSelling from './BestSelling/BestSelling';
import Contact from './contact/contact';


export default class Home extends Component{
    render(){
        return(
            <div>
            <Navbarconb/>
            <Main/>
            <BestSelling/>
            <Contact/>
            </div>
             
        )
    }
}