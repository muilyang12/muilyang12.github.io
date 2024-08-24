import { MidnightBlue, Peach } from "../../constants/color.js";
import { INTRODUCTION } from "../../constants/data.js";

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
                    <img src="MuilYang_Photo.jpg" width="250" />
                </div>
                <div class="right">
                    ${INTRODUCTION}
                </div>
            </div>
        </div>

        <style>
            .introduction-wrapper {
                width: 100%;
                padding-top: 100px;

                display: flex;
                flex-direction: column;
                align-items: center;
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
                flex: 1;

                padding: 50px 50px;

                color: ${MidnightBlue};
                font-size: 20px;
            }
        </style>
    `;
  }
}

export const IntroductionComponentName = "my-introduction";
