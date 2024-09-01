export const INTRODUCTION_TITLE = "Hi! I’m Muil Yang ✨";

export const INTRODUCTION =
  "Hello! I’m currently pursuing my Master’s degree in Computer Science at The University of Texas at Dallas. With over three years of professional experience as a software engineer, I’ve honed my skills in various technologies and developed a strong foundation in both frontend and backend development. I’m passionate about solving complex problems and building innovative applications. I’m now seeking a software engineer internship position where I can contribute my expertise and continue to grow in the field.";

export const EXPERIENCE = [
  {
    title: "Software Engineer",
    period: "Jan. 2021 - May 2024",
    companyName: "Midas IT (MIDASoft Inc.)",
    companyLocation: "Seongnam, Republic of Korea",
    description: [
      "Developed <i>Midas Workspace</i>, a collaboration tool designed for architectural and civil engineers, featuring a 3D model viewer and file drive.",
      "Elevated the visual representation of the 3D model viewer by integrating terrain data from ArcGIS with satellite imagery, enabling accurate visualizations of buildings and their immediate surroundings.",
      "Utilized Next.js's Lazy Loading to separate non-essential components from the initial render, reducing the bundle size by approximately 10%.",
      "Introduced Recoil for lightweight state management and efficient handling of class instances, and actively integrated real-time functionality using WebSocket.",
      "Redesigned the Midas Members, a membership management service, using Next.js, leading approximately 50% of customers to transition to email-based accounts.",
      "Optimized the UI development of the company’s Windows desktop application by integrating Microsoft Edge WebView2, allowing seamless use of the web UI from our web services.",
    ],
  },
  {
    title: "Research Assistant",
    period: "Sep. 2019 - May 2020",
    companyName: "The University of Texas at Arlington",
    companyLocation: "Arlington, TX",
    description: [
      "Designed and developed a flood monitoring system comprised of an embedded system and web service to monitor flood-prone areas.",
      "Reduced the system's power consumption by 40% by transitioning from Arduino Mega to Atmel microcontrollers, carefully selecting hardware that provided the appropriate level of computing power for our project.",
      "Engineered and deployed a Node.js HTTP server on AWS for data collection and developed a website to visualize the data through graphs.",
    ],
  },
  {
    title: "Private Mathematics Tutor",
    period: "Mar. 2017 - Jun. 2019",
    companyName: "Self-employed",
    companyLocation: "Seoul, Republic of Korea",
    description: [
      "Taught Korean SAT prep courses focused on Mathematics, covering Discrete Mathematics, Statistics, Calculus, and Spatial Geometry.",
    ],
  },
];

