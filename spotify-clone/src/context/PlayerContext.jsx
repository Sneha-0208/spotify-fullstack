import { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
  const audioRef = useRef(null);
  const seekBg = useRef(null);
  const seekBar = useRef(null);

  const url = 'https://spotify-backend-1hxs.onrender.com';

  const [songsData, setSongsData] = useState([]);
  const [albumsData, setAlbumsData] = useState([]);
  const [track, setTrack] = useState(null);
  const [playStatus, setPlayStatus] = useState(false);

  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 }
  });

  const play = () => {
    if (!audioRef.current) return;
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = (id) => {
    const song = songsData.find(item => item._id === id);
    if (!song || !audioRef.current) return;

    setTrack(song);
    audioRef.current.play();
    setPlayStatus(true);
  };

  const previous = () => {
    if (!track) return;

    const index = songsData.findIndex(item => item._id === track._id);
    if (index > 0) {
      setTrack(songsData[index - 1]);
      audioRef.current?.play();
      setPlayStatus(true);
    }
  };

  const next = () => {
    if (!track) return;

    const index = songsData.findIndex(item => item._id === track._id);
    if (index < songsData.length - 1) {
      setTrack(songsData[index + 1]);
      audioRef.current?.play();
      setPlayStatus(true);
    }
  };

  const seekSong = (e) => {
    if (!audioRef.current || !seekBg.current) return;

    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  const getSongsData = async () => {
    try {
      const res = await axios.get(`${url}/api/song/list`);
      if (Array.isArray(res.data.songs)) {
        setSongsData(res.data.songs);
        setTrack(res.data.songs[0] || null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getAlbumsData = async () => {
    try {
      const res = await axios.get(`${url}/api/album/list`);
      setAlbumsData(res.data.album || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSongsData();
    getAlbumsData();
  }, []);

  useEffect(() => {
    if (!audioRef.current || !seekBar.current) return;

    audioRef.current.ontimeupdate = () => {
      if (!audioRef.current.duration) return;

      seekBar.current.style.width =
        Math.floor(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        ) + "%";

      setTime({
        currentTime: {
          second: Math.floor(audioRef.current.currentTime % 60),
          minute: Math.floor(audioRef.current.currentTime / 60)
        },
        totalTime: {
          second: Math.floor(audioRef.current.duration % 60),
          minute: Math.floor(audioRef.current.duration / 60)
        }
      });
    };
  }, [track]);

  return (
    <PlayerContext.Provider
      value={{
        audioRef,
        seekBg,
        seekBar,
        track,
        playStatus,
        time,
        play,
        pause,
        playWithId,
        previous,
        next,
        seekSong,
        songsData,
        albumsData
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;