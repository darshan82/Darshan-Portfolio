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
              <h1>
                0<span>1</span>
              </h1>
              <h2>
                H<span>ello,</span>
              </h2>
              <p>
                I am <span>Darshan Lal.</span> <br /> Highly Passionate
                Senior Full Stack JavaScript Developer with 6+ years of experience building scalable web, mobile, and cloud solutions.
              </p>
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
                  highly responsive frontend of websites, moblile applications and backend using React.js, Next.js, Microfrontend, Monorepo,React Native and
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
              <h2>
                <span>Work Experience</span>
              </h2>
              <ol>
                <li>
                  <div style={{ color: "white" }}>Flydubai, UAE</div>
                  <div><span style={{ color: '#CCCCCC' }}>Software Engineer</span>, <span>10/2024 – Today </span></div>
                </li>
                <li>
                  <div style={{ color: "white" }}>Coforge Consultant, Dubai, UAE</div>
                  <div><span style={{ color: '#CCCCCC' }}>Senior Software Engineer</span>, <span>03/2024 – 10/2024 </span></div>
                </li>
                <li>
                  <div style={{ color: 'white' }}>Transferred from Systems LTD Pakistan to Tech Vista, Dubai UAE</div>
                  <div><span style={{ color: '#CCCCCC' }}>Consultant Software Developer,</span>
                    <span> 07/2023 - 02/2024</span>
                  </div>
                </li>
                <li>
                  <div style={{ color: 'white' }}>Next Generation Innovation, Karachi, Pakistan </div>
                  <div><span style={{ color: '#CCCCCC' }}>Senior Full-Stack Developer,</span>
                    <span> 01/2022 – June/2023</span>
                  </div>
                </li>
                <li>
                  <div style={{ color: 'white' }}>Trukkr Pvt Limited, Karachi, Pakistan </div>
                  <div><span style={{ color: '#CCCCCC' }}>Senior Full Stack Developer,</span>
                    <span> 07/2019 – 01/2022</span>
                  </div>
                </li>
              </ol>
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
