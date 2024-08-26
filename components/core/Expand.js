import { Maroon } from "../../constants/color.js";

export default class Expand extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM
    this.attachShadow({ mode: "open" });

    this.summary = this.getAttribute("summary");

    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <details>
            <summary>
              <svg width="15" height="15" fill="#000000" height="800px" width="800px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve">
                <g>
                  <path fill="${Maroon}" d="M16,25c-0.6,0-1.1-0.2-1.6-0.6l-9.4-9.3c-0.7-0.7-1-1.6-1-2.5c0-1,0.4-1.8,1-2.5c1.4-1.4,3.6-1.4,5,0l5.8,5.7
                    c0.1,0.1,0.2,0.1,0.3,0l5.8-5.7c1.4-1.4,3.6-1.4,5,0c0.7,0.7,1,1.6,1,2.5c0,1-0.4,1.8-1,2.5l-9.4,9.3C17.1,24.8,16.6,25,16,25z"/>
                </g>
              </svg>

              ${this.summary}
            </summary>
            
            <slot></slot>
        </details>

        <style>
          details {
            border: none;
          }

          details[open] svg {
            transform: rotate(180deg);
          }
          
          summary {
            list-style: none;

            width: fit-content;
            padding: 4px 6px;
            
            display: flex;
            align-items: center;
            gap: 4px;

            color: ${Maroon};
            
            cursor: pointer;
          }
        </style>
    `;
  }
}

export const ExpandComponentName = "my-expand";
