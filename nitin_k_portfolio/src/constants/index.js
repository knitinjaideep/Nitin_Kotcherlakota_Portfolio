  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "System Design",
      icon: "/design.png",
    },
    {
      title: "Backend Developer",
      icon: "/backend.png",
    },
    {
      title: "Frontend Developer",
      icon: "/frontend.png",
    },
    {
      title: "DevOps",
      icon: "/devops.png"
    },

  ];
  
  const about = [
    {
      icon: "/profile.jpeg"
    }
  ];
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Intuit",
      icon: "/intuit.png",
      iconBg: "#383E56",
      date: "January 2022 - Present",
      points: [
        "Played a significant role in the development and scaling of the Crypto Buy/Sell/Hold (BSH) trading platform. Introduced a generic capability to collect W9 information from customers, making it reusable for other products.",
        "Ensured tax compliance for customers by enabling timely delivery of tax forms, contributing to a seamless trading experience.",
        "Pioneered the implementation of a recurring buys feature for Crypto BSH, allowing subscribed customers to create scheduled buy orders for cryptocurrencies. Improved trading convenience and flexibility.",
        "Successfully implemented a pager duty alerting system, enhancing incident management and response capabilities within the team."
      ],
    },
    {
      title: "Software Engineer",
      company_name: "International Game Technology",
      icon: "/igt.png",
      iconBg: "#E6DEDD",
      date: "October 2021 - January 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Supported game logic team with enabling game logic alerts.",
      ],
    },
    {
      title: "Technical Analyst",
      company_name: "Sagitec Solutions LLC",
      icon: "/sagitec.png",
      iconBg: "#383E56",
      date: "August 2016 - October 2021",
      points: [
        "Developed multiple modules (User registration, wage submission, claim submission, correspondence generation, reports and dashboards, BPM workflows and batch jobs) of unemployment insurance system based on functional requirements.",
        "Performed load and stress testing to identify slow running queries and enhanced their performance significantly by analyzing the query plan and ER diagrams.",
        "Deployed features to User Acceptance Testing (UAT) and production environments leveraging in house tools.",
        "Refactored unit tests to enhanced the code coverage metrics and incorporated the test suite into CI builds.",
        "Coordinated with a release engineer to formulate the commit, branching, build and release plan.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Pitney Bowes Inc.",
      icon: "/pb.png",
      iconBg: "#E6DEDD",
      date: "Jan 2016 - June 2016",
      points: [
        "Improved operational efficiency by developing Python scripts (Pandas, XLRD) to transform multiple Excel files into a structured format, facilitating the functional team in generating daily reports.",
        "Designed and created Tableau dashboards for development statistics, enabling enhanced team management insights.",
        "Worked on the design and development of stored procedures, views, tables, triggers, and other database objects based on delivery (user) stories. I also focused on improving database performance for existing modules.",
      ],
    },
  ];
  


  export { services, experiences, about };