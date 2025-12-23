import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track, songsData } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black text-white">
      {/* Main layout */}
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>

      {/* Player always visible */}
      <Player />

      {/* Audio element ONLY when track exists */}
      {track && (
        <audio
          ref={audioRef}
          src={track.file || track.audio}
          preload="auto"
        />
      )}

      {/* Optional loading state */}
      {songsData.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          Loading songs...
        </div>
      )}
    </div>
  );
};

export default App;
