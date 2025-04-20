'use client'
import React, { useState } from 'react'

const Add = ({ setShowModal }) => {
  const [newItem, setNewItem] = useState({ nombre: '', ruta_url: '' })

  const handleAddItem = async () => {
    if (!newItem.nombre || !newItem.ruta_url) return

    try {
        const response = await fetch('http://localhost:8080/menu/post', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
          })
          

      if (!response.ok) {
        throw new Error('Error al hacer PUT')
      }

      alert('Elemento guardado correctamente')
      setNewItem({ nombre: '', ruta_url: '' })
      setShowModal(false)
    } catch (error) {
      console.error('Error al guardar:', error)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl text-white font-bold mb-4">
          Añadir nuevo servicio
        </h2>
        <input
          type="text"
          placeholder="Nombre"
          value={newItem.nombre}
          onChange={(e) => setNewItem({ ...newItem, nombre: e.target.value })}
          className="w-full border text-white border-gray-300 rounded px-3 py-2 mb-3"
        />
        <input
          type="text"
          placeholder="URL"
          value={newItem.ruta_url}
          onChange={(e) => setNewItem({ ...newItem, ruta_url: e.target.value })}
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
  )
}

export default Add
