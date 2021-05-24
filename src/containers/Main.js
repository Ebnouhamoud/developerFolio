import React, {Component} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import {StyleProvider} from "../contexts/StyleContext";
import "./Main.css";
import Profile from "./profile/Profile";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false
    };
  }
  

  componentDidMount() {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
    this.setState({isDark: JSON.parse(localStorage.getItem("isDark"))});
  }
  changeTheme = () => {
    this.setState({isDark: !this.state.isDark}, () => {
      localStorage.setItem("isDark", this.state.isDark);
    });
  };

  render() {
    const data = ['JavaScript(ES6+)', 'Typescript', 'Node.js', 'Express', 'React', 'Redux', 'React Fiber', 'SQL',' NoSQL', 'Redis', 'CI/CD', 'RESTful APIs', 'Jest', 'Enzyme', 'Webpack', 'JWTs', 'Bcrypt','Cookies', 'jQuery', 'OOP and Functional Programing', 'HTTP/1.1 - HTTP/2', 'WebSocket/socket.io', 'CSS/SCSS', 'Docker', 'Kubernetes',' Nginx', 'Digital ocean', 'NATS',  'NATS streaming','Git', 'Agile', 'Scrum'];
 
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{isDark: this.state.isDark, changeTheme: this.changeTheme}}
        >
          <Header />
          <Greeting />
          <Skills />
          <div className="skills-modified">
        <h1> Full Skills List</h1>
        <ul className="" style={{display:'flex',flexWrap:'wrap'}}>
          {data.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills}
              >
                <i className={skills}></i>
                <p className='skills-ul-mo' style={
                  {
                    fontSize:'13px',
                    border:'solid 1px',
                    padding:'5px',
                    borderRadius:'10px',
                    fontWeight:'bold'
                  }
                }>{skills}</p>
              </li>
            );
          })}
        </ul>
      </div>
          <StackProgress />
          <WorkExperience />
          {/* <Projects /> */}
          {/* <StartupProject /> */}
          {/* <Achievement /> */}
          {/* <Blogs /> */}
          {/* <Talks /> */}
          {/* <Twitter /> */}
          {/* <Podcast /> */}
          <Profile />
          {/* <Footer /> */}
          <Top />
        </StyleProvider>
      </div>
    );
  }
}
