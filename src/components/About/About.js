import React from "react";
import { Link } from "react-router-dom";

import "../../styles/About/About.scss";

const About = () =>
{

  return (
    <>
      <div className="about" id="about">
        <div className="about__container">
          <div className="about__header" id="about__heading">
            <h1 data-aos="fade-down" data-aos-delay="0" data-aos-offset="20">
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                A
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                B
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                O
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                U
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                T
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
            <p></p>
          </div>

          <div className="about__details-container">
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-once="true"
            >
              <Link to="/about/intro">
                <h1>
                  0<span>1</span>
                </h1>
                <h2>
                  H<span>ello,</span>
                </h2>
                <p>
                  I am <span>Darshan Lal.</span> <br /> Highly passoinate
                  Senior Full Stack JavaScript Developer with more than 6 years of experience.
                </p>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <Link to="/about/experience">
                <h1>
                  0<span>2</span>
                </h1>
                <h2>
                  E<span>xperience</span>
                </h2>
                <p>
                  <span>6 year of experiences.</span>
                  <br />I have more than 6 years of experience in developing
                  highly responsive frontend of websites, moblile applications and backend using React.js,React Native and
                  Node.js
                </p>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="50"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <Link to="/about/internships">
                <h1>
                  0<span>3</span>
                </h1>
                <h2>
                  <span>Work Experience</span>
                </h2>
                <ul>
                  <li>
                    <span>Transferred from Systems LTD Pakistan to Tech Vista, Dubai UAE 07/2023 – Today</span> - Consultant Software Developer{" "}
                  </li>
                  <li>
                    <span>Next Generation Innovation, Karachi, Pakistan 01/2022 – june/2023</span> - Senior Full-Stack Developer{" "}
                  </li>
                  <li>
                    <span>Trukkr Pvt Limited, Karachi, Pakistan 07/2019 – 01/2022</span> - Senior Full Stack Developer{" "}
                  </li>
                  <li>
                    <span>Gamitar Learning, India (Remote) 05/2018 –06/2019</span> - Frontend Developer{" "}
                  </li>
                </ul>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="700"
              data-aos-once="true"
            >
              <Link to="/about/graduation">
                <h1>
                  0<span>4</span>
                </h1>
                <h2>
                  E<span>ngineering</span>
                </h2>
                <p>
                  <span>Muhmmad Ali Jinnah University, Karachi, Pakistan 07/2020 – 06/2022
                  </span>
                  <br />
                  Masters in Software Engineering
                </p>

                <p>
                  <span>Mehran University of Engineering and Technology, Jamshoro, Pakistan 01/2015 – 10/2018
                  </span>
                  <br />
                  Bachelor in Software Engineering
                </p>

              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
