import { HotPink, Maroon } from "../constants/color.js";

export default class Tabs extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM
    this.attachShadow({ mode: "open" });

    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <div>
            <slot></slot>
        </div>

        <style>
            div {
                margin: 0;
                padding: 0;

                display: flex;
                gap: 12px;
                
                background-color: ${Maroon};
                border-bottom: 2px solid ${HotPink};
            }
        </style>
    `;
  }
}

export const TabsComponentName = "my-tabs";
