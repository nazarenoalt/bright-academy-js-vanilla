import { getGET } from '../utils/root.js';
import { ORIGIN_ROOT } from '../utils/constants.js'
import { getCookies } from '../utils/cookies.js'

class EditButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'});
    this.post_id = getGET().id;
    this.button_value = this.getAttribute('button_value');
    this.method = this.getAttribute('button_method');
    this.link_endpoint = `${ORIGIN_ROOT}/post-editor.html?method=${this.method}&id=${this.post_id}`
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <a href="${this.link_endpoint}">${this.button_value}</a>

      ${this.getStyle()}
    `
    return template;
  }

  getStyle() {
    return `
    <style>
    * {
    --dark-blue: #2b357a;
    --white: #fff;
    }
    a {
      display: inline-block;
      padding: 3px 7px;
      background: #2b357a;
      color: #fff;
      border-radius: 5px;
      border: none;
      opacity: 60%;
      transition: opacity .2s;
      font-size: 1.1rem;
      margin: 0 30px;
      border: none;
      cursor: pointer;
      text-decoration: none;
    }
    a:hover {
      opacity: 80%;
    }
    </style>
    `
    
  }

  render() {
    this.shadowRoot.append(this.getTemplate().content.cloneNode(true))
  }
  connectedCallback() {
    if (getCookies().postAuthor === getCookies().username) this.render();
  }
}

customElements.define('edit-button', EditButton);