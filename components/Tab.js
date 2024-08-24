import { HotPink, Maroon, MidnightBlue, Peach } from "../constants/color.js";

export default class Tab extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM
    this.attachShadow({ mode: "open" });

    this.render();
  }

  connectedCallback() {
    this.addEventListener("click", (event) => {
      const tabName = this.getAttribute("tabName");

      let newUrl;

      if (tabName === "home") newUrl = `/index.html`;
      else newUrl = `/${tabName}.html`;

      window.location.href = newUrl;
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <div>
        <slot></slot>
      </div>

      <style>
        div {
          cursor: pointer;

          padding: 10px 20px;
          background-color: ${Maroon};
          
          
          color: ${Peach};
          font-weight: bold;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        div:hover {
          background-color: ${HotPink};
          color: ${Peach};
          border-bottom: 1px solid ${MidnightBlue};
        }

      </style>
    `;
  }
}

export const TabComponentName = "my-tab";
