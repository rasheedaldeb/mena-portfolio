import WorkImage from "./WorkImage";
import { useState, useRef, useEffect } from "react";

import "./styles/Work.css";
import { projects } from "../projects";

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sliderRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const visibleItems = Math.floor(containerWidth / 400); // Assuming each item is ~400px
      setMaxIndex(Math.max(0, projects.length - visibleItems));
    }
  }, [projects.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="slider-controls">
          <button
            className="slider-arrow prev"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            ←
          </button>
          <button
            className="slider-arrow next"
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
          >
            →
          </button>
        </div>

        <div className="slider-container" ref={containerRef}>
          <div
            className="slider-track"
            ref={sliderRef}
            style={{
              transform: `translateX(-${currentIndex * 400}px)`, // Adjust 400px to match your item width
              transition: "transform 0.5s ease",
            }}
          >
            {projects.map((project) => (
              <div className="work-box" key={project.id}>
                <div className="work-info">
                  <div className="work-title">
                    <h3>0{project.id}</h3>
                    <div>
                      <h4>{project.name}</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  <h4>Tools and features</h4>
                  <p>{project.tools}</p>
                </div>
                <WorkImage image={project.image} alt={project.name} />
              </div>
            ))}
          </div>
        </div>

        <div className="slider-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
