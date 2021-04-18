import {userAuthentication} from '../auth.js'
class sidebarComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        
    }

    async getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = this.getAuth();
        template.innerHTML = `
            ${this.getAuth()}
            ${this.getStyle()}
            `
        return template;
    }
    
    getAuth() {
        const isTrue = () => {
            return `
                <div class="component">
                <ul class="list">
                    <li>
                        <a href="#">Mi Cuenta</a>
                    </li>
                    <li>
                        <a href="#">Mis Cursos</a>
                    </li>
                    <li>
                        <a href="#">Ajustes</a>
                    </li>
                    <li>
                        <a href="#">Desconectarse</a>
                    </li>
                </ul>
            </div>
            `;
        }
        const isFalse = () => {
            return `
                <div class="component">
                <ul class="list">
                    <li>
                        <a href="#">Mi Cuenta</a>
                    </li>
                </ul>
                </div>
            `;
        }
        return userAuthentication(isTrue, isFalse);
    }
    getStyle() {
        return `
            <style>
                :host {
                    --transparent-dark-blue: #2b357af8;
                    --white: #ffffff;
                }
                .component {
                    width: 100%;
                    height: 100%;
                    background: var(--transparent-dark-blue)
                }
                
                .list {
                    list-style: none;
                    width: 80%;
                    font-size: 1.5em;
                    line-height: 2.5;
                    margin: 0 auto;
                    padding: 0 15px;
                }
                .list li {
                    border-bottom: 1px solid var(--white);
                    transition: text-shadow .13s
                }
                .list li:hover {
                    text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.5);
                }
                .list a{
                color: var(--white);
                text-decoration: none;
                }
            </style>
        `
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define('sidebar-component', sidebarComponent)