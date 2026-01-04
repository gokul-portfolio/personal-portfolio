
import Smile from "../../assets/images/icons/smile.webp"
const items = [
  "Web Development Solutions",
  "Modern UI Design",
  "User-Focused UX",
  "Frontend Engineering",
  "Responsive Interface Design",
  "High-Performance Web",
  "Clean & Scalable Design",
  "Fast Loading Websites",
  "SEO-Ready Architecture",
  "Custom Web Applications",
  "Creative UI Systems",
  "Smart UX Strategy",
  "Design System Architecture",
  "Scalable UI Solutions",
  "Mobile-First Experiences",
  "User-Centric Design",
  "Interactive UI Experiences",
  "Digital Product Design",
  "Modern Web Technologies",
  "Performance-Driven UI",
];

const pills = () => {
  return (
    <section className="pills-inner">

      <div className="header-wrap-2">
        <img src={Smile} className="img-fluid" alt="" />
        <h2 className="main-head">Time to Toss Away & Say
          Goodbye to</h2>
      </div>
      {/* Falling Pills */}
      <div className="falling-pills">
        {items.map((text, index) => (
          <span
            key={index}
            className="falling-pill falling-pill--air"
            style={{
              left: `${5 + index * 12}%`,
              animationDelay: `${index * 0.6}s`,
              animationDuration: `${9 + index}s`,
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  );
};

export default pills;
