class footerComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.owner = this.getAttribute('owner');
        this.address = this.getAttribute('address');
        this.contactLink = this.getAttribute('contactLink');
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="component">
                <div class="first-footer box-footer">
                <h3>${this.owner}</h3>
                <p>${this.address}</p>
                   
                </ul>
        
                </div>
                <div class="second-footer box-footer">
                <ul>
                        <li>
                            <a href="${this.contactLink || "#"}">Redes y Contacto</a>
                        </li>
                </ul>
                <div class="leyenda">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

            </div>
           
            ${this.getStyle()}
        `
        return template;
    }

    static get observedAttributes() {
        return ['responsive']
    }

    attributeChangedCallback(attr, oldV, newV) {
        if (attr = 'responsive') {
            this.responsive = newV;
        }
    }

    getStyle() {
        return `
            <style>
                :host {
                    --red: #e8303a;
                    --white: #ffffff;
                        --dark-blue: #2b357a;


                }
                .component {
                    display: flex;
                    flex-direction: column;
                    background-color: var(--red);
                    gap: 10px;
                    padding: 15px;
                    color: var(--white);
                    justify-content: center;
                    align-items: center;
                }
                .first-footer {
                    list-style: none;
                }
              
                .box-footer {
                    display: flex;
                    flex-direction: column;
                    font-size: .8rem;
                    line-height: 1.5;
                    text-align: center;
                }
                
                .box-footer ul {
                    padding: 0;
                    list-style:none
                }
                
                .box-footer a {
                    font-weight: bold;
                    color: var(--white);

                }
                
                .box-footer a:visited {
                    color: var(--white);
                }
                
                .leyenda {
                    grid-area: leyenda;
                    text-align: center;
                }
                @media screen and (min-width: 768px) {
                    .component {
                        flex-direction: row;
                    }
                    .box-footer {
                        width: 50%;
                    }
                    .first-footer {
                        border-right: 2px solid var(--dark-blue);
                    }
                     
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

customElements.define('footer-component', footerComponent)