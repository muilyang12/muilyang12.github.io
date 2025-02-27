import { Background, Bright, WHITE } from "../constants/color.js";
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

    if (hash === "skills")
      this.shadowRoot.querySelector("section").scrollIntoView({ behavior: "smooth" });
  }

  render() {
    this.shadowRoot.innerHTML = `
        <section id="skills" class="skills-wrapper">
            <div class="skills">
                <div class="skills-title">Technical Skills</div>

                <div class="skills-items">
                  ${SKILLS.map((skill) => {
                    const { skillName, logoSrc } = skill;

                    return `
                      <div class="skills-item">
                        <div class="skill-image-box">
                          <img class="skill-image" src="${logoSrc}"alt="" />
                        </div>
                        <span class="skill-title">
                            ${skillName}
                        </span>
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

            .skills {
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

            .skills-title {
                font-size: 34px;
                font-weight: bold;

                margin-bottom: 30px;
            }

            .skills-items {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                gap: 15px;
            }

            .skills-item {
                width: 160px;
                height: 160px;
                border-radius: 30px;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 20px;
                
                background-color: ${WHITE};
            }

            .skill-image-box {
                width: 70px;
                height: 70px;

                display: flex;
                justify-content: center;
                align-items: center;
            }

            .skill-image {
                width: 70px;
                height: 70px;
                
                object-fit: contain;
            }

            .skill-title {
                text-align: center;

                font-size: 18px;
                font-weight: bold;
            }

            @media (max-width: 576px) {
                .skills {
                    width: 80%;
                    padding: 8%;
                    margin-left: 0;
                    font-size: 12px;
                }

                .skills-title {
                    font-size: 26px;
                    margin-bottom: 20px;
                }

                .skills-items {
                    gap: 10px;
                }

                .skills-item {
                    width: 80px;
                    height: 80px;
                    border-radius: 20px;
                    gap: 10px;
                }

                .skill-image-box {
                    width: 30px;
                    height: 30px;
                }

                .skill-image {
                    width: 30px;
                    height: 30px;
                }

                .skill-title {
                    font-size: 12px;
                }
            }
        </style>
    `;
  }
}

export const SkillsComponentName = "my-skills";
