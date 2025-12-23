import { Background, Bright } from "../constants/color.js";

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

              display: flex;
              gap: 20px;
              
              font-size: 34px;
            }

            .header-title > a {
              width: fit-content;
              padding: 10px 10px;

              text-decoration: none;
              color: ${Bright};

              cursor: pointer;
            }

            @media (max-width: 576px) {
                .header-title {
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 49px;
                    border-bottom: 0.5px solid ${Bright};

                    align-items: center;
                    
                    width: 100%;
                    background-color: ${Background};
                    
                }

                .header-title > a {
                    padding: 6px 8px;

                    font-size: 18px;
                }
            }
        </style>
        `;
  }
}

export const HeaderTitleComponentName = "my-header-title";
