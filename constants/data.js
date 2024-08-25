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
      "Enhanced functionality by implementing real-time features like screen sharing and user presence tracking using WebSocket.",
      "Developed common design systems and Node.js CLI tools for frontend teams, enhancing development efficiency.",
      "Optimized the UI development of the company's Windows desktop application by integrating Microsoft Edge WebView2, allowing seamless use of the web UI from our web services.",
    ],
  },
  {
    title: "Research Assistant",
    period: "Sep. 2019 - May 2020",
    companyName: "The University of Texas at Arlington",
    companyLocation: "Arlington, TX",
    description: [
      "Designed and developed a flood monitoring system comprised of an embedded system and web service to monitor flood-prone areas.",
      "Engineered and deployed a Node.js HTTP server for collection and developed a website to visualize the data through graphs.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Personal Website",
    type: "Personal Project",
    period: "Aug. 2024",
    techStack: ["Web Components API", "Pure JS"],
    description: [
      "Developed my personal website using Web Components API and pure JavaScript, without relying on React.js.",
    ],
  },
  {
    title: "AI Veggie Cat",
    type: "Hackathon Project",
    period: "Jul. 2024",
    techStack: ["Next.js", "Flask", "Naver Cloud", "Clova Studio (Korean LLM Service API)"],
    description: [
      "Developed an AI-based automatic food ingredient ordering service using Clova Studio, a Korean-language specialized LLM service similar to the OpenAI API, with Next.js, Flask, and Naver Cloud.",
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
    description: [
      "Developed a web service for comparing nutritional information across multiple products within the same category using Next.js, Django, and Amazon Web Services (AWS).",
      "Implemented a crawler application using Selenium, Tkinter, and the OpenAI API to collect nutritional data.",
    ],
  },
  {
    title: "Three.js Study",
    type: "Personal Project",
    period: "Feb. 2023 – May. 2023",
    link: ["https://www.nutrition-specs.com/ice-cream"],
    techStack: ["Three.js", "Webpack"],
    description: ["Created 3D web pages using Three.js as part of my personal study."],
  },
  {
    title: "WebGPU Study",
    type: "Personal Project",
    period: "Sep. 2022 – Dec. 2022",
    link: ["https://www.nutrition-specs.com/ice-cream"],
    techStack: ["WebGPU", "Webpack"],
    description: ["Created 3D web pages using WebGPU as part of my personal study."],
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
