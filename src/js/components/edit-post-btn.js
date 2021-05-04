import { getGET } from '../utils/root.js';
import { ORIGIN_ROOT } from '../utils/constants.js'
class EditButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'});
    this.post_id = getGET().id;
    this.link_endpoint = `${ORIGIN_ROOT}/post-editor.html?method=put&id=${this.post_id}`
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <a href="${this.link_endpoint}">editar post</a>

      ${this.getStyle()}
    `
    return template;
  }

  getStyle() {
    return `
    <style>
    a {
      padding: 5px
      background-color: var(--dark-blue);
      color: var(--white);
      border-radius: 5px;
      border: none;
      transition: opacity .2s;
      opacity: 60%
      font-size: 1.1rem;
      padding: 10px;
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
    this.render();
  }
}

customElements.define('edit-button', EditButton);