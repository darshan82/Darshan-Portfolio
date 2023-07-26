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
      <div className="skill">
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
                  <h4>HTML / CSS</h4>
                  <ul>
                    <li>
                      <span>HTML5, CSS3</span>
                    </li>
                    <li>
                      <span>
                        <b>Preprocessors:</b> LESS, SASS
                      </span>
                    </li>
                    <li>
                      <span>
                        <b>CSS Libraries:</b> Bootstrap, Material UI, AntD
                      </span>
                    </li>

                  </ul>
                </div>
                <div className="skill__details">
                  <h4>JavaScript</h4>
                  <ul>
                    <li>
                      <span>
                        <b>Frameworks & Libraries:</b> &nbsp; React JS, React
                        Native, Vue.js, Next
                      </span>
                    </li>

                    <li>
                      <span>React Native</span>
                    </li>
                    <li>
                      <span>Typescript</span>
                    </li>
                    <li>
                      <span>
                        RxJS
                      </span>
                    </li>
                    <li>
                      <span>
                        GraphQL
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>State Management</h4>
                  <ul>
                    <li>
                      <span>Redux</span>
                    </li>
                    <li>
                      <span>Mobx</span>
                    </li>
                    <li>
                      <span>Zustand</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Version Control Systems</h4>
                  <ul>
                    <li>
                      <span>GIT</span>
                    </li>
                  </ul>
                </div>

                <div className="skill__details">
                  <h4>Database</h4>
                  <ul>
                    <li>
                      <span>SQL</span>
                    </li>
                    <li>
                      <span>MongoDb</span>
                    </li>
                  </ul>
                </div>

                <div className="skill__details">
                  <h4>Project Management</h4>
                  <ul>
                    <li>
                      <span>Agile & Scrum</span>
                    </li>
                    <li>
                      <span>JIRA</span>
                    </li>
                    <li>
                      <span>Trello</span>
                    </li>
                    <li>
                      <span>Asana</span>
                    </li>
                  </ul>
                </div>

                <div className="skill__details">
                  <h4>E-Commerce</h4>
                  <ul>
                    <li>
                      <span>Microsoft Commerce Dynamics</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Cloud</h4>
                  <ul>
                    <li>
                      <span>Firebase</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <span>AWS</span>
                    </li>
                  </ul>
                 
                </div>
                <div className="skill__details">
                  <h4>Server Side</h4>
                  <ul>
                    <li>
                      <span>Node.js</span>
                    </li>
                    <li>
                      <span>Express.js</span>
                    </li>
                    <li>
                      <span>Rabbit MQ</span>
                    </li>
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
