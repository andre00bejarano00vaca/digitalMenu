'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Add from './Add';

const Menu = ({dataList}) => {
  console.log(dataList)
  const [menuItems, setMenuItems] = useState([
    { name: "Proxmox", ruta_url: "https://190.181.59.134:50010" },
    { name: "Stocky-Icon Filtros", ruta_url: "https://190.181.59.134:60200/login" },
    { name: "Stocky-Icon Radios", ruta_url: "http://190.181.59.134:60300/login" },
    { name: "Stocky-Icon Dtf", ruta_url: "http://190.181.59.134:60400/login" },
    { name: "Azuracast", ruta_url: "http://190.181.59.134:60010/login" },
    { name: "Icecast", ruta_url: "http://190.181.59.134:30050/" },
    { name: "Snipe-IT", ruta_url: "http://190.181.59.134:50020/" },
    {
      name: "Nube Digital",
      ruta_url: "https://digitaltelecom.online/index.php/login?clear=1",
    },
    { name: "Datarhei Restreamer", ruta_url: "http://190.181.59.134:40000/" },
    {
      name: "Flussonic Digital",
      ruta_url: "http://dtc.tvmediaonline.net:90/admin/#/",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="h-screen w-full p-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            + Añadir Servicio
          </button>
        </div>
        {dataList && dataList.length > 0 ? (
  <ul className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
    {dataList.map(({ nombre, ruta_url }, index) => (
      <li key={ruta_url + index}>
        <Link
          href={ruta_url}
          className="block w-full px-4 py-2 hover:text-black rounded shadow hover:bg-gray-100 transition-colors"
        >
          {nombre}
        </Link>
      </li>
    ))}
  </ul>
) : (
  <p className="text-white">No se encontró la lista para el menú.</p>
)}

      </div>

      {showModal && (
        <Add setShowModal={setShowModal}/>
      )}
    </div>
  );
};

export default Menu;
