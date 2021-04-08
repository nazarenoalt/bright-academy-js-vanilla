class sidebarComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            
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