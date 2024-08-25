import { MidnightBlue, Peach } from "../constants/color.js";
import { INTRODUCTION, INTRODUCTION_TITLE } from "../constants/data.js";

export default class Introduction extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM
    this.attachShadow({ mode: "open" });

    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <div class="introduction-wrapper">
            <div class="introduction">
                <div class="left">
                    <img src="MuilYang_Photo.jpg" width="230" />
                </div>
                <div class="right">
                    <p>${INTRODUCTION_TITLE}</p>
                    ${INTRODUCTION}
                </div>
            </div>
        </div>

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
                width: 900px;
                height: 450px;

                display: flex;
                align-items: center;

                background-color: ${Peach};
                color: ${MidnightBlue}
            }

            .left {
                flex: 1;

                display: flex;
                align-items: center;
                justify-content: center;
            }

            .right {
                flex: 1.5;

                padding: 50px 50px;

                color: ${MidnightBlue};
                font-size: 18px;
            }

            .right p {
                font-size: 28px;
                font-weight: bold;
            }
        </style>
    `;
  }
}

export const IntroductionComponentName = "my-introduction";
