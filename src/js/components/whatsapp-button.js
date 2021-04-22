class whatsappButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'});
    this.link = this.getAttribute('link');
    this.label = this.getAttribute('label');
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <div class="container">
        <p>${this.label}</p>
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
      position: relative;
      opacity: 50%;
      transition: opacity .3s, transform .3s;
      
    }

    .container:hover {
      opacity: 100%;
      transform: scale(1.1);
    }

    .container:hover > p {
      display: block;
    }
    p {
      display: none;
      position: absolute;
      font-size: small;
      width: 100px;
      text-align: center;
      bottom: 50px;
      left: -24px;
    }

    a, img {
      width: 50px;
      height: 50px;
    }

    @media screen and (min-width: 1024px) {
      :host {
        right: calc(270px + 50px)
      }
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