import React, { useEffect } from 'react';

// Importing TagCloud for  3D Rotating Text Sphere
import TagCloud from 'TagCloud';

import '../../styles/Skill/Skill.scss';

const Skill = () =>
{
  // Animation settings for Text Cloud
  useEffect(() =>
  {
    const container = '.tagcloud';
    let radii;

    // If 3D Text Sphere is not showing up after deployment remove the return (i.e, return() =>{}) function from below code
    return () =>
    {
      const texts = [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'Vue',
        'Next',
        'NodeJS',
        'React Native',
        'AWS',
        'MongoDB',
        'Microsoft Commerce Dynamics',
        'Redux',
      ];


      // Decrasing 'radius' value for small screen devices  
      function radiusValue()
      {
        if (window.screen.width <= 778)
        {
          radii = 150;
        } else
        {
          radii = 290;
        }
        return radii;
      }

      const options = {
        radius: radiusValue(),
        maxSpeed: 'normal',
        initSpeed: 'normal',
        keep: true,
      };

      TagCloud(container, texts, options);
    }
  }, []);
  return (
    <>
      <div className="skill" id="skills">
        <div className="skill__main-container">
          <div className="skill__header" id="skill__heading">
            <h1>
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                S
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                K
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                I
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                L
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                L
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
          </div>
          <div className="skill__inner-container">
            <div className="skill__info">
              <div className="skill__details-container">
                <div className="skill__details">
                  <h4>Frontend Development:</h4>
                  <ul>
                    <li>JavaScript (6 years)</li>
                    <li>React.js (6 years)</li>
                    <li>Redux (6 years)</li>
                    <li>Angular (2 years)</li>
                    <li>Microfrontend (1 year)</li>
                    <li>Monorepo (1 year)</li>
                    <li>HTML5 (6 years)</li>
                    <li>CSS (6 years)</li>
                    <li>Bootstrap (4 years)</li>
                    <li>Ant Design (4 years)</li>
                    <li>React Native (3 years)</li>
                    <li>TypeScript (4 years)</li>
                    <li>Next.js (3 years)</li>
                    <li>Material UI (3 years)</li>
                    <li>UI/UX (3 years)</li>
                    <li>Tailwind CSS (2 years)</li>
                    <li>SASS (2 years)</li>
                    <li>jQuery (2 years)</li>
                    <li>Firebase (2 years)</li>
                    <li>Jest (2 years)</li>
                    <li>RxJS (1 year)</li>
                    <li>Microsoft commerce dynamic 365 (1 year)</li>
                  </ul>

                </div>
                <div className="skill__details">
                  <h4>Backend Development:</h4>
                  <ul>
                    <li>Node.js (3 years)</li>
                    <li>MongoDB (3 years)</li>
                    <li>GraphQL (2 years)</li>
                    <li>Rest APIs (6 years)</li>
                    <li>MySQL (1 year)</li>
                  </ul>

                </div>
                <div className="skill__details">
                  <h4>Cloud Platforms & Tools:</h4>
                  <ul>
                    <li>Google Cloud (2 years)</li>
                    <li>AWS (2 years)</li>
                    <li>RabbitMQ (1 year)</li>
                    <li>CI/CD (1 year)</li>
                    <li>GitHub (6 years)</li>
                    <li>Bitbucket (2 years)</li>
                    <li>GitLab (1 year)</li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Project Management & Methodologies:</h4>
                  <ul>
                    <li>Agile & Scrum (6 years)</li>
                    <li>Jira (6 years)</li>
                  </ul>

                </div>

              </div>
            </div>

            {/* 3D Text Cloud  */}
            <div className="skill__cloud">
              <div className="tagcloud" data-aos="zoom-in-up" data-aos-offset="200"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
