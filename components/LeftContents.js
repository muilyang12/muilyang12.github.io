import { HotPink, Peach } from "../constants/color.js";

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
            <a href="#certifications">Certifications</a>
            <my-link linkUrl="./assets/Resume - Muil Yang.pdf" iconColor="${Peach}">Resume</my-link>
            <my-link linkUrl="https://www.linkedin.com/in/muil-yang-662608201/" iconColor="${Peach}">LinkedIn</my-link>
            <my-link linkUrl="https://github.com/muilyang12/" iconColor="${Peach}">GitHub</my-link>
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
              
              border: 1px solid ${HotPink};
              border-radius: 10px;
              color: ${Peach};
              font-size: 24px;
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