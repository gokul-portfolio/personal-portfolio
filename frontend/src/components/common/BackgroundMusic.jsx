import { useEffect, useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const BackgroundMusic = ({ play }) => {
  const audioRef = useRef(null);
  const fadeRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("/sounds/bg-music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0;
  }, []);

  useEffect(() => {
    if (play && audioRef.current && !muted) {
      audioRef.current
        .play()
        .then(() => fadeIn())
        .catch(() => {});
    }
  }, [play, muted]);

  const fadeIn = () => {
    clearInterval(fadeRef.current);

    fadeRef.current = setInterval(() => {
      if (!audioRef.current) return;

      if (audioRef.current.volume < 0.35) {
        audioRef.current.volume += 0.02;
      } else {
        audioRef.current.volume = 0.35;
        clearInterval(fadeRef.current);
      }
    }, 120);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    if (muted) {
      setMuted(false);
      audioRef.current.play().then(() => fadeIn());
    } else {
      audioRef.current.pause();
      setMuted(true);
    }
  };

  return (
    <button
      onClick={toggleMute}
      aria-label="Toggle background music"
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        zIndex: 10000,
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.2)",
        background: "rgba(0,0,0,0.6)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        backdropFilter: "blur(6px)",
      }}
    >
      {muted ? <FaVolumeMute /> : <FaVolumeUp />}
    </button>
  );
};

export default BackgroundMusic;
