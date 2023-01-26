import React from "react";
import "./App.css";

function App() {
  return (
    <div className="h-screen w-[73%] border border-gray-100">
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
  );
}

export default App;
