import { ORIGIN_ROOT } from '../utils/constants.js';
import { closeSession } from '../utils/close-session.js';
import { getCookies } from "../utils/cookies.js"
class sidebarComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    getTemplate() {
        const template = document.createElement('template');
            template.innerHTML = `
            ${this.defTemplate()}
            ${this.getStyle()}
            `
        
        return template;
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

    defTemplate() {
        if(getCookies().auth === 'true' && getCookies().profile_type == 'T') {
            return `
                <div class="component">
                    <ul class="list">
                        <li>
                            <a href="${ORIGIN_ROOT}/my-account.html">Mi cuenta</a>
                        </li>
                        <li>
                            <a href="${ORIGIN_ROOT}/post-editor.html">Nueva clase</a>
                        </li>
                        <li>
                            <a href="${ORIGIN_ROOT}/users-list.html">Usuarios</a>
                        </li>
                        <li>
                            <a href="http://brightacademy.pythonanywhere.com/admin/">Panel de Control</a>
                        </li>
                        <li id="disconnect_button">
                            <a href="">Desconectarse</a>
                        </li>
                    </ul>
                </div>
            `
        } else if(getCookies().auth === 'true') {
            return `
                <div class="component">
                    <ul class="list">
                        <li>
                            <a href="${ORIGIN_ROOT}/my-account.html">Mi cuenta</a>
                        </li>
                        <li id="disconnect_button">
                            <a href="">Desconectarse</a>
                        </li>
                    </ul>
                </div>
        `
        } else {
            return `
                <div class="component">
                    <ul class="list">
                        <li>
                            <a href="${ORIGIN_ROOT}/signup.html">Registrarse</a>
                        </li>
                        <li>
                            <a href="${ORIGIN_ROOT}/login.html">Iniciar sesión</a>
                        </li>
                    </ul>
                </div>
            `
        }
    }
    eventListener() {
        const disconnectButton = this.shadowRoot.querySelector('#disconnect_button');
        if (disconnectButton) {
            disconnectButton.addEventListener('click', closeSession);
        }

    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render()
        this.eventListener()
    }
}
customElements.define('sidebar-component', sidebarComponent)