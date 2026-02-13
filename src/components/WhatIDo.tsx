import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [contentHeights, setContentHeights] = useState<number[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  const setContentRef = (el: HTMLDivElement | null, index: number) => {
    contentRefs.current[index] = el;
  };

  useEffect(() => {
    // Measure content heights after component mounts
    const heights = contentRefs.current.map((ref) => ref?.scrollHeight || 0);
    setContentHeights(heights);
  }, []);

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    const container = containerRef.current[index];
    if (container && !ScrollTrigger.isTouch) {
      // Remove active class from all containers
      containerRef.current.forEach((c) => {
        if (c) {
          c.classList.remove("what-content-active");
          c.classList.remove("what-sibling");
        }
      });

      // Add active class to hovered container
      container.classList.add("what-content-active");

      // Add sibling class to other containers
      containerRef.current.forEach((c, i) => {
        if (c && i !== index) {
          c.classList.add("what-sibling");
        }
      });
    }
  };

  const handleMouseLeave = () => {
    if (!ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-content-active");
          container.classList.remove("what-sibling");
        }
      });
    }
  };

  return (
    <div className="whatIDO" id="whatIDo">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            style={
              {
                "--content-height": contentHeights[0]
                  ? `${contentHeights[0]}px`
                  : "400px",
              } as React.CSSProperties
            }
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in" ref={(el) => setContentRef(el, 0)}>
              <h3>DEVELOPER</h3>
              <h4>Description</h4>
              <p>
                Building scalable mobile applications and software solutions
                with modern technologies. Expertise in full-stack development
                with focus on performance, user experience, and clean code
                architecture.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Flutter</div>
                <div className="what-tags">Dart</div>
                <div className="what-tags">Android Studio</div>
                <div className="what-tags">Android SDK</div>
                <div className="what-tags">Firebase</div>
                <div className="what-tags">NoSQL</div>
                <div className="what-tags">Git</div>
                <div className="what-tags">Postman</div>
                <div className="what-tags">Restfull API</div>
                <div className="what-tags">Java</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">C++</div>
                <div className="what-tags">Three JS</div>
                <div className="what-tags">Laravel</div>
                <div className="what-tags">php</div>
                <div className="what-tags">Antlr</div>
                <div className="what-tags">MATLAB</div>
                <div className="what-tags">Jira</div>
                <div className="what-tags">Odoo</div>
                <div className="what-tags">Prolog</div>
                <div className="what-tags">XAMPP</div>
                <div className="what-tags">Bash script</div>
                <div className="what-tags">Linux</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            style={
              {
                "--content-height": contentHeights[1]
                  ? `${contentHeights[1]}px`
                  : "300px",
              } as React.CSSProperties
            }
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in" ref={(el) => setContentRef(el, 1)}>
              <h3>UI/UX Designer</h3>
              <h4>Description</h4>
              <p>
                I design user-centered digital experiences that are intuitive,
                functional, and visually refined. My process starts with
                understanding user needs and business goals, then translating
                them into clear user flows, wireframes, and high-fidelity
                interfaces. I focus on usability, accessibility, and consistency
                to ensure every product is not only beautiful, but easy to use
                and scalable. From research and prototyping to design systems
                and developer handoff, I aim to create experiences that solve
                real problems and deliver measurable value.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Figma</div>
                <div className="what-tags">Pintrest</div>
                <div className="what-tags">Photoshop</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);
    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
