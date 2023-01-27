import React, { useState } from "react";
import "./App.css";
import { IonIcon } from "react-ion-icon";
import HomeScreen from "./components/HomeScreen";

function App() {
  const [open, setOpen] = useState(true);

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
        } duration-500 h-screen border border-gray-100 absolute`}
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
      {/*Home Screen*/}
      <div className="w-screen h-screeen bg-[#fcfdfe]">
        <HomeScreen />
      </div>
    </div>
  );
}

export default App;
