import React from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (

    <div className="
        w-full h-20 
        flex justify-between items-center 
        bg-[#070b14]
        backdrop-blur-md pl-15 pr-12 py-8
        border-2 border-[#1E1E1E]
      ">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-row gap-2 items-center" >
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-9 h-9 rounded-full object-cover "
        />
        <div className="flex flex-col text-left">
          <p className="text-white text-xs">Olivia</p>
          <p className="text-[#67779C] text-xs">olivia123@gmail.com</p>

        </div>

      </div>
    </div>

  );
}
// figd_mwWGl72 - HXF3RKfkgHDXOug9DHMNoOcTPXW_Qxfk
