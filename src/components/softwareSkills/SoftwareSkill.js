import React from "react";
import "./SoftwareSkill.css";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  const data = ['JavaScript(ES6+)', 'Typescript', 'Node.js', 'Express', 'React', 'Redux', 'React Fiber', 'SQL',' NoSQL', 'Redis', 'CI/CD', 'RESTful APIs', 'Jest', 'Enzyme', 'Webpack', 'JWTs', 'Bcrypt','Cookies', 'jQuery', 'OOP and Functional Programing', 'HTTP/1.1 - HTTP/2', 'WebSocket/socket.io', 'CSS/SCSS', 'Docker', 'Kubernetes',' Nginx', 'Digital ocean', 'NATS',  'NATS streaming','Git', 'Agile', 'Scrum'];
 
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>

      </div>
    </div>
  );
}


