'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [menuItems, setMenuItems] = useState([
    { name: 'Proxmox', path: 'https://190.181.59.134:50010' },
    { name: 'Stocky-Icon Filtros', path: 'https://190.181.59.134:60200/login' },
    { name: 'Stocky-Icon Radios', path: 'https://190.181.59.134:60300/login' },
    { name: 'Stocky-Icon Dtf', path: 'https://190.181.59.134:60400/login' },
    { name: 'Azuracast', path: 'https://190.181.59.134:60010/login' },
    { name: 'Icecast', path: 'https://190.181.59.134:30050/' },
    { name: 'Snipe-IT', path: 'https://190.181.59.134:50020/' },
    { name: 'Nube Digital', path: 'https://digitaltelecom.online/index.php/login?clear=1' },
    { name: 'Datarhei Restreamer', path: 'https://190.181.59.134:40000/' },
    { name: 'Flussonic Digital', path: 'https://drc.tvmediaonline.net:90/admin/#/' },
  ])

  const [showModal, setShowModal] = useState(false)
  const [newItem, setNewItem] = useState({ name: '', path: '' })

  const handleAddItem = () => {
    if (newItem.name && newItem.path) {
      setMenuItems([...menuItems, newItem])
      setNewItem({ name: '', path: '' })
      setShowModal(false)
    }
  }

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

        <ul className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
          {menuItems.map(({ name, path }, index) => (
            <li key={path + index}>
              <Link
                href={path}
                className="block w-full px-4 py-2 hover:text-black rounded shadow hover:bg-gray-100 transition-colors hover:text-black"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="p-6 rounded shadow-md w-full max-w-md">
            <h2 className="text-xl text-white font-bold mb-4">Añadir nuevo servicio</h2>
            <input
              type="text"
              placeholder="Nombre"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="w-full border text-white border-gray-300 rounded px-3 py-2 mb-3"
            />
            <input
              type="text"
              placeholder="URL"
              value={newItem.path}
              onChange={(e) => setNewItem({ ...newItem, path: e.target.value })}
              className="w-full text-white border border-gray-300 rounded px-3 py-2 mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-red-600 rounded hover:bg-gray-400 text-white"
              >
                Cancelar
              </button>
              <button
                onClick={handleAddItem}
                className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-green-700"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
