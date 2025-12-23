import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { url } from '../App'

const ListAlbum = () => {
  const [data, setData] = useState([])

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`)
      const albums = response.data.album
      if (Array.isArray(albums)) {
        setData(albums)
      } else {
        setData([])
      }
    } catch (error) {
      toast.error('Error occurred!')
    }
  }

  const removeAlbum = async (id) => {
    try {
      const response = await axios.post(`${url}/api/album/remove`, { id })
      if (response.data.success) {
        toast.success(response.data.message)
        fetchAlbums()
      }
    } catch (error) {
      toast.error('Error occurred!')
    }
  }

  useEffect(() => {
    fetchAlbums()
  }, [])

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-6">
        All Albums List
      </h2>

      {/* Table Header */}
      <div
        className="
          grid
          grid-cols-[70px_2.5fr_3fr_80px_32px]
          items-center
          gap-6
          px-4
          py-3
          bg-gray-100
          border
          border-gray-300
          text-sm
          font-semibold
        "
      >
        <span>Image</span>
        <span>Name</span>
        <span>Description</span>
        <span>Colour</span>
        <span className="text-center">x</span>
      </div>

      {/* Table Rows */}
      {data.map((item) => (
        <div
          key={item._id}
          className="
            grid
            grid-cols-[70px_2.5fr_3fr_80px_32px]
            items-center
            gap-6
            px-4
            h-14
            border
            border-t-0
            border-gray-300
            text-sm
            bg-white
          "
        >
          {/* Image */}
          <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Name */}
          <span className="font-medium truncate">
            {item.name}
          </span>

          {/* Description */}
          <span className="text-gray-600 truncate">
            {item.desc}
          </span>

          {/* Colour */}
          <input
            type="color"
            value={item.bgColour}
            readOnly
            className="w-8 h-5 border-none bg-transparent"
          />

          {/* Action */}
          <span
            onClick={() => removeAlbum(item._id)}
            className="cursor-pointer text-red-600 font-semibold text-center"
          >
            x
          </span>
        </div>
      ))}

      {data.length === 0 && (
        <p className="text-gray-500 text-sm mt-6">
          No albums found.
        </p>
      )}
    </div>
  )
}

export default ListAlbum
