import { MidnightBlue, Peach } from "../constants/color.js";
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

                width: 77%;
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
              .education {
                padding: 80px 120px;
              }
            }

            .education-title {
                font-size: 40px;
                font-weight: bold;

                margin-bottom: 30px;
            }

            .education-item {
                width: 100%;
                padding: 10px;

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
                font-size: 30px;
                font-weight: bold;
            }

            .school-location {
                font-size: 22px;
            }
            
            .education-major {
                display: flex;
                justify-content: space-between;

                font-size: 20px;
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

export const EducationComponentName = "my-education";
