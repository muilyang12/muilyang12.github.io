import { HotPink, Peach, MidnightBlue } from "../constants/color.js";

export default class HeaderTitle extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM
    this.attachShadow({ mode: "open" });

    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <div class="header-title">
            <a href="/">Muil Yang</a>
            
        </div>

        <style>
            .header-title {
              position: fixed;
              top: 10px;
              left: 10px;
              padding: 10px 10px;

              display: flex;
              flex-direction: column;
              gap: 20px;
              
              color: ${Peach};
              font-size: 40px;
            }

            .header-title > a {
              text-decoration: none;
              color: inherit;S

              cursor: pointer;
            }
        </style>
        `;
  }
}

export const HeaderTitleComponentName = "my-header-title";
