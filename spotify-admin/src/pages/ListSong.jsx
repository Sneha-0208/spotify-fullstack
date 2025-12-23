import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url } from '../App'
import { toast } from 'react-toastify'

const ListSong = () => {
  const [data, setData] = useState([])

  const fetchSongs = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`)
      if (response.data.success) {
        setData(response.data.songs)
      }
    } catch (error) {
      toast.error('Error occurred!')
    }
  }

  const removeSong = async (id) => {
    try {
      const response = await axios.post(`${url}/api/song/remove`, { id })
      if (response.data.success) {
        toast.success(response.data.message)
        fetchSongs()
      }
    } catch (error) {
      toast.error('Error occurred!')
    }
  }

  useEffect(() => {
    fetchSongs()
  }, [])

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        All Songs List
      </h2>

      {/* Table Header */}
      <div className="
          grid
          grid-cols-[70px_2.5fr_1.5fr_80px_40px]
          items-center
          gap-6
          px-4
          py-3
          border
          border-gray-300
          bg-gray-100
          text-sm
          font-semibold
        ">
        <span>Image</span>
        <span>Name</span>
        <span>Album</span>
        <span>Duration</span>
        <span className="text-center">Action</span>
      </div>

      {/* Table Rows */}
      {data.map((item) => (
        <div
          key={item._id}
          className="
      grid
      grid-cols-[70px_2.5fr_1.5fr_80px_40px]
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
          <span className="font-medium truncate ml-2">
            {item.name}
          </span>

          {/* Album */}
          <span className="text-gray-600 truncate">
            {item.album}
          </span>

          {/* Duration */}
          <span className="text-left tabular-nums">{item.duration}</span>

          {/* Action */}
          <span
            onClick={() => removeSong(item._id)}
            className="cursor-pointer text-red-600 font-semibold text-center"
          >
            x
          </span>
        </div>
      ))}



      {data.length === 0 && (
        <p className="text-gray-500 text-sm mt-6">
          No songs found.
        </p>
      )}
    </div>
  )
}

export default ListSong
