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
        .catch(() => { });
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
      className="speaker-btn"
    >
      {muted ? <FaVolumeMute /> : <FaVolumeUp />}
    </button>
  );
};

export default BackgroundMusic;
