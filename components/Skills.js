import { Maroon, MidnightBlue, Peach, WHITE } from "../constants/color.js";
import { SKILLS } from "../constants/data.js";

export default class Skills extends HTMLElement {
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

    if (hash === "skills") this.shadowRoot.query;
    this.shadowRoot.querySelector("section").scrollIntoView({ behavior: "smooth" });
  }

  render() {
    this.shadowRoot.innerHTML = `
        <section id="skills" class="skills-wrapper">
            <div class="skils">
                <div class="skills-title">Technical Skills</div>

                <div class="skills-items">
                  ${SKILLS.map((skill) => {
                    const { skillName, logoSrc } = skill;

                    return `
                      <div class="skills-item">
                        <div class="skill-image-box">
                          <img src="${logoSrc}" width="120" height="120" alt="" />
                        </div>
                        <div>
                            <span class="skill-title">
                                ${skillName}
                            </span>
                        </div>
                      </div>
                    `;
                  }).join("")}
                </div>
            </div>
        </section>

        <style>
            .skills-wrapper {
                width: 100%;
                padding-top: 50px;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .skils {
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

            .skills-title {
                font-size: 40px;
                font-weight: bold;

                margin-bottom: 30px;
            }

            .skills-items {
                width: fit-conotent;

                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                gap: 15px;
            }

            .skills-item {
                width: 200px;
                height: 200px;
                border-radius: 30px;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 20px;
                
                background-color: ${WHITE};
            }

            .skill-image-box {
                width: 120px;
                height: 120px;

                display: flex;
                justify-content: center;
                align-items: center;
            }

            .skill-image-box > img {
                object-fit: contain;
            }

            .skill-title {
                font-size: 25px;
                font-weight: bold;
            }
        </style>
    `;
  }
}

export const SkillsComponentName = "my-skills";
