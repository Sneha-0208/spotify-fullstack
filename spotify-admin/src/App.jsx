import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Routes, Route } from 'react-router-dom'
import AddSong from './pages/AddSong'
import AddAlbum from './pages/AddAlbum'
import ListSong from './pages/ListSong'
import ListAlbum from './pages/ListAlbum'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

export const url = 'https://spotify-backend-1hxs.onrender.com'

const App = () => {
  return (
    <div className="flex min-h-screen w-full">
      <ToastContainer />

      {/* Sidebar */}
      <div className="w-[240px] flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#F3FFF7] flex flex-col">
        <Navbar />

        <main className="flex-1 overflow-y-hidden px-10 py-8">
          <Routes>
            <Route path="/add-song" element={<AddSong />} />
            <Route path="/add-album" element={<AddAlbum />} />
            <Route path="/list-song" element={<ListSong />} />
            <Route path="/list-album" element={<ListAlbum />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
