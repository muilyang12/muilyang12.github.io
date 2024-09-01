import { MidnightBlue, Peach } from "../constants/color.js";
import { INTRODUCTIONS, INTRODUCTION_TITLE } from "../constants/data.js";

export default class Introduction extends HTMLElement {
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

    if (hash === "introduction")
      this.shadowRoot.querySelector("section").scrollIntoView({ behavior: "smooth" });
  }

  render() {
    this.shadowRoot.innerHTML = `
        <section id="introduction" class="introduction-wrapper">
            <div class="introduction">
                <div class="left">
                  <img src="./assets/MuilYang_Photo.jpg" width="300" alt="Muil Yang Photo" />
                </div>
                <div class="right">
                  <p class="introduction-title">${INTRODUCTION_TITLE}</p>
                  <div class="introduction-sentences">
                    ${INTRODUCTIONS.map(
                      (intro) => `
                      <span>${intro}</span>
                      `
                    ).join("")}
                  </div>
                </div>
            </div>
        </section>

        <style>
            .introduction-wrapper {
              width: 100%;
              height: 100vh;

              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }

            .introduction {
	            box-sizing: border-box;

              width: 77%;
              margin-left: 100px;
              padding: 30px 50px;
              border-radius: 20px;

              display: flex;
              align-items: center;

              background-color: ${Peach};
              color: ${MidnightBlue};
            }

            .left {
                flex: 1;

                display: flex;
                align-items: center;
                justify-content: center;
            }

            .right {
                flex: 1.5;

                padding: 10px 50px 30px 50px;

                color: ${MidnightBlue};
            }

            .introduction-title {
                font-size: 40px;
                font-weight: bold;
            }

            .introduction-sentences {
                display: flex;
                flex-direction: column;
                gap: 30px;

                font-size: 24px;
            }
        </style>
    `;
  }
}

export const IntroductionComponentName = "my-introduction";
