import { Background, Bright } from "../constants/color.js";
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
                  const { title, link, period, techStack, explanation, imgSrcs, description } = exp;

                  let linkHTML = "";
                  if (typeof link === "string")
                    linkHTML = `
                        <my-link linkUrl=${link} iconColor="${Background}">Link</my-link>
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
                                  explanation
                                    ? `<div class="project-explanation">
                                        <div class="project-detail-sub-title">Project Description</div>
                                        <div>${explanation}</div>
                                      </div>`
                                    : ""
                                }
                     
                                ${
                                  imgSrcs && Object.keys(imgSrcs).length > 0
                                    ? Object.entries(imgSrcs).map(
                                        ([title, imgs]) =>
                                          `
                                          <div class="project-images">
                                            <div class="project-detail-sub-title">${title}</div>
                                            <div class="image-wrapper">
                                              ${imgs
                                                .map(
                                                  (imgSrc, index) => `
                                                    <img src="${imgSrc}" width="800" alt="Image ${
                                                    index + 1
                                                  } for project ${title}" />
                                                  `
                                                )
                                                .join("")}
                                            </div>
                                          </div>
                                          `
                                      )
                                    : ""
                                }

                                <div class="projects-description">
                                  <div class="project-detail-sub-title">Role</div>
                                  <ul>
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

              width: 75%;
              margin-left: 8%;
              padding: 4%;
              border-radius: 20px;

                display: flex;
                flex-direction: column;
                align-items: center;

                background-color: ${Bright};
                color: ${Background};
            }

            .projects-title {
                font-size: 34px;
                font-weight: bold;

                margin-bottom: 30px;
            }

            .projects-item {
                width: 100%;
                padding: 6px;

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

                background: ${Background};
                color: ${Bright};

                font-size: 14px;
            }

            .project-detail {
                margin-top: 12px;
                padding: 40px 40px;
                border: 2px solid ${Background};
                border-radius: 16px;

                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 40px;
            }

            .project-explanation {
              width: 100%;

              display: flex;
              flex-direction: column;
              gap: 4px;
            }

            .project-detail-sub-title {
              color: ${Background};

              font-size: 20px;
              font-size: 20px;
              font-weight: 1000;
            }

            .project-images {
              width: 100%;

              display: flex;
              flex-direction: column;
              gap: 8px;
            }

            .project-images > .image-wrapper {
              display: flex;
              flex-direction: column;
              align-items: center
            }

            .projects-description {
              width: 100%;

              display: flex;
              flex-direction: column;
              gap: 8px;
            }

            .projects-description > ul {
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
