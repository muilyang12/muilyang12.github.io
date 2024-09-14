export const INTRODUCTION_TITLE = "Hi! I’m Muil Yang ✨";

export const INTRODUCTIONS = [
  "I'm a software engineer skilled in JavaScript/TypeScript, Python, C/C++, Next.js/React.js, Node.js, Django, Flask, and AWS services. I'm currently pursuing a Master’s in Computer Science at The University of Texas at Dallas.",
  "With 3.5 years of experience as a software engineer, I developed applications using Next.js, Node.js, Docker, and libraries like Recoil and TanStack Query. These roles sharpened my ability to quickly learn new technologies and meet deadlines while collaborating across teams.",
  "Through hackathons, personal projects, and AWS certification, I’ve deepened my focus on deployment with Docker and AWS. I've also gained experience with LLM APIs and models, crafting effective prompts.",
  "These experiences have allowed me to hone my skills in both frontend and backend development. I am eager to apply this knowledge and continue growing in the field, contributing my expertise to future projects.",
];

export const EXPERIENCE = [
  {
    title: "Software Engineer",
    period: "Jan. 2021 - May 2024",
    companyName: "Midas IT (MIDASoft Inc.)",
    companyLocation: "Seongnam, Republic of Korea",
    description: [
      "Developed <i>Midas Workspace</i>, a web-based simulation tool designed for architectural and civil engineers, featuring a 3D model viewer and file drive.",
      "Implemented Inverse View Transformation to map from the Camera Coordinate System to the World Coordinate System, enabling features such as attaching documents to specific elements like columns or slabs in a 3D model.",
      "Elevated the visual representation of the 3D model viewer by integrating terrain data from ArcGIS with satellite imagery, enabling accurate visualizations of buildings and their immediate surroundings.",
      "Utilized Next.js's Lazy Loading to separate non-essential components from the initial render, reducing the bundle size by approximately 10%.",
      "Introduced Recoil for lightweight state management and efficient handling of class instances, and actively integrated real-time functionality using WebSocket.",
      "Modernized Midas Members, a membership management service, by migrating from a legacy jQuery and ID-based system to a React-based frontend, leading approximately 50% of customers to transition to email-based accounts.",
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
    techStack: ["Next.js", "Recoil", "Flask", "MySQL", "Naver Cloud", "Prompt Engineering"],
    description: [
      "Developed an AI-powered service to automatically order food ingredients by using OCR to read menus from uploaded images, extracting a list of necessary ingredients, and then automating the ordering process.",
      "Designed an interactive frontend with Next.js and built the backend with Flask and MySQL.",
      "Engineered and refined prompts to optimize the LLM API's response quality. Experimented with various prompt structures and iterations to gradually improve the result.",
    ],
  },
  {
    title: "Nutrition Specs",
    type: "Personal Project",
    period: "Jun. 2024 – Jul. 2024",
    link: "https://www.nutrition-specs.com/ice-cream",
    techStack: ["Next.js", "Django", "SQLite", "Docker", "Amazon Web Services (AWS)", "OpenAI API"],
    imgSrcs: ["./assets/Projects - Nutrition Specs (Architecture).png"],
    description: [
      "Built a web service to compare nutritional information across multiple products within the same category. For instance, searching for 'yogurt' will display the nutritional content of various yogurt products.",
      "Developed the frontend application using Next.js and Zustand, and engineered the backend server with Django, Django REST Framework, and SQLite.",
      "Deployed the application on Amazon Web Services (AWS) cloud utilizing Docker, AWS EC2, ECR, S3, CloudFront, and Route 53.",
      "Created a crawler to collect data, organized it with the OpenAI API, and displayed the data on the webpage.",
    ],
  },
  {
    title: "3D Visualization Project Using Three.js",
    type: "Personal Project",
    period: "Feb. 2023 – May. 2023",
    link: "https://github.com/muilyang12/Three.js-Study",
    techStack: ["Three.js", "Webpack"],
    imgSrcs: ["./assets/Projects - Three.js Study.gif"],
    description: [
      "Initiated this personal project to deepen my understanding of 3D graphics and web development using Three.js",
      "Developed the project using Three.js, Webpack, and basic HTML/CSS/JavaScript, focusing on creating interactive 3D visualizations.",
      "Deployed the project through GitHub Pages.",
    ],
  },
  {
    title: "3D Visualization Project Using WebGPU",
    type: "Personal Project",
    period: "Sep. 2022 – Dec. 2022",
    link: "https://github.com/muilyang12/WebGPU-Study",
    techStack: ["WebGPU", "Webpack"],
    imgSrcs: ["./assets/Projects - WebGPU Study.gif"],
    description: [
      "Initiated this personal project to deepen my understanding of 3D graphics and web development using WebGPU",
      "Developed the project using WebGPU, Webpack, and basic HTML/CSS/JavaScript, focusing on creating interactive 3D visualizations.",
      "Deployed the project through GitHub Pages.",
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
    major:
      'Bachelor of Science in Civil Engineering<br/><span style="font-size: 20px; padding-left: 30px;">- Received a full scholarship for 5 out of 6 semesters.</span>',
    period: "Mar. 2013 - Feb. 2021",
  },
  {
    schoolName: "The University of Texas at Arlington",
    location: "Arlington, TX",
    major:
      'Exchange Program<br/><span style="font-size: 20px; padding-left: 30px;">- Received a full scholarship.</span>',
    period: "Aug. 2019 - May 2020",
  },
];
