export default class Modal extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM
    this.attachShadow({ mode: "open" });

    this.modalId = this.getAttribute("modalId");

    this.render();
  }

  connectedCallback() {
    const dialogDom = this.shadowRoot.querySelector("dialog");

    document.addEventListener(`openModal-${this.modalId}`, () => dialogDom.showModal());
    dialogDom.addEventListener("click", this.onClickDialogDom.bind(this));
  }

  disconnectedCallback() {
    const dialogDom = this.shadowRoot.querySelector("dialog");

    document.removeEventListener(`openModal-${this.modalId}`, () => dialogDom.showModal());
    dialogDom.removeEventListener("click", this.onClickDialogDom.bind(this));
  }

  onClickDialogDom(event) {
    const dialogDom = this.shadowRoot.querySelector("dialog");

    const rect = dialogDom.getBoundingClientRect();
    const isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;

    if (!isInDialog) {
      dialogDom.close();
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
        <dialog id="${this.modalId}">
          <slot></slot>
        </dialog>

        <style>
          dialog::backdrop {
            background: black;
            opacity: 0.3;
          }

          .gray-layer {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            display: none;

          }
        </style>
    `;
  }
}

export const ModalComponentName = "my-modal";