export const PROJECTS = [
  // {
  //   title: "Personal Website",
  //   type: "Personal Project",
  //   period: "Aug. 2024",
  //   techStack: ["Web Components API", "Pure JS"],
  //   description: [
  //     "Developed my personal website using Web Components API and pure JavaScript, without relying on React.js.",
  //   ],
  // },
  {
    title: "AI Veggie Cat",
    type: "Hackathon Project",
    period: "Jul. 2024",
    techStack: ["Next.js", "Zustand", "Flask", "SQLite", "Naver Cloud"],
    imgSrcs: ["./assets/Projects - AI Veggie Cat.png"],
    description: [
      "This project was created during the SPARCS AI Startup Hackathon.",
      "It is an AI-based service for automatically ordering food ingredients. The service uses OCR to read a menu from an uploaded image, extracts a list of ingredients needed for the dishes, and then automatically places orders for them.",
      "I wanted to create an application using an LLM API, so when a hackathon requiring the use of an LLM API was organized, I participated and developed this project.",
      "I improved my time management skills by prioritizing high-impact tasks for the project demonstration, and I learned how to collaborate efficiently during the process of selecting and coordinating the product to be developed.",
      "I used a tech stack including Next.js, Zustand, Flask, SQLite, and Naver Cloud.",
    ],
  },
  {
    title: "Nutrition Specs",
    type: "Personal Project",
    period: "Jun. 2024 – Jul. 2024",
    link: "https://www.nutrition-specs.com/ice-cream",
    techStack: [
      "Next.js",
      "Django",
      "SQLite",
      "Amazon Web Services (AWS)",
      "Selenium",
      "OpenAI API",
    ],
    imgSrcs: ["./assets/Projects - Nutrition Specs (Architecture).png"],
    description: [
      "This project was developed independently by me.",
      "It is a web service for comparing nutritional information across multiple products within the same category. For example, if you search for 'yogurt,' the service will display the nutritional content of various yogurt products.",
      "I wanted to gain experience in deploying a web service using Amazon Web Services (AWS), so I used AWS services like ECR, EC2, S3, CloudFront, ACM, and Route 53 to deploy the service.",
      "I used a tech stack including Next.js, Django, SQLite, Amazon Web Services (AWS), Selenium, and the OpenAI API.",
    ],
  },
  {
    title: "Three.js Study",
    type: "Personal Project",
    period: "Feb. 2023 – May. 2023",
    link: "https://github.com/muilyang12/Three.js-Study",
    techStack: ["Three.js", "Webpack"],
    imgSrcs: ["./assets/Projects - Three.js Study.gif"],
    description: [
      "This project is a personal learning endeavor I undertook to study Three.js.",
      "I followed a tutorial by a YouTuber named <my-link linkUrl='https://www.youtube.com/@gisdeveloper'><i>GIS Developer</i></my-link> to create this project.",
      "I deployed the project through GitHub Pages, and you can view the details of each development item in the README on the GitHub link.",
      "I developed it using Three.js, Webpack, and basic HTML/CSS/JavaScript.",
    ],
  },
  {
    title: "WebGPU Study",
    type: "Personal Project",
    period: "Sep. 2022 – Dec. 2022",
    link: "https://github.com/muilyang12/WebGPU-Study",
    techStack: ["WebGPU", "Webpack"],
    imgSrcs: ["./assets/Projects - WebGPU Study.gif"],
    description: [
      "This project is a personal learning endeavor I undertook to study WebGPU.",
      "I followed a tutorial by a YouTuber named <my-link linkUrl='https://www.youtube.com/@GetIntoGameDev'><i>GetIntoGameDev</i></my-link> to create this project.",
      "I deployed the project through GitHub Pages, and you can view the details of each development item in the README on the GitHub link.",
      "I developed it using WebGPU, Webpack, and basic HTML/CSS/JavaScript.",
    ],
  },
  {
    title: "3D Model AR Viewer",
    type: "Class Project",
    period: "Dec. 2022",
    techStack: ["React.js", "WebXR", "Node.js", "Express.js", "MySQL"],
    description: [
      "Developed an AR application utilizing WebXR and a Node.js server to view GLTF files integrated with the surrounding environment.",
    ],
  },
];

export const SKILLS = [
  { skillName: "Python", logoSrc: "./assets/Skills - Python.png" },
  { skillName: "JavaScript", logoSrc: "./assets/Skills - JavaScript.png" },
  { skillName: "C++", logoSrc: "./assets/Skills - C++.png" },
  { skillName: "Java", logoSrc: "./assets/Skills - Java.png" },
  { skillName: "Next.js", logoSrc: "./assets/Skills - Next.js.png" },
  { skillName: "React.js", logoSrc: "./assets/Skills - React.js.png" },
  { skillName: "Node.js", logoSrc: "./assets/Skills - Node.js.png" },
  { skillName: "Django", logoSrc: "./assets/Skills - Django.png" },
  { skillName: "Flask", logoSrc: "./assets/Skills - Flask.png" },
  { skillName: "AWS", logoSrc: "./assets/Skills - AWS.png" },
  { skillName: "Docker", logoSrc: "./assets/Skills - Docker.png" },
];

export const CERTIFICATIONS = [
  {
    name: "AWS Certified Machine Learning - Specialty",
    issuedDate: "Aug. 10th 2024",
    expiresDate: "Aug. 10th 2027",
    fileName: "./assets/AWS Certificate - Machine Learning.pdf",
  },
  {
    name: "AWS Certified Security - Specialty",
    issuedDate: "Jul. 24th 2024",
    expiresDate: "Jul. 24th 2027",
    fileName: "./assets/AWS Certificate - Security.pdf",
  },
  {
    name: "AWS Certified Developer - Associate",
    issuedDate: "Feb. 18th 2024",
    expiresDate: "Feb. 18th 2027",
    fileName: "./assets/AWS Certificate - Developer.pdf",
  },
];

export const EDUCATION = [
  {
    schoolName: "The University of Texas at Dallas",
    location: "Richardson, TX",
    major: "Master of Science in Computer Science",
    period: "Aug. 2024 - May 2026 (Expected)",
  },
  {
    schoolName: "Korea National Open University",
    location: "Seoul, Republic of Korea",
    major: "Bachelor of Science in Computer Science",
    period: "Feb. 2021 - Aug. 2023",
  },
  {
    schoolName: "Yonsei University",
    location: "Seoul, Republic of Korea",
    major: "Bachelor of Science in Engineering",
    period: "Mar. 2013 - Feb. 2021",
  },
  {
    schoolName: "The University of Texas at Arlington",
    location: "Arlington, TX",
    major: "Exchange Program",
    period: "Aug. 2019 - May 2020",
  },
];
