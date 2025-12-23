import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <aside className="bg-[#003A10] min-h-screen w-full px-6 py-8">

      {/* Top gap + Logo */}
      <div className="mt-4 mb-14 flex justify-center">
        <img
          src={assets.logo}
          alt="Spotify Admin"
          className="max-w-[150px] w-full h-auto object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-6">
        <NavLink
          to="/add-song"
          className="flex items-center gap-3 bg-white text-black border border-black px-4 py-2 text-sm font-medium"
        >
          <img src={assets.add_song} className="w-5 h-5" alt="" />
          <span>Add Song</span>
        </NavLink>

        <NavLink
          to="/list-song"
          className="flex items-center gap-3 bg-white text-black border border-black px-4 py-2 text-sm font-medium"
        >
          <img src={assets.song_icon} className="w-5 h-5" alt="" />
          <span>List Songs</span>
        </NavLink>

        <NavLink
          to="/add-album"
          className="flex items-center gap-3 bg-white text-white border border-black px-4 py-2 text-sm font-medium"
        >
          <img src={assets.add_album} className="w-5 h-5" alt="" />
          <span>Add Album</span>
        </NavLink>

        <NavLink
          to="/list-album"
          className="flex items-center gap-3 bg-white text-black border border-black px-4 py-2 text-sm font-medium"
        >
          <img src={assets.album_icon} className="w-5 h-5" alt="" />
          <span>List Albums</span>
        </NavLink>
      </nav>

    </aside>
  )
}

export default Sidebar
