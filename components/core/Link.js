export default class Link extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM
    this.attachShadow({ mode: "open" });

    this.linkUrl = this.getAttribute("linkUrl");
    this.iconColor = this.getAttribute("iconColor") ?? "#275070";

    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <a href="${this.linkUrl}" target="_blank" style="text-decoration: none; color: inherit;">
            <slot></slot>

            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="6" stroke="${this.iconColor}" fill="none">
                <path d="M55.4,32V53.58a1.81,1.81,0,0,1-1.82,1.82H10.42A1.81,1.81,0,0,1,8.6,53.58V10.42A1.81,1.81,0,0,1,10.42,8.6H32"/><polyline points="40.32 8.6 55.4 8.6 55.4 24.18"/><line x1="19.32" y1="45.72" x2="54.61" y2="8.91" />
            </svg>
        </a>

        <style>
            a {
              display: flex;
              align-items: center;
              gap: 2px;
            }

            svg {
                width: 18px;
                height: 18px;
            }

            @media (max-width: 576px) {
                svg {
                    width: 12px;
                    height: 12px;
                }
            }
        </style>
      `;
  }
}

export const LinkComponentName = "my-link";
