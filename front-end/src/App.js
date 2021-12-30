import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Topbar from "./Client/Pages/Home/Topbar/Topbar";
import React, { Component } from "react";
import Home from "./Client/Pages/Home/Home";
import Navbarconb from "./Client/Pages/Home/Nav/Nav";
import FastFood from "./Client/Pages/Menu/FastFood/FastFood";
import Sweets from "./Client/Pages/Menu/Sweets/Sweets";
import Login from "./Client/Authentication/Login";
import SignUp from "./Client/Authentication/Sign up";
import Adminarea from "./Client/AdminArea/Admin-area";
import CreateProduct from "./Client/AdminArea/Product/CreateProduct";
import Delete from "./Client/AdminArea/Product/delete";
import Update from "./Client/AdminArea/Product/Update";
import DeleteCategory from "./Client/AdminArea/Category/deleteCategory";
import UpdateCategory from "./Client/AdminArea/Category/UpdateCategory";
import CreateCategory from "./Client/AdminArea/Category/CreateCategory";
import Order from "./Client/order/order";
import AboutUS from "./Client/Pages/AboutUs/AboutUS";
import Cart from "./Client/Cart/Cart";
import Footer from "./Client/Pages/Home/footer/footer";
import Cheef from "./Client/Pages/cheef/cheef";
//
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Topbar />

          <Switch>
            <Route exact path="/">
              <Home />
              <Footer />
            </Route>
            <Route exact path="/Cart">
              <Navbarconb />
              <Cart />
              <Footer />
            </Route>
            <Route path="/Order/:id">
              <Navbarconb />
              <Order />
              <Footer />
            </Route>
            <Route exact path="/AboutUS">
              <Navbarconb />
              <AboutUS />
              <Cheef/>
              <Footer />

            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/SignUp">
              <SignUp />
            </Route>
            <Route exact path="/Fastfood">
              <Navbarconb />
              <FastFood />
              <Footer />
            </Route>
            <Route exact path="/Sweet">
              <Navbarconb />
              <Sweets />
              <Footer />
            </Route>
           
            <Route exact path="/AdminArea">
              <Navbarconb />
              <Adminarea />
            </Route>
            <Route exact path="/deleteCategory">
              <Navbarconb />
              <DeleteCategory />
              <Footer />
            </Route>
            <Route exact path="/CreateCategory">
              <Navbarconb />
              <CreateCategory />
              <Footer />
            </Route>
            <Route exact path="/UpdateCategory">
              <Navbarconb />
              <UpdateCategory />
              <Footer />
            </Route>
            <Route exact path="/UpdateProduct">
              <Navbarconb />
              <Update />
              <Footer />
            </Route>
            <Route exact path="/DeleteProduct">
              <Navbarconb />
              <Delete />
              <Footer />
            </Route>
            <Route exact path="/CreateProduct">
              <Navbarconb />
              <CreateProduct />
              <Footer />
            </Route>

            <h2>meals app</h2>
          </Switch>
        </Router>
      </div>
    );
  }
}
