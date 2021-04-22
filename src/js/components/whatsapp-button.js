class whatsappButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'});
    this.link = this.getAttribute('link');
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <div class="container">
        <a href="${this.link}">
          <img src="../../../assets/icons/whatsapp.png">
        </a>
      </div>
      ${this.getStyle()}
    `
    return template;
  }

  getStyle() {
    return `
    <style>
    :host {
      position: fixed;
      bottom: 50px;
      right: 50px;
    }
      .container {
        width: 50px;
        height: 50px;
        opacity: 50%;
        transition: opacity .2s transform .2s;
      }
      .container:hover {
        opacity: 100%;
        transform: scale(1.1);
      }
      a, img {
        max-width: 100%
      }
    </style>
    
    `
  }

  render() {
    this.shadowRoot.append(this.getTemplate().content.cloneNode(true))
  }
  connectedCallback() {
    this.render();
  }
}

customElements.define('whatsapp-button', whatsappButton);