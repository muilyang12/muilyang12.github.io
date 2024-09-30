import { Maroon, MidnightBlue, Peach } from "../constants/color.js";
import { CLASSES } from "../constants/data.js";

export default class Classes extends HTMLElement {
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

    if (hash === "classes")
      this.shadowRoot.querySelector("section").scrollIntoView({ behavior: "smooth" });
  }

  render() {
    this.shadowRoot.innerHTML = `
        <section id="classes" class="classes-wrapper">
            <div class="classes">
                <div class="classes-title">Classes</div>

                ${CLASSES.map((exp) => {
                  const { title, link, semester, imgSrcs } = exp;

                  let linkHTML = "";
                  if (typeof link === "string")
                    linkHTML = `
                        <my-link linkUrl=${link}>Link</my-link>
                    `;

                  return `
                    <div class="classes-item">
                        <div class="classes-info">
                            <div>
                                <span class="classes-info-title">
                                    ${title}
                                </span>

                                ${linkHTML}
                            </div>
                            <span class="classes-info-semester">
                                ${semester}
                            </span>
                        </div>

                        <my-expand summary="Show details">
                            <div class="class-detail">
                                ${
                                  imgSrcs && imgSrcs.length > 0
                                    ? `
                                      <div class="class-images">
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
                            </div>
                        </my-expand>
                    </div>
                  `;
                }).join("")}
            </div>
        </section>

        <style>
            .classes-wrapper {
                width: 100%;
                padding-top: 50px;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .classes {
	            box-sizing: border-box;

              width: 75%;
              margin-left: 8%;
              padding: 4%;
              border-radius: 20px;

                display: flex;
                flex-direction: column;
                align-items: center;

                background-color: ${Peach};
                color: ${MidnightBlue};
            }

            .classes-title {
                font-size: 34px;
                font-weight: bold;

                margin-bottom: 30px;
            }

            .classes-item {
                width: 100%;
                padding: 6px;

                display: flex;
                flex-direction: column;
                gap: 4px;
            }
            
            .classes-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .classes-info > div {
                display: flex;
                gap: 8px;
                align-items: center;
            }

            .classes-info-title {
                font-size: 24px;
                font-weight: bold;
            }

            .classes-info-semester {
                font-size: 16px;
            }

            .class-detail {
                margin-top: 12px;
                padding: 60px 40px;
                border: 2px solid ${Maroon};
                border-radius: 16px;

                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 60px;
            }

            .class-images {
                display: flex;
                flex-direction: column;
                gap: 30px;
                justify-content: center;
            }

            .classes-description {
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

export const ClassesComponentName = "my-classes";
