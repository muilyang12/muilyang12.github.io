import { MidnightBlue, Peach } from "../constants/color.js";
import { EXPERIENCE } from "../constants/data.js";

export default class Experience extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM
    this.attachShadow({ mode: "open" });

    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <div class="experience-wrapper">
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
        </div>

        <style>
            .experience-wrapper {
                width: 100%;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .experience {
	            box-sizing: border-box;

                width: 1200px;
                padding: 50px;
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
