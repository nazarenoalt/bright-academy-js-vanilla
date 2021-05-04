class headerComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="component">
                <div class="logo-container" id="container">
                    <a href="index.html">
                        <img src="https://nazarenoalt.github.io/bright-academy/assets/img/logo.jpg" alt="Bright Academy">
                    </a>
                </div>
                <div class="menu" id="menu">
                    <!--
                        The color is changed using the DOM of svg. If you want to change it, open burger-menu.svg with your IDE and change the "fill" peroperty of <path> tag
            
                        <path fill="[color]" d="...">    
                    -->
                        <img src="https://nazarenoalt.github.io/bright-academy/assets/icons/burger-menu.svg" alt="menu">
                </div>
            </div>
            ${this.getStyle()}
        `
        return template;
    }

    getStyle() {
        return `
            <style>
            :host {
                --red: #e8303a;
            }
                .icon-menu:before {
                    content: "\\e9bd";
                  }
                /*Header*/
                .component {
                    display: grid;
                    grid-template-columns: [logo] auto [menu] 100px;
                    background-color: #e8303a;
                }
                
                .logo-container {
                     grid-area: logo;
                }
                
                .logo-container img {
                    max-height: 100px;
                }
                
                .menu {
                    grid-area: menu;
                    color: var(--dark-blue);
                    width: 60px;
                    height: 60px;
                    margin: 20px 10px 20px 20px;
                    font-size: 2rem;
                }
                
                .menu :hover  {
                    filter: brightness(150%);
                }
                a {
                    grid-area: logo;
                }
                @media screen and (min-width: 1024px) {
                    .menu {
                        display: none;
                    }
                    .logo-container {
                        margin: 0 auto;
                    }
                    .header {
                        grid-template-columns: 1fr;
                
                    }
                }       
            </style>
        `
    }

    switchMenu() {
        const menu = this.shadowRoot.querySelector("#menu")
        const sidebar = document.querySelector('#sidebar');
        menu.addEventListener('click', () => {
                sidebar.style.display !== 'block'
                    ? sidebar.style.display = 'block'
                    : sidebar.style.display = 'none';
            })
        }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback() {
        this.render()
        this.switchMenu();
    }
}

customElements.define('header-component', headerComponent)