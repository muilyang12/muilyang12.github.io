import { Maroon, MidnightBlue, Peach } from "../constants/color.js";
import { PROJECTS } from "../constants/data.js";

export default class Projects extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM
    this.attachShadow({ mode: "open" });

    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <div class="projects-wrapper">
            <div class="projects">
                <div class="projects-title">Projects</div>

                ${PROJECTS.map((exp) => {
                  const { title, link, period, techStack, description } = exp;

                  let linkHTML = "";
                  if (typeof link === "string")
                    linkHTML = `
                        <my-link linkUrl=${link}>Link</my-link>
                    `;
                  else if (typeof link === "object") {
                    linkHTML = `
                        <p>Links</p>
                    `;
                  }

                  return `
                    <div class="projects-item">
                        <div class="projects-info">
                            <div>
                                <span class="projects-info-title">
                                    ${title}
                                </span>

                                ${linkHTML}
                            </div>
                            <span class="projects-info-period">
                                ${period}
                            </span>
                        </div>

                        <div class="projects-tech-stack">
                            ${techStack
                              .map((tech) => {
                                return `
                                <div class="projects-tech-item">${tech}</div>
                            `;
                              })
                              .join("")}
                        </div>

                        <my-expand summary="Show details">
                            <ul class="projects-description">
                                ${description
                                  .map((des) => {
                                    return `
                                    <li>
                                        ${des}
                                    </li>
                                    `;
                                  })
                                  .join("")}
                            </ul>
                        </my-expand>
                    </div>
                  `;
                }).join("")}
            </div>
        </div>

        <style>
            .projects-wrapper {
                width: 100%;
                min-height: 100vh;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .projects {
	            box-sizing: border-box;

                width: 900px;
                min-height: 450px;
                padding: 30px;
                border-radius: 20px;

                display: flex;
                flex-direction: column;
                align-items: center;

                background-color: ${Peach};
                color: ${MidnightBlue}
            }

            .projects-title {
                font-size: 28px;
                font-weight: bold;

                margin-bottom: 20px;
            }

            .projects-item {
                width: 100%;
                padding: 10px;

                display: flex;
                flex-direction: column;
                gap: 4px;
            }
            
            .projects-info {
                display: flex;
                justify-content: space-between;
            }

            .projects-info > div {
                display: flex;
                gap: 4px;
                align-items: center;
            }

            .projects-info-title {
                font-size: 20px;
                font-weight: bold;
            }

            .projects-tech-stack {
                margin-top: 2px;

                display: flex;
                gap: 4px;
            }

            .projects-tech-item {
                padding: 4px 6px;
                
                font-size: 14px;

                border-radius: 12px;

                background: ${Maroon};
                color: ${Peach};
            }

            ul {
                margin: 1px 0;

                display: flex;
                flex-direction: column;
                gap: 2px;
            }
        </style>
    `;
  }
}

export const ProjectsComponentName = "my-projects";
