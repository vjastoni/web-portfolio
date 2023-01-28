import React, { useReducer, useState } from "react";
import "./App.css";
import { IonIcon } from "react-ion-icon";
import NavbarReducer from "./reducer/NavbarReducer";

function App() {
  const initialState = false;
  const [open, setOpen] = useState(false);
  const [isShownHome, setIsShownHome] = useState(false);
  const [isShownAbout, setIsShownAbout] = useState(false);
  const [isShownResume, setIsShownResume] = useState(false);
  const [isShownPortfolio, setIsShownPortfolio] = useState(false);
  const [isShownContacts, setIsShownContacts] = useState(false);
  const [falseKamuna, setFalseKamuna] = useState(true);
  const [state, dispatch] = useReducer(NavbarReducer, initialState);
  return (
    <div>
      <div
        className={`${
          open ? "bg-darkCyan" : "bg-transparent"
        } w-10 h-10 duration-300 rounded-full flex items-center justify-center absolute right-3 top-3 
        lg:invisible`}
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
        } duration-500 h-screen border bg-white z-50 border-gray-100 absolute 
       lg:w-[100px] lg:left-0 lg:border-none `}
      >
        <ul
          className="h-screen w-full flex flex-col items-center justify-center gap-2
        lg:flex lg:flex-col lg:items-start lg:pl-5"
        >
          <li
            // onClick={() => dispatch({ type: "ACTIONS.HOME" })}
            onMouseEnter={() => setIsShownHome(true)}
            onMouseLeave={() => setIsShownHome(false)}
            className={`${
              falseKamuna ? "bg-whitesmoke" : "bg-darkCyan"
            } w-[280px] h-14 p-4 rounded-[100px] flex justify-start items-center gap-1 
            lg:w-[56px] lg: lg:text-transparent lg:hover:w-[110px] lg:hover:cursor-pointer lg:duration-300 lg:hover:text-white
            lg:hover:bg-darkCyan`}
          >
            <img
              className={`${isShownHome ? "invert" : "invert-0"}`}
              src={require("./assets/home.png")}
            />
            Home
          </li>
          <li
            onMouseEnter={() => setIsShownAbout(true)}
            onMouseLeave={() => setIsShownAbout(false)}
            // onClick={() => dispatch({ type: "ACTIONS.ABOUT" })}
            className={`${
              falseKamuna ? "bg-whitesmoke" : "bg-darkCyan"
            } w-[280px] h-14 p-4 rounded-[100px] flex justify-start items-center gap-1
            lg:w-[56px] lg: lg:text-transparent lg:hover:w-[110px] lg:hover:cursor-pointer lg:duration-300 lg:hover:text-white
            lg:hover:bg-darkCyan`}
          >
            <img
              className={`${isShownAbout ? "invert" : "invert-0"}`}
              src={require("./assets/profile.png")}
            />
            About
          </li>
          <li
            onMouseEnter={() => setIsShownResume(true)}
            onMouseLeave={() => setIsShownResume(false)}
            className="bg-whitesmoke w-[280px] h-14 p-4 rounded-[100px] flex justify-start items-center gap-1
          lg:w-[56px] lg: lg:text-transparent lg:hover:w-[120px] lg:hover:cursor-pointer lg:duration-300 lg:hover:text-white
          lg:hover:bg-darkCyan"
          >
            <img
              className={`${isShownResume ? "invert" : "invert-0"}`}
              src={require("./assets/resume.png")}
            />
            Resume
          </li>
          <li
            onMouseEnter={() => setIsShownPortfolio(true)}
            onMouseLeave={() => setIsShownPortfolio(false)}
            className="bg-whitesmoke w-[280px] h-14 p-4 rounded-[100px] flex justify-start items-center gap-1
          lg:w-[56px] lg: lg:text-transparent lg:hover:w-[121px] lg:hover:cursor-pointer lg:duration-300 lg:hover:text-white
          lg:hover:bg-darkCyan"
          >
            <img
              className={`${
                isShownPortfolio ? "invert" : "invert-0"
              }`}
              src={require("./assets/portfolio.png")}
            />
            Portfolio
          </li>
          <li
            onMouseEnter={() => setIsShownContacts(true)}
            onMouseLeave={() => setIsShownContacts(false)}
            className="bg-whitesmoke w-[280px] h-14 p-4 rounded-[100px] flex justify-start items-center gap-1
          lg:w-[56px] lg: lg:text-transparent lg:hover:w-[122px] lg:hover:cursor-pointer lg:duration-300 lg:hover:text-white
          lg:hover:bg-darkCyan"
          >
            <img
              className={`${isShownContacts ? "invert" : "invert-0"}`}
              src={require("./assets/contacts.png")}
            />
            Contacts
          </li>
        </ul>
      </div>
      {/*Home Page*/}
      <section
        className="w-screen h-screeen p-10 
      md:flex md:h-screen md:flex-col md:justify-center md:items-center 
      lg:flex lg:flex-row lg:gap-10 lg:items-center lg:justify-center"
      >
        <div>
          <h1 className="font-semibold text-[44px] font-poppins leading-[66px] text-darkGray mt-5 lg:text-[60px] lg:leading-[70px]">
            CRAFTING THE BEST
            <br />
            ONLINE EXPERIENCE
          </h1>
          <p className="text-[15px] font-poppins leading-[30px] lg:text-[17px] lg:mt-4">
            Meet Jastoni Villanueva. A 22-year old web developer in
            <br /> STI College Global City
          </p>
          <div
            className="w-24 mt-2 border border-darkGray flex items-center justify-center rounded-md hover:bg-darkGray hover:cursor-pointer
          hover:text-white duration-300"
          >
            <h1 className="p-2">Check CV</h1>
          </div>
        </div>
        <div>
          <img
            className="mt-5 md:h-[600px] md:w-[600px] lg:h-[390px] lg:w-[390px]"
            src={require("./assets/header-image.jpg")}
          />
          <div className="flex items-center gap-1 justify-evenly mt-5 md:flex md:gap-5">
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
        </div>
      </section>
      {/*About Page*/}
    </div>
  );
}

export default App;
