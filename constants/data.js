export const INTRODUCTION_TITLE = "Hi! I’m Muil Yang ✨";

export const INTRODUCTIONS = [
  "Master's candidate in Computer Science (expected May 2026) with over 3 years of experience in software engineering, specializing in developing complex, scalable web applications, optimizing systems, and leveraging cloud technologies.",
  "I am proficient in JavaScript/TypeScript, Python, Java, Next.js/React.js, Node.js, Django, Docker/Kubernetes and AWS services.",
];

export const EXPERIENCE = [
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
  {
    title: "Private Mathematics Tutor",
    period: "Mar. 2017 - Jun. 2019",
    companyName: "Self-employed",
    companyLocation: "Republic of Korea",
    description: [],
  },
];

export const PROJECTS = [
  {
    title: "Personal Website",
    type: "Personal Project",
    techStack: ["Vanilla JS", "Web Components API", "HTML/CSS"],
    imgSrcs: { Architecture: ["./assets/Projects - Personal Website.png"] },
    description: [
      "Developed my personal website using Vanilla JS with Web Components API not any other Framework.",
    ],
  },
  {
    title: "Midas Workspace - Midas Software Inc.",
    type: "Company Project",
    period: "Jul. 2022 – May 2024",
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
    explanation:
      "Collaborative web app for architectural and civil engineers. Enables device agnostic sharing and viewing of 3D structural analysis models, with features like model annotations, file sharing, and sub-views for detailed inspections.",

    imgSrcs: { Preview: ["./assets/Projects - Midas Workspace.png"] },
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
    period: "Dec. 2022 – Sep. 2023",
    techStack: ["Next.js", "React.js", "Node.js", "Webpack", "Docker", "Amazon Web Services (AWS)"],
    explanation:
      "Membership management system designed to streamline user account creation, authentication, and engagement.",
    imgSrcs: { Architecture: ["./assets/Projects - Midas Members.png"] },
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
    title: "Machine Learning",
    link: "https://github.com/muilyang12/Classes/tree/master/Machine%20Learning",
    semester: "Fall 2024",
    imgSrcs: [
      "./assets/Classes - ML (K Means Clustering).png",
      "./assets/Classes - ML (Decision Tree).png",
      "./assets/Classes - ML (SVM).gif",
      "./assets/Classes - ML (Perceptron).gif",
      "./assets/Classes - ML (LR with MSE).gif",
    ],
    description: [],
  },
  {
    title: "Design and Analysis of Computer Algorithms",
    semester: "Fall 2024",
    imgSrcs: ["./assets/Classes - Algorithm.png"],
    description: [],
  },
  {
    title: "Database Design",
    link: "https://github.com/muilyang12/Classes/tree/master/Database%20Design",
    semester: "Fall 2024",
    imgSrcs: [
      "./assets/Classes - Database Design 1.png",
      "./assets/Classes - Database Design 2.png",
    ],
    description: [],
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
      'Bachelor of Science in Civil Engineering<span style="font-size: 16px; padding-left: 30px;">- Received National Merit Scholarship.</span>',
    period: "Mar. 2013 - Feb. 2021",
  },
  {
    schoolName: "The University of Texas at Arlington",
    location: "Arlington, TX",
    major:
      'Exchange Program<span style="font-size: 16px; padding-left: 30px;">- Received National Merit Scholarship.</span>',
    period: "Aug. 2019 - May 2020",
  },
];
