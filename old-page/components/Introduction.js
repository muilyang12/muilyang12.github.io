import { Background, Bright } from "../constants/color.js";
import { INTRODUCTIONS, INTRODUCTION_TITLE } from "../constants/data.js";

export default class Introduction extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM
    this.attachShadow({ mode: "open" });

    this.render();

    console.log(`
      ┌────────────────────────────────────────────────┐
      │                                                │
      │    __  __       _ _  __   __                   │
      │   |  \\/  |_   _(_) | \\ \\ / /_ _ _ __   __ _    │
      │   | |\\/| | | | | | |  \\ V / _' | '_ \\ / _' |   │
      │   | |  | | |_| | | |   | | (_| | | | | (_| |   │
      │   |_|  |_|\\__,_|_|_|   |_|\\__,_|_| |_|\\__, |   │
      │                                       |___/    │
      │                                                │
      └────────────────────────────────────────────────┘
    `);

    const worker = new Worker("./worker.js");

    worker.onmessage = (event) => {
      console.log(event.data);
      console.log("Received Message.");
    };

    worker.postMessage(3);
    console.log("Sent Message.");
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
                  <img src="./assets/MuilYang_Profile_Photo.jpg" alt="Muil Yang Photo" />
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

              width: 75%;
              padding: 6%;
              margin-left: 8%;
              border-radius: 20px;

              display: flex;
              align-items: center;
              gap: 50px;

              background-color: ${Bright};
              color: ${Background};
            }

            .left {
                flex: 1;
            }

            .left > img {
                width: 100%;

                border-radius: 50%;
            }

            .right {
                flex: 2;

                color: ${Background};
            }

            .introduction-title {
                font-size: 34px;
                font-weight: bold;
            }

            .introduction-sentences {
                display: flex;
                flex-direction: column;
                gap: 30px;

                font-size: 18px;
            }

            @media (max-width: 576px) {
                .introduction {
                    width: 80%;
                    padding: 8%;
                    margin-left: 0;
                    font-size: 12px;

                    flex-direction: column;
                    gap: 20px;
                }

                .left {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }

                .left > img {
                    width: 80%;
                }

                .introduction-title {
                    font-size: 26px;
                    margin-bottom: 20px;
                }

                .introduction-sentences {
                    gap: 16px;

                    font-size: 14px;
                }
            }
        </style>
    `;
  }
}

export const IntroductionComponentName = "my-introduction";
