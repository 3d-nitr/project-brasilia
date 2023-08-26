import React from "react";
import './contact.css';

export default function Contact(){
    return(
        <div className="main">
            <h1>Organisers</h1>
            <hr></hr>
            <div className="top">
                <div className="card">
                    <img className="cardimg" src="https://picsum.photos/200/300"></img>
                    <p>Dr. Nandini Sarkar</p>
                    <p>Tel: +91-7873092599</p>
                </div>
                <div className="card">
                    <img className="cardimg" src="https://picsum.photos/200/300"></img>
                    <p>Dr. Nivedita Patra</p>
                    <p>Tel: +91-6612462282</p>
                </div>
            </div>
            <h1>Contact Details</h1>
            <hr></hr>
            <div className="bottom">
            <div className="address">
                <h4>Address</h4>
                <p>Department of Biotech. & Medical
                  Engg., NIT, Rourkela-769008.</p>
            </div>
            <div className="email">
                <h4>Email</h4>
                <p>bioengineering23@gmail.com</p>
            </div>
            </div>
        </div>
    );
};