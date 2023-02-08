import React, { useReducer, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";
import { IonIcon } from "react-ion-icon";

function App() {
  const [open, setOpen] = useState(false);
  const [isShownHome, setIsShownHome] = useState(false);
  const [isShownAbout, setIsShownAbout] = useState(false);
  const [isShownResume, setIsShownResume] = useState(false);
  const [isShownPortfolio, setIsShownPortfolio] = useState(false);
  const [isShownContacts, setIsShownContacts] = useState(false);
  const [isHoverDiaeta, setIsHoverDiaeta] = useState(false);
  const [isHoverRMS, setIsHoverRMS] = useState(false);
  const [isHoverCalc, setIsHoverCalc] = useState(false);
  const [isHoverDg, setIsHoverDg] = useState(false);
  const [isHoverBsq, setIsHoverBsq] = useState(false);
  const [isHoverLocation, setIsHoverLocation] = useState(false);
  const [isHoverEmail, setIsHoverEmail] = useState(false);
  const [isHoverCall, setIsHoverCall] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

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
  function resume() {
    setOpen(!open);
    setIsShownHome(false);
    setIsShownAbout(false);
    setIsShownResume(true);
    setIsShownPortfolio(false);
    setIsShownContacts(false);
  }
  function portfolio() {
    setOpen(!open);
    setIsShownHome(false);
    setIsShownAbout(false);
    setIsShownResume(false);
    setIsShownPortfolio(true);
    setIsShownContacts(false);
  }
  function contacts() {
    setOpen(!open);
    setIsShownHome(false);
    setIsShownAbout(false);
    setIsShownResume(false);
    setIsShownPortfolio(false);
    setIsShownContacts(true);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vv8m11o",
        "template_3ckl7o7",
        form.current,
        "t5xsrbyqMnilHRXPO"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmail("");
          setFirstName("");
          setMessage("");
          setSubject("");
          alert("Message Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
              onMouseEnter={home}
              onMouseLeave={home}
              className={`${
                isShownHome
                  ? "bg-darkCyan lg:bg-darkCyan text-white lg:text-white"
                  : "bg-whitesmoke lg:bg-whitesmoke"
              } w-[280px] h-14 p-4 rounded-[100px] flex justify-start items-center gap-1 
            lg:w-[56px] lg:text-transparent lg:hover:w-[110px] lg:hover:cursor-pointer lg:duration-300 lg:hover:text-white
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
              onMouseEnter={about}
              onMouseLeave={about}
              className={`${
                isShownAbout
                  ? "bg-darkCyan lg:bg-darkCyan text-white lg:text-white"
                  : "bg-whitesmoke lg:bg-whitesmoke"
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
          <a href="#resumepage" onClick={resume}>
            <li
              onMouseEnter={resume}
              onMouseLeave={resume}
              className={`${
                isShownResume
                  ? "bg-darkCyan lg:bg-darkCyan text-white lg:text-white"
                  : "bg-whitesmoke lg:bg-whitesmoke"
              }bg-whitesmoke w-[280px] h-14 p-4 rounded-[100px] flex justify-start items-center gap-1
          lg:w-[56px] lg: lg:text-transparent lg:hover:w-[120px] lg:hover:cursor-pointer lg:duration-300 lg:hover:text-white
          lg:hover:bg-darkCyan`}
            >
              <img
                className={`${isShownResume ? "invert" : "invert-0"}`}
                src={require("./assets/resume.png")}
              />
              Resume
            </li>
          </a>
          <a href="#portfoliopage" onClick={portfolio}>
            <li
              onMouseEnter={portfolio}
              onMouseLeave={portfolio}
              className={`${
                isShownPortfolio
                  ? "bg-darkCyan lg:bg-darkCyan text-white lg:text-white"
                  : "bg-whitesmoke lg:bg-whitesmoke"
              }bg-whitesmoke w-[280px] h-14 p-4 rounded-[100px] flex justify-start items-center gap-1
          lg:w-[56px] lg: lg:text-transparent lg:hover:w-[120px] lg:hover:cursor-pointer lg:duration-300 lg:hover:text-white
          lg:hover:bg-darkCyan`}
            >
              <img
                className={`${
                  isShownPortfolio ? "invert" : "invert-0"
                }`}
                src={require("./assets/portfolio.png")}
              />
              Portfolio
            </li>
          </a>
          <a href="#contactspage" onClick={contacts}>
            <li
              onMouseEnter={contacts}
              onMouseLeave={contacts}
              className={`${
                isShownContacts
                  ? "bg-darkCyan lg:bg-darkCyan text-white lg:text-white"
                  : "bg-whitesmoke lg:bg-whitesmoke"
              }bg-whitesmoke w-[280px] h-14 p-4 rounded-[100px] flex justify-start items-center gap-1
        lg:w-[56px] lg: lg:text-transparent lg:hover:w-[120px] lg:hover:cursor-pointer lg:duration-300 lg:hover:text-white
        lg:hover:bg-darkCyan`}
            >
              <img
                className={`${
                  isShownContacts ? "invert" : "invert-0"
                }`}
                src={require("./assets/contacts.png")}
              />
              Contacts
            </li>
          </a>
        </ul>
      </div>
      {/*Home Page*/}
      <section
        id="homepage"
        className="w-screen h-screeen p-10 
      md:flex md:h-screen md:flex-col md:justify-center md:items-center md:gap-5
      lg:flex lg:flex-row lg:gap-[50px] lg:items-center lg:justify-center xl:gap-[130px]"
      >
        <div className="md:flex md:flex-col md:gap-5 lg:animate-[moveRight_0.8s_ease-in-out] ">
          <h1 className="font-semibold text-[44px] font-poppins leading-[66px] text-darkGray mt-5 lg:text-[55px] lg:leading-[70px]">
            CRAFTING THE BEST
            <br />
            ONLINE EXPERIENCE
          </h1>
          <p className="text-[15px] font-poppins leading-[30px] lg:text-[17px] lg:mt-4">
            Meet Jastoni Villanueva. A 22-year old web developer in
            <br /> STI College Global City
          </p>
          <a
            href="https://drive.google.com/file/d/1_LG786q-s-hVrL7ClizOAgcAdrmAw4PB/view?usp=sharing"
            target="_blank"
          >
            <div
              className="w-24 mt-2 border border-darkGray flex items-center justify-center rounded-md hover:bg-darkGray hover:cursor-pointer
          hover:text-white duration-300"
            >
              <h1 className="p-2">Check CV</h1>
            </div>
          </a>
        </div>
        <div className="md:flex md:flex-col md:gap-5 lg:animate-[moveLeft_0.8s_ease-in-out]">
          <img
            className="mt-5 md:h-[500px] md:w-[500px] lg:h-[390px] lg:w-[390px]"
            src={require("./assets/header-image.jpg")}
          />
          <div className="flex items-center gap-1 justify-evenly mt-5 md:flex md:gap-1">
            <a href="https://twitter.com/vjast_" target="_blank">
              <IonIcon
                size="large"
                color="dark"
                name="logo-twitter"
              ></IonIcon>
            </a>
            <a
              href="https://www.facebook.com/tjhayzz"
              target="_blank"
            >
              <IonIcon
                size="large"
                color="dark"
                name="logo-facebook"
              ></IonIcon>
            </a>
            <a
              href="https://www.instagram.com/vjast_/"
              target="_blank"
            >
              <IonIcon
                size="large"
                color="dark"
                name="logo-instagram"
              ></IonIcon>
            </a>
            <a
              href="https://www.linkedin.com/in/jastoni-villanueva-8a257b234/"
              target="_blank"
            >
              <IonIcon
                size="large"
                color="dark"
                name="logo-linkedin"
              ></IonIcon>
            </a>
          </div>
        </div>
      </section>
      {/*About Page*/}
      <section
        id="aboutpage"
        className="w-screen h-full flex flex-col items-center p-8 
        lg:w-[79%] lg:animate-[moveTop_0.8s_ease-in-out]"
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
                className="text-[16px] font-poppins leading-[35px] mt-2 ml-7
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
        <h2 className="text-[32px] font-bold font-poppins uppercase mt-5 mb-[10px]">
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
      {/* Resume Page */}
      <section
        id="resumepage"
        className="w-screen h-full flex flex-col items-center p-8 
        lg:w-[79%] lg:mb-20 lg:animate-[moveTop_0.8s_ease-in-out]"
      >
        <div>
          <h2 className="text-[32px] text-center font-bold font-poppins uppercase mt-2 mb-[10px] lg:mt-0">
            RESUME
          </h2>
          <div className="flex items-center justify-center">
            <hr className="w-9 border border-gray" />
            <hr className="w-11 border-[2px] border-darkCyan" />
            <hr className="w-9 border border-gray" />
          </div>
          <p className="text-[16px] leading-[35px] text-justify font-poppins mt-2 lg:text-center lg:w-[90%] lg:ml-7">
            I want to gain confidence and greatness using my potential
            in the field of Front end Web Development and express my
            innovative creative skills for self and my future company
            growth. After 2-3 years of experience, I want to pursue my
            career as a full-stack Web Developer.
          </p>
        </div>
        <div className="w-full lg:flex lg:flex-row lg:gap-[140px] lg:mt-5">
          <div className="lg:ml-[60px]">
            <h3 className="font-poppins text-[26px] text-darkGray mt-2 font-bold">
              Summary
            </h3>
            <div className="w-full flex mt-2 justify-start gap-3">
              <div className="flex flex-col justify-center items-center">
                <div className="w-[17px] h-[17px] border-2 border-darkCyan rounded-full" />
                <div
                  className="h-[190px] border-l-2 border-darkCyan 
              md:h-[140px]"
                />
              </div>
              <div className="flex flex-col gap-2 font-poppins">
                <h4 className="uppercase text-[18px] text-darkCyan font-semibold font-poppins leading-[18px]">
                  Jastoni Villanueva
                </h4>
                <p className="italic font-[15px]">
                  A 22-year old web developer currently studying at
                  STI College Global City.
                </p>
                <ul className="list-disc ml-6 flex flex-col gap-2">
                  <li>North Signal Village, Taguig City</li>
                  <li>09452272264</li>
                  <li>vjastoni13@gmail.com</li>
                </ul>
              </div>
            </div>
            <h3 className="font-poppins text-[26px] text-darkGray mt-4 font-bold">
              Education
            </h3>
            <div className="w-full flex mt-2 justify-start gap-3">
              <div className="flex-col">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-[17px] h-[17px] border-2 border-darkCyan rounded-full" />
                  <div className="h-[225px] border-l-2 border-darkCyan md:h-[153px]" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="w-[17px] h-[17px] border-2 border-darkCyan rounded-full" />
                  <div className="h-[205px] lg:h-[180px] border-l-2 border-darkCyan" />
                </div>
              </div>

              <div className="flex flex-col gap-2 font-poppins">
                <h4 className="uppercase text-[18px] text-darkCyan font-semibold font-poppins leading-[18px]">
                  STI College Global City
                </h4>
                <div className="w-[156px] h-[35px] font-raleway font-semibold bg-[#d3dbe9] rounded-sm flex justify-center items-center">
                  2017 - Present
                </div>
                <p className="italic font-[15px]">
                  Bachelor of Science in Information Technology -
                  Senior Highschool - College
                </p>
                <ul className="list-disc ml-6 flex flex-col gap-2">
                  <li>Graduated with Honors</li>
                  <li>
                    HTML, CSS, Javascript, C#, Java, Android App
                    Development
                  </li>
                </ul>

                <h4 className="uppercase text-[18px] text-darkCyan font-semibold font-poppins leading-[18px] mt-1">
                  Army's Angels Integrated School
                </h4>
                <div className="w-[156px] h-[35px] font-raleway font-semibold bg-[#d3dbe9] rounded-sm flex justify-center items-center">
                  2013 - 2017
                </div>
                <p className="italic font-[15px]">
                  Elementary - Junior Highschool
                </p>
                <ul className="list-disc ml-6 flex flex-col gap-2">
                  <li>Graduated with Honors</li>
                  <li>Visual Basic</li>
                  <li>Basic HTML, CSS</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-poppins text-[26px] text-darkGray mt-2 font-bold">
              Awards and Certificates
            </h3>
            <div className="w-full flex mt-2 justify-start gap-3">
              <div className="flex flex-col justify-start items-center">
                <div className="w-[17px] h-[17px] border-2 border-darkCyan rounded-full" />
                <div className="h-[148px] border-l-2 border-darkCyan" />
                <div className="w-[17px] h-[17px] border-2 border-darkCyan rounded-full" />
                <div className="h-[84px] border-l-2 border-darkCyan" />
                <div className="w-[17px] h-[17px] border-2 border-darkCyan rounded-full" />
                <div className="h-[140px] border-l-2 border-darkCyan" />
              </div>
              <div className="flex flex-col gap-2 font-poppins">
                <h4 className="uppercase text-[18px] text-darkCyan font-semibold font-poppins leading-[18px]">
                  4th Year College
                </h4>
                <div className="w-[156px] h-[35px] font-raleway font-semibold bg-[#d3dbe9] rounded-sm flex justify-center items-center">
                  2021 - 2022
                </div>
                <ul className="list-disc ml-6 flex flex-col gap-2">
                  <li>CodeFest Champion</li>
                  <li>11th IT Skills Olympics</li>
                  <li> SAP Business One</li>
                </ul>
                <h4 className="uppercase text-[18px] text-darkCyan font-semibold font-poppins leading-[18px]">
                  1st Year College
                </h4>
                <div className="w-[156px] h-[35px] font-raleway font-semibold bg-[#d3dbe9] rounded-sm flex justify-center items-center">
                  2019
                </div>
                <ul className="list-disc ml-6 flex flex-col gap-2">
                  <li>CodeFest Champion</li>
                </ul>
                <h4 className="uppercase text-[18px] text-darkCyan font-semibold font-poppins leading-[18px]">
                  Senior Highschool
                </h4>
                <div className="w-[156px] h-[35px] font-raleway font-semibold bg-[#d3dbe9] rounded-sm flex justify-center items-center">
                  2019
                </div>
                <ul className="list-disc ml-6 flex flex-col gap-2">
                  <li>CodeFest Local Level</li>
                  <li>CodeFest Cluster Level</li>
                  <li> Graduated with Honors</li>
                </ul>
                <a
                  href="https://drive.google.com/file/d/1cGnLxMTYS8nxDrqsS75Xk-Ocut_CsTV2/view?usp=sharing"
                  target="_blank"
                >
                  <p className="mt-2 text-darkCyan underline">
                    Click to see my Certificates
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Page */}
      <section
        id="portfoliopage"
        className="w-screen h-full flex flex-col items-center p-8
        lg:w-[79%] lg:mb-20 lg:animate-[moveTop_0.8s_ease-in-out]"
      >
        <h2 className="text-[32px] text-center font-bold font-poppins uppercase mt-2 mb-[10px] lg:mt-0">
          Portfolio
        </h2>
        <div className="flex items-center justify-center">
          <hr className="w-9 border border-gray" />
          <hr className="w-11 border-[2px] border-darkCyan" />
          <hr className="w-9 border border-gray" />
        </div>
        <div className="w-full mt-5 lg:mb-20">
          <h3 className="font-poppins text-[26px] font-bold text-center">
            Accomplished Projects
          </h3>
          <div
            className="w-full flex flex-col items-center gap-5 md:flex md:flex-row md:flex-wrap md:items-center md:justify-center
          md:gap-5 lg:mt-5 lg:gap-16"
          >
            {/* BASIC CALCULATOR */}
            <div
              className="w-64 h-[380px] mt-2 flex flex-col items-center justify-center rounded-md 
            hover:bg-modalBg duration-300 hover:cursor-pointer lg:w-[290px] lg:h-[360px] lg:hover:scale-110"
            >
              <img
                className={` visible duration-300 w-10 h-10 invert `}
                src={require("./assets/clickhere.png")}
              />
              <img
                className="w-64 h-[380px] -z-20 border absolute border-gray-100 rounded-md shadow-md
                lg:w-[290px] lg:h-[360px] hover:scale-110"
                src={require("./assets/BasicCalculator.png")}
              />
            </div>

            {/* DIGISERVE */}
            <div
              onMouseEnter={() => setIsHoverBsq(true)}
              onMouseLeave={() => setIsHoverBsq(false)}
              className="w-[350px] h-[200px] mt-2 flex flex-col items-center justify-center rounded-md 
            hover:bg-modalBg duration-300 hover:cursor-pointer lg:w-[356px] lg:h-[258px] hover:scale-110"
            >
              <img
                className={`${
                  isHoverBsq
                    ? "visible duration-300"
                    : "hidden duration-300"
                } w-10 h-10 invert `}
                src={require("./assets/clickhere.png")}
              />
              <img
                className="w-[350px] h-[200px] -z-20 border absolute border-gray-100 rounded-md shadow-md
                lg:w-[356px] lg:h-[258px] hover:scale-110"
                src={require("./assets/Digiserve.png")}
              />
            </div>

            <div
              onMouseEnter={() => setIsHoverDg(true)}
              onMouseLeave={() => setIsHoverDg(false)}
              className="w-[350px] h-[200px] mt-2 flex flex-col items-center justify-center rounded-md 
            hover:bg-modalBg duration-300 hover:cursor-pointer lg:w-[356px] lg:h-[200px] hover:scale-110"
            >
              <img
                className={`${
                  isHoverDg
                    ? "visible duration-300"
                    : "hidden duration-300"
                } w-10 h-10 invert `}
                src={require("./assets/clickhere.png")}
              />
              <img
                className="w-[350px] h-[200px] -z-20 border absolute border-gray-100 rounded-md shadow-md lg:w-[356px] lg:h-[200px] hover:scale-110"
                src={require("./assets/bsq.png")}
              />
            </div>
            <div
              onMouseEnter={() => setIsHoverDiaeta(true)}
              onMouseLeave={() => setIsHoverDiaeta(false)}
              className="w-64 h-[420px] mt-2 flex flex-col items-center justify-center rounded-md 
            hover:bg-modalBg duration-300 hover:cursor-pointer lg:w-[356px] lg:h-[529px] hover:scale-110"
            >
              <img
                className={`${
                  isHoverDiaeta
                    ? "visible duration-300"
                    : "hidden duration-300"
                } w-10 h-10 invert `}
                src={require("./assets/clickhere.png")}
              />
              <img
                className="w-64 h-[420px] -z-20 border absolute border-gray-100 rounded-md shadow-md lg:w-[356px] lg:h-[529px] hover:scale-110"
                src={require("./assets/Diaeta.png")}
              />
            </div>

            <div
              onMouseEnter={() => setIsHoverRMS(true)}
              onMouseLeave={() => setIsHoverRMS(false)}
              className="w-64 h-[420px] mt-2 flex flex-col items-center justify-center rounded-md 
            hover:bg-modalBg duration-300 hover:cursor-pointer lg:w-[356px] lg:h-[532px] hover:scale-110"
            >
              <img
                className={`${
                  isHoverRMS
                    ? "visible duration-300"
                    : "hidden duration-300"
                } w-10 h-10 invert `}
                src={require("./assets/clickhere.png")}
              />
              <img
                className="w-64 h-[420px] -z-20 border absolute border-gray-100 rounded-md shadow-md lg:w-[356px] lg:h-[532px] hover:scale-110"
                src={require("./assets/RMS.png")}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Contacts Page */}
      <section
        id="contactspage"
        className="w-screen h-full flex flex-col items-center p-8 
        lg:w-[79%] lg:mb-20"
      >
        <div className="w-full mb-10">
          <h2 className="text-[32px] font-bold text-center font-poppins uppercase mt-2 mb-[10px] lg:mt-0">
            Contact
          </h2>
          <div className="flex items-center justify-center">
            <hr className="w-9 border border-gray" />
            <hr className="w-11 border-[2px] border-darkCyan" />
            <hr className="w-9 border border-gray" />
          </div>
          <div className="w-full lg:flex lg:flex-row lg:gap-5 lg:items-center lg:justify-center lg:animate-[moveRight_0.8s_ease-in-out]">
            <div className="mt-10 w-full flex flex-col items-start gap-10 lg:w-[600px]">
              {/* Location */}
              <div className="w-full flex gap-4 items-center">
                <div
                  onMouseEnter={() => setIsHoverLocation(true)}
                  onMouseLeave={() => setIsHoverLocation(false)}
                  className="w-[44px] h-[44px] bg-[#eef7ff] rounded-full flex items-center justify-center hover:cursor-pointer
              hover:bg-darkCyan duration-300"
                >
                  <img
                    className={`${
                      isHoverLocation ? "invert" : "invert-0"
                    } w-7 h-7`}
                    src={require("./assets/location.png")}
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-raleway text-[22px] font-bold">
                    Location:
                  </h2>
                  <p className="font-poppins text-[#728394] text-[14px]">
                    North Signal Village Taguig City
                  </p>
                </div>
              </div>
              {/* Email */}
              <div className="w-full flex gap-4 items-center">
                <div
                  onMouseEnter={() => setIsHoverEmail(true)}
                  onMouseLeave={() => setIsHoverEmail(false)}
                  className="w-[44px] h-[44px] bg-[#eef7ff] rounded-full flex items-center justify-center hover:cursor-pointer
              hover:bg-darkCyan duration-300"
                >
                  <img
                    className={`${
                      isHoverEmail ? "invert" : "invert-0"
                    } w-7 h-7`}
                    src={require("./assets/contacts.png")}
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-raleway text-[22px] font-bold">
                    Email:
                  </h2>
                  <p className="font-poppins text-[#728394] text-[14px]">
                    vjastoni13@gmail.com
                  </p>
                </div>
              </div>
              {/* Call */}
              <div className="w-full flex gap-4 items-center">
                <div
                  onMouseEnter={() => setIsHoverCall(true)}
                  onMouseLeave={() => setIsHoverCall(false)}
                  className="w-[44px] h-[44px] bg-[#eef7ff] flex items-center justify-center rounded-full hover:cursor-pointer
                hover:bg-darkCyan duration-300"
                >
                  <img
                    className={`${
                      isHoverCall ? "invert" : "invert-0"
                    } w-7 h-7`}
                    src={require("./assets/call.png")}
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-raleway text-[22px] font-bold">
                    Call:
                  </h2>
                  <p className="font-poppins text-[#728394] text-[14px]">
                    09452272264
                  </p>
                </div>
              </div>
              <div className="w-full">
                <iframe
                  className="w-full h-[300px] rounded-md lg:w-[350px]"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7724.834571564102!2d121.057447!3d14.5181077!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8b56bb4dd9b%3A0x4fdd8e78b96ac86d!2sNorth%20Signal%20Village%2C%20Taguig%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1675343420308!5m2!1sen!2sph"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="w-full flex flex-col gap-5 justify-center items-center mt-10 lg:w-[550px] lg:animate-[moveLeft_0.8s_ease-in-out]">
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col gap-5 mb-5 lg:flex lg:flex-row lg:w-[550px]">
                  <input
                    required
                    name="name"
                    placeholder="Your Name"
                    className="h-[44px] w-[350px] border border-gray-500 rounded-sm pl-2"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    required
                    name="email"
                    placeholder="Your Email"
                    className="h-[44px] w-[350px] border border-gray-500 rounded-sm pl-2"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <input
                  required
                  name="subject"
                  placeholder="Subject"
                  className="h-[44px] w-[350px] border mb-5 border-gray-500 rounded-sm pl-2 lg:w-full"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  required
                  name="message"
                  placeholder="Message"
                  className="w-full h-48 md:w-[350px] border mb-5 border-gray-500 rounded-sm pl-2 pt-2 lg:w-full"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <input
                  value="Send Message"
                  type="submit"
                  className="w-full h-[45px] rounded-md bg-darkCyan text-white"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full ">
        <div className="w-full flex flex-col items-center bg-[#f7f8f9] justify-center p-10 lg:animate-[moveTop_0.8s_ease-in-out]">
          <h1 className=" font-extrabold text-[36px] text-darkGray">
            Jastoni Villanueva
          </h1>
          <p className="font-raleway text-darkGray text-[14px] mt-5 italic">
            Contact me @
          </p>
          <div className="w-full flex items-center justify-center gap-2 mt-5">
            <a href="https://twitter.com/vjast_" target="_blank">
              <div className="h-[36px] w-[36px] bg-darkCyan rounded-full flex items-center justify-center">
                <IonIcon
                  color="primary"
                  name="logo-twitter"
                ></IonIcon>
              </div>
            </a>
            <a
              href="https://www.facebook.com/tjhayzz"
              target="_blank"
            >
              <div className="h-[36px] w-[36px] bg-darkCyan rounded-full flex items-center justify-center">
                <IonIcon
                  color="primary"
                  name="logo-facebook"
                ></IonIcon>
              </div>
            </a>
            <a
              href="https://www.instagram.com/vjast_/"
              target="_blank"
            >
              <div className="h-[36px] w-[36px] bg-darkCyan rounded-full flex items-center justify-center">
                <IonIcon
                  color="primary"
                  name="logo-instagram"
                ></IonIcon>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/jastoni-villanueva-8a257b234/"
              target="_blank"
            >
              <div className="h-[36px] w-[36px] bg-darkCyan rounded-full flex items-center justify-center">
                <IonIcon
                  color="primary"
                  name="logo-linkedin"
                ></IonIcon>
              </div>
            </a>
          </div>
          <div className="text-center flex flex-col mt-10 items-center">
            <p className="text-[14px]">
              ©Web Portfolio. All Rights Reserved
            </p>
            <p className="text-[13px]">
              Developed by{" "}
              <span className="text-darkCyan">
                Jastoni Villanueva
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
