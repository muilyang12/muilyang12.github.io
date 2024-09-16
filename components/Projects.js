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
                  const { title, link, period, techStack, imgSrcs, description } = exp;

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
                                  imgSrcs && imgSrcs.length > 0
                                    ? `
                                      <div class="project-images">
                                        ${imgSrcs
                                          .map(
                                            (imgSrc, index) => `
                                              <img src="${imgSrc}" width="800" alt="Image ${
                                              index + 1
                                            } for project ${title}" />
                                            `
                                          )
                                          .join("")}
                                      </div>`
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

                width: 72%;
                margin-left: 100px;
                padding: 80px;
                border-radius: 20px;

                display: flex;
                flex-direction: column;
                align-items: center;

                background-color: ${Peach};
                color: ${MidnightBlue};
            }

            @media (min-width: 2000px) {
              .projects {
                padding: 120px;
              }
            }

            .projects-title {
                font-size: 34px;
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
                font-size: 24px;
                font-weight: bold;
            }

            .projects-info-period {
                font-size: 16px;
            }

            .projects-tech-stack {
                margin: 3px 0;

                display: flex;
                gap: 5px;
            }

            .projects-tech-item {
                display: flex;
                justify-content: center;
                align-items: center;

                padding: 4px 6px;
                border-radius: 10px;

                white-space: nowrap;

                background: ${Maroon};
                color: ${Peach};

                font-size: 14px;
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

            .project-images {
                display: flex;
                flex-direction: column;
                gap: 30px;
                justify-content: center;
            }

            .projects-description {
                width: 100%;
                margin: 1px 0;

                display: flex;
                flex-direction: column;
                gap: 5px;

                font-size: 18px;
            }
        </style>
    `;
  }
}

export const ProjectsComponentName = "my-projects";
