import { MidnightBlue, Peach } from "../constants/color.js";
import { EXPERIENCE } from "../constants/data.js";

export default class Experience extends HTMLElement {
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

    if (hash === "experience")
      this.shadowRoot.querySelector("section").scrollIntoView({ behavior: "smooth" });
  }

  render() {
    this.shadowRoot.innerHTML = `
        <section id="experience" class="experience-wrapper">
            <div class="experience">
                <div class="experience-title">Experience</div>

                ${EXPERIENCE.map((exp) => {
                  const { title, period, companyName, companyLocation, description } = exp;

                  return `
                    <div class="experience-item">
                        <div class="experience-position">
                            <span class="position-title">
                                ${title}
                            </span>
                            <span class="position-period">
                                ${period}
                            </span>
                        </div>
                        <div class="experience-company">
                            <span class="company-name">
                                <i>${companyName}</i>
                            </span>
                            <span class="company-location">
                                ${companyLocation}
                            </span>
                        </div>
                        <ul class="experience-description">
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
                  `;
                }).join("")}
            </div>
        </section>

        <style>
            .experience-wrapper {
                width: 100%;
                padding-top: 50px;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .experience {
	            box-sizing: border-box;

                width: 1500px;
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

            .experience-title {
                font-size: 40px;
                font-weight: bold;

                margin-bottom: 30px;
            }

            .experience-item {
                width: 100%;
                padding: 10px;

                display: flex;
                flex-direction: column;
                gap: 4px;
            }
            
            .experience-position {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .position-title {
                font-size: 30px;
                font-weight: bold;
            }
            
            .experience-company {
                display: flex;
                justify-content: space-between;
            }

            ul {
                margin: 1px 0;

                display: flex;
                flex-direction: column;
                gap: 4px;
            }
        </style>
    `;
  }
}

export const ExperienceComponentName = "my-experience";
