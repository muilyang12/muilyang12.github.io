import { MidnightBlue, Peach } from "../constants/color.js";
import { CERTIFICATIONS } from "../constants/data.js";

export default class Certifications extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM
    this.attachShadow({ mode: "open" });

    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <div class="certifications-wrapper">
            <div class="certifications">
                <div class="certifications-title">Certifications</div>

                ${CERTIFICATIONS.map((exp) => {
                  const { name, issuedDate, expiresDate, fileName } = exp;

                  return `
                    <div class="certification-item">
                        <div class="certification-info">
                            <span class="certification-name">
                                ${name}
                            </span>
                            <my-link linkUrl="${fileName}">Open</my-link>
                        </div>
                        <div class="certification-dates">
                            <span>
                                Issued ${issuedDate}
                            </span>
                            <span>
                                Expires ${expiresDate}
                            </span>
                        </div>
                    </div>
                  `;
                }).join("")}
            </div>
        </div>

        <style>
            .certifications-wrapper {
                width: 100%;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .certifications {
	            box-sizing: border-box;

                width: 1500px;
                padding: 80px;
                border-radius: 20px;

                display: flex;
                flex-direction: column;
                align-items: center;

                background-color: ${Peach};
                color: ${MidnightBlue};

                font-size: 24px;
            }

            .certifications-title {
                font-size: 40px;
                font-weight: bold;

                margin-bottom: 30px;
            }

            .certification-item {
                width: 100%;
                padding: 2px 10px;

                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .certification-info {
                display: flex;
                gap: 8px;
                align-items: center;
            }

            .certification-name {
                font-size: 24px;
                font-weight: bold;
            }

            .certification-dates {
                display: flex;
                flex-direction: column;
                align-items: end;
            }
        </style>
    `;
  }
}

export const CertificationsComponentName = "my-certifications";
