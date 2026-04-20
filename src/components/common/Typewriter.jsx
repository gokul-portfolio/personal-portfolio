import { useEffect, useState } from "react";

const Typewriter = ({
  text,
  speed = 120,
  delay = 1500,   // pause after typing
  loop = true
}) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (index < text.length) {
      // typing
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
    } else if (loop) {
      // reset after delay
      timeout = setTimeout(() => {
        setDisplayText("");
        setIndex(0);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [index, text, speed, delay, loop]);

  return <span>{displayText}</span>;
};

export default Typewriter;
