/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Hamoud Ebnou",
  title: "Hi all, I'm Hamoud",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀  with 5 year of experience in building Web applications with JavaScript / Reactjs / Nodejs / Express and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ebnouhamoud",
  gmail: "ebnou.hamoud1@gmail.com",
  gitlab: "https://gitlab.com/Ebnouhamoud",
  // Instagram and Twitter are also supported in the links!
  display: false // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Strong proficiency in developing Single Page Applications (SPAs) utilizing JavaScript including React and other cutting edge development technologies."
    ),
    emoji("⚡ Profound experience in using Redux to manage the application state and applying middleware such as Redux-Promise and Redux-Thunk."),
    emoji(
      "⚡ Proficiency in using React Router to tackle routes in SPAs through dynamic and component-based routing"
    ),
    emoji(
      "⚡ Prior knowledge working with Web protocols and standards (HTTP HTML5/XHTML/XHTML MP, CSS3, Web Forms, XML, XML parsers)."
    ),
    emoji("⚡ Familiarity with the BEM naming strategy in using CSS to build easy to maintain, scalable, and reusable templates for web applications."),
    emoji(
      "⚡ Prior experience developing secured web applications by using client scripting such as JavaScript and jQuery along with the knowledge to deal with security challenges like XXS, CORS, and SQL injection."
    ),
    emoji(
      "⚡ Professionalism working with the MERN tech stack (MongoDB, Express, React, Node.js)."
    ),
    emoji("⚡ Strong expertise in RESTful, SOAP web services to integrate between application to application."),
    emoji(
      "⚡ Profound understanding of the full life cycle of software development and abilities to handle every phase properly."
    ),
    emoji(
      "⚡ Experience using test runners like Jest, Enzyme, Mocha, Chai for unit tests"
    ),
    emoji("⚡ Abilities to perform version control using appropriate tools such as Git, SVN for source code version management"),
    emoji(
      "⚡ Excellent communication and inter-personal skills while always being well organized and goal oriented."
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName:"Digital Ocean",
      fontAwesomeClassname: "fab fa-digital-ocean"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc:
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End Developer",
      company: "NYSE",
      project:"Continuous Evaluated Pricing Tool (CEPT)",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2022 – Present",
      desc:
        "The CEPT is part of the company’s electronic trading platform that helps clients adjust to changing dynamics by providing continuous, independent evaluated pricing to front, middle and back offices, extending the reach of fixed income end of day evaluations into intraday applications through establishing a premium access to timely updates. The CEPT also helps clients take advantage of pre-trade transparency, price discovery and idea generation, enhanced trading workflow to support ETF monitoring, trading and intraday internal crossing, post-trade best execution analysis, compliance and transaction cost analysis, support of intraday operational valuation processes and collateral, and real time risk and credit utilization monitoring. By using the CEPT, users can gain access to dynamic charts regarding trading workflow, real time risk and credit utilization, plus best execution analysis. ",
      
    },
    {
      role: "Front-End Developer",
      company: "Pwc",
      project:"Internal Firm Services Tools Suite",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "April 2018 - May 2020",
      desc:
        "The Internal Firm Services Tools Suite (IFSTS) supports the company’s core business functions by deploying applications that enable employees to work more efficiently and deliver the highest levels of service to clients. IFSTS enables teams to communicate business outcomes across the organization, allowing stakeholders to agree on a common set of objectives. Automatically update project financials with the actual time spent on each task. Managers can see teams’ start and finish dates, booking status, estimated time of completion, total allocations, and total actuals. It also creates a visual task list on the task boards. It provides users with their process flow, assigns staff to tasks, and prioritizes work. Keep all team members in sync and share plans with other groups and executives. IFSTS’s financial planning pages have been redesigned to mimic Microsoft Excel spreadsheets in both looks and feel. It provides one consolidated view of each employee’s project queue and their schedule. Managers explore staffing options with telescoping and pinning features that replace outdated filtering and matching tools.",
      
    },
    {
      role: "Front-End Developer",
      company: "Deloitte Development, LLC",
      project:"Controllership Project",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "February 2017 - March 2018",
      desc:
        "The Controllership Project is part of the Accounting and Internal Controls Portfolio that is built to help clients address issues and risks in accounting advisory services, financial reporting requirements, internal audit risk management, assurance needs, and internal controls services.  It provides clients and their teams direct access to valuable insights that can help organizations and leaders become more proficient, effective, and insightful are three keys to achieving world class controllership. The project consists of Controllership labs, P2P exchanges, Eminence/Learning tools, and provides a virtual and controlled environment for the entire team to hold meetings, live webcasts, send/receive newsletters, publish and manage blogs, compose, distribute, and analyze reports.",
      
    },
    {
      role: "Front-End Developer",
      company: "Accruent",
      project:"Space and Resource Management Platform",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "August 2016 - January 2017",
      desc:
        "Finding and reserving the right space or resources is critical for success in a work or learning environment and being able to track what people are using and how often they use it can change the way to manage other areas of your organization. Accruent’s room scheduling platform offers enterprise class management of workspaces, conferences, offices, classrooms, event spaces and more. The software helps to create a frictionless experience for browsing, booking and using the facilities, facilitates understanding of how people use and engage with the built environment so clients can make strategic decisions based on hard data. Increased visibility enhances clients’ decision-making clarity, spanning their IT, facilities and maintenance departments.",
      
    },
    {
      role: "ReactMonitor",
      company: "Open Source",
      // project:"Space and Resource Management Platform",
      companylogo: require("./assets/images/facebookLogo.png"),
      // date: "August 2016 - January 2017",
      desc:
        "React Monitor is a dev tool that allows you to quickly visualize React's component tree performance for improved onboarding and debugging. By using the ReactMonitor Chrome DevTool, beginning and experienced developers alike are able to get a visual representation of an existing codebase that they are working on. Built with React, this tool will dynamically traverse the fiber root object behind the scenes, displaying state, props, render times and the type of components on the page.",
      
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  Profile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
  showGithubProfile:true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "To Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "504-556-2886",
  email_address: "ebnou.hamoud1@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
