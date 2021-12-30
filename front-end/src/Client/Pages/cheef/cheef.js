import React from 'react';
import "./cheef.css";
export default function Cheef() {
    return (
        <div className="testmonials section" id="testmonials">
            <h1>Our Cheef</h1>
            <div className="container">
                <div className="card">
                <div className="top">
                    <img src="/images/right-arrow.png" alt="arrow" className="left" />
                    <img src="/images/hasan.jpg" alt="roro" className="user" />
                    <img src="/images/youtube.png" alt="youtube" className="right"/>
                </div>
                <div className="center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     illum unde ullam earum tenetur quasi facere aperiam nam sapiente?
                </div>
                <div className="bottom">
                    <h3>Hassan</h3>
                    <h4>Cheef of Sweet Section</h4>

                </div>
                </div>
                <div className="card">
                <div className="top">
                    <img src="/images/right-arrow.png" alt="arrow" className="left" />
                    <img src="/images/shirbiny.jpg" alt="roro" className="user" />
                    <img src="/images/twitter.png" alt="twitter" className="right"/>
                </div>
                <div className="center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     illum unde ullam earum tenetur quasi facere aperiam nam sapiente?
                </div>
                <div className="bottom">
                    <h3>El Shirbiny</h3>
                    <h4>Main Cheef of Resturant</h4>

                </div>
                </div>
                <div className="card">
                <div className="top">
                    <img src="/images/right-arrow.png" alt="arrow" className="left" />
                    <img src="/images/borak.jfif" alt="roro" className="user" />
                    <img src="/images/linkedin.png" alt="linkedin" className="right"/>
                </div>
                <div className="center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     illum unde ullam earum tenetur quasi facere aperiam nam sapiente?
                </div>
                <div className="bottom">
                    <h3>borak</h3>
                    <h4>    Cheef of Fast Food Section</h4>

                </div>
                </div>
            </div>
        </div>
    );
}
