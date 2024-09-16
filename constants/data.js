export const INTRODUCTION_TITLE = "Hi! I’m Muil Yang ✨";

export const INTRODUCTIONS = [
  "I'm a Master's candidate in Computer Science (expected May 2026) with over 3 years of experience in software engineering, specializing in complex, scalable web applications, system optimization, and cloud technologies.",
];

export const EXPERIENCE = [
  {
    title: "Software Engineer",
    period: "Jan. 2021 - May 2024",
    companyName: "Midas Software Inc.",
    companyLocation: "Seongnam, Republic of Korea",
    description: [],
  },
  {
    title: "Research Assistant",
    period: "Sep. 2019 - May 2020",
    companyName: "The University of Texas at Arlington",
    companyLocation: "Arlington, TX",
    description: [],
  },
  {
    title: "Private Mathematics Tutor",
    period: "Mar. 2017 - Jun. 2019",
    companyName: "Self-employed",
    companyLocation: "Seoul, Republic of Korea",
    description: [],
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
    title: "Midas Workspace - Midas Software Inc.",
    type: "Company Project",
    period: "",
    techStack: [
      "Next.js",
      "React.js",
      "Node.js",
      "WebAssembly",
      "WebSocket",
      "Webpack",
      "Docker",
      "Amazon Web Services (AWS)",
    ],
    imgSrcs: ["./assets/Projects - Midas Workspace.png"],
    description: [
      "Implemented a high-performance 3D model viewer using WebGL enabling real-time manipulation of complex architectural designs, increasing user productivity by 30%.",
      "Designed and integrated a secure, scalable online file-sharing system, supporting multi-format engineering documents up to 10GB.",
      "Implemented Inverse View Transformation feature to map Camera Coordinate System to World Coordinate System, allowing document attachment to elements like columns and slabs in 3D models.",
      "Elevated the visual representation of the 3D model viewer by integrating terrain data from ArcGIS with satellite imagery, enabling accurate visualizations of buildings and their immediate surroundings.",
      "Integrated recoil.js for streamlined state management and optimized class instance handling, and integrated real-time updates using WebSocket, significantly enhancing application performance by 20%.",
      "Designed a sub-view framework that enables users to seamlessly view related files, such as DWG or IFC, alongside 3D models, improving workflow efficiency and increasing user productivity by 40%.",
      "Utilized Next.js Lazy Loading to optimize initial render by separating non-essential components, reducing bundle size by approximately 10%.",
    ],
  },
  {
    title: "Midas Members - Midas Software Inc.",
    type: "Company Project",
    period: "",
    techStack: ["Next.js", "React.js", "Node.js", "Webpack", "Docker", "Amazon Web Services (AWS)"],
    imgSrcs: ["./assets/Projects - Midas Members.png"],
    description: [
      "Modernized legacy systems with React-based frontend, significantly improving security and enhancing user experience, which led to 50% of the user base transitioning to a more secure and improved service within a quarter.",
      "Developed an SSO system with JWT authentication, streamlining login across platforms and boosting workflow efficiency by 50%, while enhancing security and user experience.",
      "Executed phased rollout, transitioning 50% of customers to email-based accounts in first quarter.",
    ],
  },
  {
    title: "Nutrition Specs - Personal",
    type: "Personal Project",
    period: "Jun. 2024 – Jul. 2024",
    techStack: ["Next.js", "Django", "SQLite", "Docker", "Amazon Web Services (AWS)", "OpenAI API"],
    imgSrcs: ["./assets/Projects - Nutrition Specs (Architecture).png"],
    description: [
      "Built a web service to compare nutritional information across multiple products within the same category. For instance, searching for 'yogurt' will display the nutritional content of various yogurt products.",
      "Created a dynamic, user-friendly frontend with Next.js and Zustand.",
      "Implemented a robust backend with Django, Django REST Framework, and SQLite.",
      "Deployed the application on Amazon Web Services (AWS) cloud utilizing Docker, AWS EC2, ECR, S3, CloudFront, and Route 53.",
      "Utilized OpenAI API to enhance data processing and comparison capabilities, ensuring accurate nutritional insights.",
    ],
  },
  {
    title: "AI Veggie Cat - Hackathon",
    type: "Hackathon Project",
    period: "Jul. 2024",
    techStack: ["Next.js", "Recoil", "Flask", "MySQL", "Naver Cloud", "Prompt Engineering"],
    description: [
      "Developed an AI-powered service to automatically order food ingredients by using OCR to read menus from uploaded images, extracting a list of necessary ingredients, and then automating the ordering process.",
      "Developed a scalable, user-friendly interface using Next.js for the frontend, ensuring responsive design and optimal user experience",
      "Created a robust backend with Flask and MySQL, facilitating seamless integration between the LLM API and the frontend.",
      "Engineered and refined prompts to optimize the LLM API's response quality. Experimented with various prompt structures and iterations to gradually improve the result.",
      "Deployed the entire system on Naver Cloud, optimizing for performance and reliability in a cloud environment",
    ],
  },
  {
    title: "3D Visualization Project Using Three.js - Personal",
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
    title: "3D Visualization Project Using WebGPU - Personal",
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
    title: "3D Model AR Viewer - University",
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
      'Bachelor of Science in Civil Engineering<br/><span style="font-size: 16px; padding-left: 30px;">- Received a full scholarship for 5 out of 6 semesters.</span>',
    period: "Mar. 2013 - Feb. 2021",
  },
  {
    schoolName: "The University of Texas at Arlington",
    location: "Arlington, TX",
    major:
      'Exchange Program<br/><span style="font-size: 16px; padding-left: 30px;">- Received a full scholarship.</span>',
    period: "Aug. 2019 - May 2020",
  },
];
