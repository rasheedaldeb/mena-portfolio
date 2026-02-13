import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa6";
import { TbNotes } from "react-icons/tb";

import HoverLinks from "./HoverLinks";

import "./styles/SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/MinaFarhat" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/mina-farhat-968ba8250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://www.behance.net/minafarhat" target="_blank">
            <FaBehance />
          </a>
        </span>
        <span>
          <a
            href="https://www.instagram.com/mena.farhat?igsh=MWRibGNhaG8xdjZneQ=="
            target="_blank"
          >
            <FaInstagram />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href="https://drive.google.com/file/d/1YGfROKPO4AKmrUz_ByXeNYGPSexZ9gIi/view?usp=drive_link"
        target="_blank"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
