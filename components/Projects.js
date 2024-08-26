import { Maroon, MidnightBlue, Peach } from "../constants/color.js";
import { PROJECTS } from "../constants/data.js";

export default class Projects extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM
    this.attachShadow({ mode: "open" });

    this.render();
  }

  connectedCallback() {
    window.addEventListener("hashchange", this.handleHashChange.bind(this));
    this.handleHashChange();
  }

  disconnectedCallback() {
    window.removeEventListener("hashchange", this.handleHashChange.bind(this));
  }

  handleHashChange() {
    const hash = window.location.hash.substring(1);

    if (hash === "projects")
      this.shadowRoot.querySelector("section").scrollIntoView({ behavior: "smooth" });
  }

  render() {
    this.shadowRoot.innerHTML = `
        <section id="projects" class="projects-wrapper">
            <div class="projects">
                <div class="projects-title">Projects</div>

                ${PROJECTS.map((exp) => {
                  const { title, link, period, techStack, imgSrc, description } = exp;

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
                            <div class="project-detail">
                                ${
                                  imgSrc
                                    ? `<img src="${imgSrc}" width="800" alt="Image for project ${title}" />`
                                    : ""
                                }

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
                            </div>
                        </my-expand>
                    </div>
                  `;
                }).join("")}
            </div>
        </section>

        <style>
            .projects-wrapper {
                width: 100%;
                padding-top: 50px;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .projects {
	            box-sizing: border-box;

                width: 77%;
                margin-left: 100px;
                padding: 80px;
                border-radius: 20px;

                display: flex;
                flex-direction: column;
                align-items: center;

                background-color: ${Peach};
                color: ${MidnightBlue};

                font-size: 24px;
            }

            .projects-title {
                font-size: 40px;
                font-weight: bold;

                margin-bottom: 30px;
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
                align-items: center;
            }

            .projects-info > div {
                display: flex;
                gap: 8px;
                align-items: center;
            }

            .projects-info-title {
                font-size: 30px;
                font-weight: bold;
            }

            .projects-tech-stack {
                margin: 3px 0;

                display: flex;
                gap: 5px;
            }

            .projects-tech-item {
                padding: 7px 9px;

                border-radius: 14px;

                background: ${Maroon};
                color: ${Peach};
            }

            .project-detail {
                margin-top: 12px;
                padding: 60px 40px;
                border: 2px solid ${Maroon};
                border-radius: 16px;

                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 60px;
            }

            ul {
                width: 100%;
                margin: 1px 0;

                display: flex;
                flex-direction: column;
                gap: 5px;
            }
        </style>
    `;
  }
}

export const ProjectsComponentName = "my-projects";
