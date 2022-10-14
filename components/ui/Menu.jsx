import React, { useState } from "react";
import Link from "next/link";
const Menu = () => {
  const [activo, setActivo] = useState(false);
  console.log(activo);

  return (
    <>
      <button
        className="ml-[50%] bg-green-600 "
        onClick={() => setActivo(!activo)}
      >
        Activar menu
      </button>
      {activo != false ? (
        <>
          <div className="bg-[#06364c] w-[25%] h-[100vh]">
            <div className="text-left pl-[100px]">
              <p className="text-2xl text-white pt-[200px]">Iniciar Sesion </p>
              <p className="text-2xl text-white pt-10">
                <Link href={'/Prestamos'}>Prestamo</Link>
              </p>
              <p className="text-2xl text-white pt-10">Como funciona?</p>
              <p className="text-2xl text-white pt-10">Nosotros</p>
              <p className="text-2xl text-white pt-10">Perfil</p>
              <p className="text-2xl text-white pt-10">Contactanos</p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Menu;
