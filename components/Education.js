import { Background, Bright } from "../constants/color.js";
import { EDUCATION } from "../constants/data.js";

export default class Education extends HTMLElement {
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

    if (hash === "education")
      this.shadowRoot.querySelector("section").scrollIntoView({ behavior: "smooth" });
  }

  render() {
    this.shadowRoot.innerHTML = `
        <section id="education" class="education-wrapper">
            <div class="education">
                <div class="education-title">Education</div>

                ${EDUCATION.map((edu) => {
                  const { schoolName, location, major, period } = edu;

                  return `
                    <div class="education-item">
                        <div class="education-school">
                            <span class="school-title">
                                ${schoolName}
                            </span>
                            <span class="school-location">
                                ${location}
                            </span>
                        </div>
                        <div class="education-major">
                            <span class="major-name">
                                <i>${major}</i>
                            </span>
                            <span class="major-period">
                                ${period}
                            </span>
                        </div>
                    </div>
                  `;
                }).join("")}
            </div>
        </section>

        <style>
            .education-wrapper {
                width: 100%;
                padding-top: 50px;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .education {
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

            .education-title {
                font-size: 34px;
                font-weight: bold;

                margin-bottom: 30px;
            }

            .education-item {
                width: 100%;
                padding: 6px;

                display: flex;
                flex-direction: column;
                gap: 4px;
            }
            
            .education-school {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .school-title {
                font-size: 24px;
                font-weight: bold;
            }

            .school-location {
                font-size: 16px;
            }
            
            .education-major {
                display: flex;
                justify-content: space-between;

                font-size: 16px;
            }

            ul {
                margin: 1px 0;

                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            @media (max-width: 576px) {
                .education {
                    width: 80%;
                    padding: 8%;
                    margin-left: 0;
                    font-size: 12px;
                }

                .education-title {
                    font-size: 26px;
                    margin-bottom: 20px;
                }

                .education-item {
                    gap: 2px;
                }

                .education-school {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 2px;
                }

                .school-title {
                    font-size: 16px;
                }

                .school-location {
                    font-size: 12px;
                }

                .education-major {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 2px;
                }

                .major-name {
                    font-size: 12px;
                }

                .major-period {
                    font-size: 10px;
                }
            }
        </style>
    `;
  }
}

export const EducationComponentName = "my-education";
