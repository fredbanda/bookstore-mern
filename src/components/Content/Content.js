import React from "react";
import "../Content/content.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Content = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>Hi! I Am</span>
          <span>Fred M Banda</span>
          <span>
            A sales and Customer Success executive now into web development looking to gain experience.
            I have a good eye for branding and have a good understanding the importance between 
            a great looking website and the most likely converting website. In a nutshell not a god of
            UI and UX but I can make a great difference. I do Figma wireframes too.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button"><a href="mailto:fredcbanda@hotmail.com">Hire me</a></button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
         <a href=""><img  src={Github} alt="" /></a> 
         <a href=""><img src={LinkedIn} alt="" /></a> 
         <a href=""><img src={Instagram} alt="" /></a> 
          
          
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="UI & UX" text2="Design" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};


export default Content
