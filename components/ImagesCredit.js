import { Maroon, MidnightBlue, Peach } from "../constants/color.js";
import { EDUCATION } from "../constants/data.js";

export default class ImagesCredit extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM
    this.attachShadow({ mode: "open" });

    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <section class="images-credit-wrapper">
          <div class="images-credit">
            <div class="images-credit-title">
              Images Credit
            </div>
            <ul class="images-credit-list">
                <li>
                    https://iconduck.com/
                </li>
                <li>
                    https://www.iconfinder.com/
                </li>
            </ul>
          </div>
        </section>

        <style>
            .images-credit-wrapper {
                width: 100%;
                padding-top: 50px;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 10px;

                color: ${Peach};
            }

            .images-credit {
                padding: 30px 20px 20px 20px;
                border: 1px solid ${Peach};
                border-radius: 10px;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .images-credit-title {
	              box-sizing: border-box;

                font-size: 30px;
                font-weight: bold;
            }

            .images-credit-list {
                width: fit-content;

                display: flex;
                flex-direction: column;
                gap: 4px;

                font-size: 20px;
            }
        </style>
    `;
  }
}

export const ImagesCreditComponentName = "my-images-credit";
