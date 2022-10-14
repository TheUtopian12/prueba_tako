import React from "react";
import Menu from "./ui/Menu";
import Prestamos from '../pages/Prestamos/index'
const Principal = () => {
  return (
    <div className="flex gap-10">
       <Menu/>
      <div className="w-[75%] h-[100vh] ">
      <Prestamos/>

      </div>
    </div>
  );
};

export default Principal;
