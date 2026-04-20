import { useEffect } from "react";

const ArrowCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("arrow-cursor");
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const speed = 0.15;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      cursor.style.transform = `
        translate(${currentX}px, ${currentY}px)
        rotate(45deg)
      `;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <div id="arrow-cursor"></div>;
};

export default ArrowCursor;
