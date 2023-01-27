import React, { useState } from "react";
import "./App.css";
import { IonIcon } from "react-ion-icon";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className={`${
          open ? "bg-darkCyan" : "bg-transparent"
        } w-10 h-10 duration-300 rounded-full flex items-center justify-center absolute right-3 top-3`}
      >
        <IonIcon
          color={`${open ? "primary" : "secondary"}`}
          onClick={() => setOpen(!open)}
          name={open ? "close" : "menu"}
        ></IonIcon>
      </div>
      <div
        className={`${
          open ? "left-[0px] w-[300px]" : "left-[-300px]"
        } duration-500 h-screen border bg-white z-50 border-gray-100 absolute`}
      >
        <ul className="h-screen w-full flex flex-col items-center justify-center gap-2">
          <li className="bg-whitesmoke w-[280px] h-14 p-4 rounded-[100px] flex justify-start items-center gap-1">
            <img src={require("./assets/home.png")} />
            Home
          </li>
          <li className="bg-whitesmoke w-[280px] h-14 p-4 rounded-[100px] flex justify-start items-center gap-1">
            <img src={require("./assets/profile.png")} />
            About
          </li>
          <li className="bg-whitesmoke w-[280px] h-14 p-4 rounded-[100px] flex justify-start items-center gap-1">
            <img src={require("./assets/resume.png")} />
            Resume
          </li>
          <li className="bg-whitesmoke w-[280px] h-14 p-4 rounded-[100px] flex justify-start items-center gap-1">
            <img src={require("./assets/portfolio.png")} />
            Portfolio
          </li>
          <li className="bg-whitesmoke w-[280px] h-14 p-4 rounded-[100px] flex justify-start items-center gap-1">
            <img src={require("./assets/contacts.png")} />
            Contacts
          </li>
        </ul>
      </div>
      {/*Home Page*/}
      <section className="w-screen h-screeen p-10">
        <h1 className="font-semibold text-[44px] font-poppins leading-[66px] text-darkGray mt-5">
          CRAFTING THE BEST
          <br />
          ONLINE EXPERIENCE
        </h1>
        <p className="text-[15px] font-poppins leading-[30px]">
          Meet Jastoni Villanueva. A 22-year old web developer in
          <br /> STI College Global City
        </p>
        <div className="flex items-center gap-1 justify-evenly mt-5">
          <IonIcon
            size="large"
            color="dark"
            name="logo-twitter"
          ></IonIcon>
          <IonIcon
            size="large"
            color="dark"
            name="logo-facebook"
          ></IonIcon>
          <IonIcon
            size="large"
            color="dark"
            name="logo-instagram"
          ></IonIcon>
          <IonIcon
            size="large"
            color="dark"
            name="logo-linkedin"
          ></IonIcon>
          <IonIcon
            size="large"
            color="dark"
            name="logo-google"
          ></IonIcon>
        </div>
        <img
          className="mt-5"
          src={require("./assets/header-image.jpg")}
        />
      </section>
    </div>
  );
}

export default App;
