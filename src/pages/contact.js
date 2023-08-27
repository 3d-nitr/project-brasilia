import React from "react";
import './styles/contact.css';
import Navbar from "../components/marginals/Navbar";

export default function ContactUs(){
    return(
        <>
        <Navbar />
        <div className="main">
            <h1 className="regiHeadi">Organisers</h1>
            <hr></hr>
            <div className="top">
                <div className="card">
                    <img className="cardimg" src="https://picsum.photos/200/300" alt="cardimage"></img>
                    <p>Dr. Nandini Sarkar</p>
                    <p>Tel: +91-7873092599</p>
                </div>
                <div className="card">
                    <img className="cardimg" src="https://picsum.photos/200/300" alt="cardimage"></img>
                    <p>Dr. Nivedita Patra</p>
                    <p>Tel: +91-6612462282</p>
                </div>
            </div>
            <h1 className="regiHeadi">Contact Details</h1>
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
        </>
    );
};