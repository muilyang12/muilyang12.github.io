export default class ModalButton extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM
    this.attachShadow({ mode: "open" });

    this.modalId = this.getAttribute("modalId");

    this.render();
  }

  connectedCallback() {
    this.shadowRoot.querySelector("button").addEventListener("click", () => {
      console.log(this.modalId);

      document.dispatchEvent(new CustomEvent(`openModal-${this.modalId}`));
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
        <button>
            <slot></slot>
        </button>

        <style>
            button {
                outline: none;
                border: none;
                background: none;

                cursor: pointer;
            }
        </style>
      `;
  }
}

export const ModalButtonComponentName = "my-modal-button";
