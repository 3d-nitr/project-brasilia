import React from "react";
import "./styles/contact.css";
import FooterSection from "../components/FooterSection";

export default function ContactUs() {
  return (
    <>
      <div>
        <h1 className="regiHeadi font-bold text-3xl py-12 md:text-4xl lg:text-5xl">
          Organisers
        </h1>
        <hr></hr>
        <div className="top">
          <div className="border border-slate-700 flex flex-col bg-white shadow-md px-4 py-8 gap-2 items-center text-lg rounded-md md:text-2xl">
            <img
              className="cardimg rounded-md"
              src="https://picsum.photos/200/300"
              alt="cardimage"
            ></img>
            <p>Dr. Nandini Sarkar</p>
            <p>Tel: +91-7873092599</p>
          </div>

          <div className="border border-slate-700 flex flex-col bg-white shadow-md px-4 py-8 gap-2 items-center text-lg rounded-md md:text-2xl">
            <img
              className="cardimg rounded-md"
              src="https://picsum.photos/200/300"
              alt="cardimage"
            ></img>
            <p>Dr. Nivedita Patra</p>
            <p>Tel: +91-6612462282</p>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}
