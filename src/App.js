import React, { useReducer, useState } from "react";
import "./App.css";
import { IonIcon } from "react-ion-icon";

function App() {
  const [open, setOpen] = useState(false);
  const [isShownHome, setIsShownHome] = useState(false);
  const [isShownAbout, setIsShownAbout] = useState(false);
  const [isShownResume, setIsShownResume] = useState(false);
  const [isShownPortfolio, setIsShownPortfolio] = useState(false);
  const [isShownContacts, setIsShownContacts] = useState(false);

  function home() {
    setOpen(!open);
    setIsShownHome(true);
    setIsShownAbout(false);
    setIsShownResume(false);
    setIsShownPortfolio(false);
    setIsShownContacts(false);
  }
  function about() {
    setOpen(!open);
    setIsShownHome(false);
    setIsShownAbout(true);
    setIsShownResume(false);
    setIsShownPortfolio(false);
    setIsShownContacts(false);
  }
  return (
    <div className="overflow-x-hidden lg:flex lg:flex-col lg:items-center">
      <div
        className={`${
          open ? "bg-darkCyan" : "bg-transparent"
        } w-10 h-10 duration-300 rounded-full fixed flex items-center justify-center right-3 top-3 
        lg:invisible`}
      >
        <IonIcon
          color={`${open ? "primary" : "secondary"}`}
          onClick={() =>
            setOpen(
              !open,
              setIsShownHome(isShownHome),
              setIsShownAbout(isShownAbout),
              setIsShownResume(isShownResume)
            )
          }
          name={open ? "close" : "menu"}
        ></IonIcon>
      </div>
      <div
        className={`${
          open ? "left-[0px] w-[300px]" : "left-[-300px]"
        } duration-500 h-screen border bg-white z-50 border-gray-100 fixed 
       lg:w-[100px] lg:left-0 lg:border-none lg:bg-transparent`}
      >
        <ul
          className="h-screen w-full flex flex-col items-center justify-center gap-2
        lg:flex lg:flex-col lg:items-start lg:pl-5"
        >
          <a href="#homepage" onClick={home}>
            <li
              onMouseEnter={() => setIsShownHome(true)}
              onMouseLeave={() => setIsShownHome(false)}
              className={`${
                isShownHome
                  ? "bg-darkCyan text-white"
                  : "bg-whitesmoke"
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
          </a>
          <a href="#aboutpage" onClick={about}>
            <li
              onMouseEnter={() => setIsShownAbout(true)}
              onMouseLeave={() => setIsShownAbout(false)}
              className={`${
                isShownAbout
                  ? "bg-darkCyan text-white"
                  : "bg-whitesmoke"
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
          </a>
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
        id="homepage"
        className="w-screen h-screeen p-10 
      md:flex md:h-screen md:flex-col md:justify-center md:items-center md:gap-5
      lg:flex lg:flex-row lg:gap-[50px] lg:items-center lg:justify-center xl:gap-[130px]"
      >
        <div className="md:flex md:flex-col md:gap-5">
          <h1 className="font-semibold text-[44px] font-poppins leading-[66px] text-darkGray mt-5 lg:text-[55px] lg:leading-[70px]">
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
        <div className="md:flex md:flex-col md:gap-5">
          <img
            className="mt-5 md:h-[500px] md:w-[500px] lg:h-[390px] lg:w-[390px]"
            src={require("./assets/header-image.jpg")}
          />
          <div className="flex items-center gap-1 justify-evenly mt-5 md:flex md:gap-1">
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
      <section
        id="aboutpage"
        className="w-screen h-full flex flex-col items-center p-8 
        lg:w-[79%]"
      >
        <h2 className="text-[32px] font-bold font-poppins uppercase mt-2 mb-[10px] lg:mt-0">
          ABOUT
        </h2>
        <div className="flex items-center justify-center">
          <hr className="w-9 border border-gray" />
          <hr className="w-11 border-[2px] border-darkCyan" />
          <hr className="w-9 border border-gray" />
        </div>
        <p className="text-[16px] leading-[35px] text-justify font-poppins mt-5">
          I am a talented, ambitious and hardworking individual, with
          broad skills and experience in mobile and web developing,
          social media and leading projects. A key strength is
          communication; building strong relationships with people in
          order to deliver the best results.
        </p>
        <div className="lg:flex lg:flex-row md:flex md:flex-col md:items-center">
          <img
            className="shadow-md mt-2 md:w-[400px] md:h-[550px]
            lg:w-[350px] lg:h-[480px] xl:w-[350px] xl:h-[375px]"
            src={require("./assets/iconics.jpg")}
          />
          <div className="lg:ml-5">
            <div>
              <h3 className="font-poppins text-[26px] mt-2 font-bold">
                Front-End Web Developer
              </h3>
              <p className="text-[16px] leading-[35px] text-justify font-poppins mt-2">
                Exceptionally creative and dependable Entry Level Web
                Developer with a stellar customer service record and
                superb work ethic. Broadly and deeply knowledgeable in
                a wide variety of computer languages as well as the
                principles and techniques of website construction and
                maintenance.
              </p>
            </div>
            <div>
              <div
                className="text-[16px] font-poppins leading-[35px] mt-2 
              md:flex md:items-start md:justify-start md:w-full md:ml-14 lg:ml-8"
              >
                <ul className="list-disc">
                  <li>
                    <span className="font-bold">Birthday: </span> 13
                    September 2000
                  </li>
                  <li>
                    <span className="font-bold">Website: </span>{" "}
                    https://github.com/vjastoni
                  </li>
                  <li>
                    <span className="font-bold">Phone: </span>{" "}
                    09452272264
                  </li>
                  <li>
                    <span className="font-bold">College: </span> STI
                    College Global City
                  </li>
                </ul>
                <ul className="list-disc md:ml-14">
                  <li>
                    <span className="font-bold">Age: </span> 22
                  </li>
                  <li>
                    <span className="font-bold">Year: </span> 4th Year
                    College
                  </li>
                  <li>
                    <span className="font-bold">Email: </span>{" "}
                    vjastoni13@gmail.com
                  </li>
                  <li>
                    <span className="font-bold">Freelance: </span> Not
                    Available
                  </li>
                </ul>
              </div>

              <p className="text-[16px] leading-[35px] text-justify font-poppins mt-2">
                Hard-working Information Technology major student
                (1.29 GWA) currently attending STI College global
                City, with 4 months of work experience. Frequently
                praised as diligent by my peers, I can be relied upon
                to help your company achieve its goals.
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-[32px] font-bold font-poppins uppercase mt-2 mb-[10px]">
          Skills
        </h2>
        <div className="flex items-center justify-center">
          <hr className="w-9 border border-gray" />
          <hr className="w-11 border-[2px] border-darkCyan" />
          <hr className="w-9 border border-gray" />
        </div>
        <div className=" w-full mt-5 flex flex-col justify-start items-start">
          <h2 className="font-poppins text-[26px] font-bold">
            Look What I can Do
          </h2>
          <p className="text-[16px] leading-[35px] text-justify font-poppins mt-2">
            These are the skills that I have learned while studying at
            STI Collge Global City. Along with my self-study.
          </p>
          <div
            className="mt-2 w-full flex flex-col justify-center gap-3 font-poppins
          lg:flex lg:flex-row"
          >
            <div className="flex flex-col gap-3 lg:flex lg:flex-col lg:gap-3 lg:w-full">
              <div className="flex gap-2 items-center bg-[#d3dbe9] p-3 rounded-md">
                <img
                  className="w-[40px] h-[40px]"
                  src={require("./assets/html.png")}
                />
                <p>
                  <span className="font-bold uppercase">HTML</span> -
                  Advanced
                </p>
              </div>
              <div className="flex gap-2 items-center bg-[#d3dbe9] p-3 rounded-md">
                <img
                  className="w-[40px] h-[40px]"
                  src={require("./assets/js.jpg")}
                />
                <p>
                  <span className="font-bold uppercase">
                    Javascript
                  </span>{" "}
                  - Intermediate
                </p>
              </div>
              <div className="flex gap-2 items-center bg-[#d3dbe9] p-3 rounded-md">
                <img
                  className="w-[40px] h-[40px]"
                  src={require("./assets/css.png")}
                />
                <p>
                  <span className="font-bold uppercase">CSS</span> -
                  Advanced
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:flex lg:flex-col lg:gap-3 lg:w-full">
              <div className="flex gap-2 items-center bg-[#d3dbe9] p-3 rounded-md">
                <img
                  className="w-[40px] h-[40px]"
                  src={require("./assets/java.png")}
                />
                <p>
                  <span className="font-bold uppercase">Java</span> -
                  Intermediate
                </p>
              </div>
              <div className="flex gap-2 items-center bg-[#d3dbe9] p-3 rounded-md">
                <img
                  className="w-[40px] h-[40px]"
                  src={require("./assets/react.png")}
                />
                <p>
                  <span className="font-bold uppercase">
                    React Js
                  </span>{" "}
                  - Beginner
                </p>
              </div>
              <div className="flex gap-2 items-center bg-[#d3dbe9] p-3 rounded-md">
                <img
                  className="w-[40px] h-[40px]"
                  src={require("./assets/c.png")}
                />
                <p>
                  <span className="font-bold uppercase">C#</span> -
                  Intermediate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
