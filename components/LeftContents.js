import { Bright } from "../constants/color.js";

export default class LeftContents extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM
    this.attachShadow({ mode: "open" });

    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <nav>
            <a href="#introduction">Intro</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#certifications">Certifications</a>
            <a href="#classes">Classes</a>
            <a href="#education">Education</a>
            <my-link linkUrl="./assets/Resume - Muil Yang.pdf" iconColor="${Bright}">Resume</my-link>
            <my-link linkUrl="https://www.linkedin.com/in/muilyang/" iconColor="${Bright}">LinkedIn</my-link>
            <my-link linkUrl="https://github.com/muilyang12/" iconColor="${Bright}">GitHub</my-link>
        </nav>

        <style>
            nav {
              position: fixed;
              top: 50%;
              left: 20px;
              transform: translate(0, -50%);
              padding: 40px 20px;

              display: flex;
              flex-direction: column;
              gap: 20px;
              
              border: 1px solid ${Bright};
              border-radius: 10px;
              color: ${Bright};
              font-size: 18px;
            }

            nav > a {
              text-decoration: none;
              color: inherit;

              cursor: pointer;
            }
        </style>
        `;
  }
}

export const LeftContentsComponentName = "my-left-contents";
