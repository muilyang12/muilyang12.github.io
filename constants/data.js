export const INTRODUCTION_TITLE = "Hi! I’m Muil Yang ✨";

export const INTRODUCTIONS = [
  "Master's candidate in Computer Science (expected Dec 2025) with over 3 years of experience in software engineering, specializing in developing complex, scalable web applications, optimizing systems, and leveraging cloud technologies.",
  "I am proficient in JavaScript/TypeScript, Python, Java, Next.js/React.js, Node.js, Django, Docker/Kubernetes, AWS services, and CI/CD pipeline.",
];

export const EXPERIENCE = [
  {
    title: "Software Engineer Intern",
    period: "May 2025 - Present",
    companyName: "Esri",
    companyLocation: "Redlands, CA",
    description: [],
  },
  {
    title: "Software Engineer",
    period: "Jan. 2021 - May 2024",
    companyName: "Midas Software Inc.",
    companyLocation: "Republic of Korea",
    description: [],
  },
  {
    title: "Research Assistant",
    period: "Sep. 2019 - May 2020",
    companyName: "The University of Texas at Arlington",
    companyLocation: "Arlington, TX",
    description: [],
  },
];

export const PROJECTS = [
  {
    title: "Personal Website",
    type: "Personal Project",
    link: "https://github.com/muilyang12/muilyang12.github.io",
    techStack: ["Vanilla JS", "Web Components API", "HTML/CSS"],
    imgSrcs: { Architecture: ["./assets/Projects - Personal Website.png"] },
    description: [
      "Developed my personal website using Vanilla JS with Web Components API not any other Framework.",
    ],
  },
  {
    title: "Ray Tracing Image Generator - Computer Graphics Class",
    type: "Class Project",
    period: "Apr. 2025 – May. 2025",
    link: {
      GitHub: "https://github.com/muilyang12/ray-tracing-image-generator",
      Demo: "https://muilyang12.github.io/ray-tracing-image-generator/",
    },
    techStack: ["TypeScript", "React.js", "Three.js", "C++", "WebAssembly (WASM)"],
    explanation:
      "Web-based image generator leveraging WebAssembly (Wasm) to render uploaded OBJ models via ray tracing from a user-defined camera position; for each pixel, it casts a ray, traces it through the scene, and computes the correct color.",
    imgSrcs: { Architecture: ["./assets/Projects - Ray Tracing Image Generator.gif"] },
    description: [
      "Created as the final project for the Computer Graphics class, which covered rendering algorithms such as Phong, Ray Tracing, and Path Tracing.",
      "Implemented the Ray Tracing rendering algorithm in C++ (CPU-only), compiled it to WebAssembly, and integrated it into a React.js frontend.",
      "Deployed the application on GitHub Pages for public access.",
    ],
  },
  {
    title: "Midas Workspace - Midas Software Inc.",
    type: "Company Project",
    period: "Jul. 2022 – May 2024",
    techStack: [
      "TypeScript",
      "Next.js",
      "React.js",
      "Three.js",
      "Node.js",
      "WebAssembly",
      "WebSocket",
      "Webpack",
      "Docker",
      "Amazon Web Services (AWS)",
    ],
    explanation:
      "Collaborative web app for architectural and civil engineers. Enables device agnostic sharing and viewing of 3D structural analysis models, with features like model annotations, file sharing, and sub-views for detailed inspections.",

    imgSrcs: { Preview: ["./assets/Projects - Midas Workspace.png"] },
    description: [
      "Implemented a high-performance 3D model viewer using Next.js and a WebGL-based rendering engine, enabling real-time manipulation of complex architectural designs and increasing user productivity by 45%.",
      "Designed and integrated a secure, scalable online file-sharing system, supporting multi-format engineering documents up to 10GB.",
      "Built a RESTful API with Node.js to deliver visualization data, including GIS terrain data.",
      "Elevated the visual representation of the 3D model viewer by integrating terrain data from ArcGIS with satellite imagery, enabling accurate visualizations of buildings and their immediate surroundings.",
      "Implemented Inverse View Transformation feature to map Camera Coordinate System to World Coordinate System, allowing document attachment to elements like columns and slabs in 3D models.",
      "Designed a sub-view framework that enables users to seamlessly view related files, such as DWG or IFC, alongside 3D models, improving workflow efficiency and increasing user productivity by 33%.",
      "Introduced Recoil.js for lightweight state management and efficient handling of class instances, and actively integrated real-time functionality using WebSocket.",
    ],
  },
  {
    title: "Midas Members - Midas Software Inc.",
    type: "Company Project",
    period: "Dec. 2022 – Sep. 2023",
    techStack: [
      "TypeScript",
      "Next.js",
      "React.js",
      "Node.js",
      "Webpack",
      "Docker",
      "Amazon Web Services (AWS)",
    ],
    explanation:
      "Membership management system designed to streamline user account creation, authentication, and engagement.",
    imgSrcs: { Architecture: ["./assets/Projects - Midas Members.png"] },
    description: [
      "Modernized legacy systems with React-based frontend, significantly improving security and enhancing user experience, which led to 83% of the user base transitioning to a more secure and improved service within a quarter.",
      "Developed an SSO system with JWT authentication, enabling seamless login across platforms and enhancing security, which improved user experience by 67%.",
    ],
  },
  {
    title: "Nutrition Specs - Personal",
    type: "Personal Project",
    period: "Jun. 2024 – Jul. 2024",
    link: "https://github.com/muilyang12/nutrition-specs",
    techStack: [
      "TypeScript",
      "Python",
      "Next.js",
      "Django",
      "SQLite",
      "Docker",
      "GitHub Actions",
      "Amazon Web Services (AWS)",
      "OpenAI API",
    ],
    explanation:
      "Web service for comparing nutritional information across multiple products within the same category.",
    imgSrcs: { Architecture: ["./assets/Projects - Nutrition Specs (Architecture).png"] },
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
    explanation: "AI-driven food ingredient ordering system leveraging advanced LLM API services.",
    description: [
      "Developed an AI-powered service to automatically order food ingredients by using OCR to read menus from uploaded images, extracting a list of necessary ingredients, and then automating the ordering process.",
      "Developed a scalable, user-friendly interface using Next.js for the frontend, ensuring responsive design and optimal user experience",
      "Created a robust backend with Flask and MySQL, facilitating seamless integration between the LLM API and the frontend.",
      "Engineered and refined prompts to optimize the LLM API's response quality. Experimented with various prompt structures and iterations to gradually improve the result.",
      "Deployed the entire system on Naver Cloud, optimizing for performance and reliability in a cloud environment",
    ],
  },
  {
    title: "Flood Monitoring System - University of Texas at Arlington",
    type: "Company Project",
    period: "Sep. 2019 - May 2020",
    techStack: [
      "JavaScript",
      "Node.js",
      "Amazon Web Services (AWS)",
      "HTML/CSS",
      "Embedded System",
      "Atmel's Microcontroller",
      "Arduino",
    ],
    explanation:
      "A flood monitoring system comprised of an embedded system and web service to monitor flood-prone areas.",
    description: [
      "Engineered and deployed a Node.js RESTful API server on AWS for data collection and developed a website to visualize the data through graphs.",
      "Reduced the system's power consumption by 40% by transitioning from Arduino Mega to Atmel microcontrollers, carefully selecting hardware that provided the appropriate level of computing power for our project.",
    ],
  },
  {
    title: "3D Visualization Project Using Three.js - Personal",
    type: "Personal Project",
    period: "Feb. 2023 – May 2023",
    link: "https://github.com/muilyang12/Three.js-Study",
    techStack: ["Three.js", "Webpack"],
    imgSrcs: { Preview: ["./assets/Projects - Three.js Study.gif"] },
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
    imgSrcs: { Preview: ["./assets/Projects - WebGPU Study.gif"] },
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
  { skillName: "GitHub Actions", logoSrc: "./assets/Skills - GitHub Actions.png" },
  { skillName: "Jenkins", logoSrc: "./assets/Skills - Jenkins.png" },
  { skillName: "Docker", logoSrc: "./assets/Skills - Docker.png" },
  { skillName: "Kubernetes", logoSrc: "./assets/Skills - Kubernetes.png" },
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

export const CLASSES = [
  {
    title: "Computer Graphics",
    link: "https://github.com/muilyang12/Classes/tree/master/Computer%20Graphics",
    semester: "Spring 2025",
    imgSrcs: [
      { src: "./assets/Classes - CG (Path Tracing).png", width: 400 },
      { src: "./assets/Classes - CG (Ray Tracing).png", width: 400 },
      { src: "./assets/Classes - CG (Bezier Curve).png", width: 400 },
      { src: "./assets/Classes - CG (Lighting & Texture).png" },
      { src: "./assets/Classes - CG (Rasterization).png", width: 400 },
      { src: "./assets/Classes - CG (MVP).png", width: 400 },
    ],
    description: [],
  },
  {
    title: "Statistics for Data Science",
    link: "https://github.com/muilyang12/Classes/tree/master/Statistics%20for%20Data%20Science",
    semester: "Spring 2025",
    imgSrcs: [
      { src: "./assets/Classes - Statistics (Boxplot of Voltage Remote vs Local).png", width: 400 },
      { src: "./assets/Classes - Statistics (Histogram and Density Function).png", width: 400 },
      { src: "./assets/Classes - Statistics (Histogram of Body Temperature).png", width: 400 },
    ],
    description: [],
  },
  {
    title: "Machine Learning",
    link: "https://github.com/muilyang12/Classes/tree/master/Machine%20Learning",
    semester: "Fall 2024",
    imgSrcs: [
      { src: "./assets/Classes - ML (K Means Clustering).png" },
      { src: "./assets/Classes - ML (Decision Tree).png" },
      { src: "./assets/Classes - ML (SVM).gif" },
      { src: "./assets/Classes - ML (Perceptron).gif" },
      { src: "./assets/Classes - ML (LR with MSE).gif" },
    ],
    description: [],
  },
  {
    title: "Database Design",
    link: "https://github.com/muilyang12/Classes/tree/master/Database%20Design",
    semester: "Fall 2024",
    imgSrcs: [
      { src: "./assets/Classes - Database Design 1.png" },
      { src: "./assets/Classes - Database Design 2.png" },
    ],
    description: [],
  },
];

export const EDUCATION = [
  {
    schoolName: "The University of Texas at Dallas",
    location: "Richardson, TX",
    major: "Master of Science in Computer Science",
    period: "Aug. 2024 - Dec 2025 (Expected)",
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
    major: "Bachelor of Science in Civil Engineering",
    note: "Received National Merit Scholarship.",
    period: "Mar. 2013 - Feb. 2021",
  },
  {
    schoolName: "The University of Texas at Arlington",
    location: "Arlington, TX",
    major: "Exchange Program",
    note: "Received National Merit Scholarship.",
    period: "Aug. 2019 - May 2020",
  },
];
