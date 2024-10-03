import { Bright } from "../constants/color.js";

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

                color: ${Bright};
            }

            .images-credit {
                padding: 30px 20px 20px 20px;
                border: 1px solid ${Bright};
                border-radius: 10px;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .images-credit-title {
	              box-sizing: border-box;

                font-size: 22px;
                font-weight: bold;
            }

            .images-credit-list {
                width: fit-content;

                display: flex;
                flex-direction: column;
                gap: 4px;

                font-size: 16px;
            }
        </style>
    `;
  }
}

export const ImagesCreditComponentName = "my-images-credit";
