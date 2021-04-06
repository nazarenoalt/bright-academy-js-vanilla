class headerComponent extends HTMLElement() {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
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
            ${getStyle()}
        `
        return template;
    }

    getStyle() {
        return `
            <style>
                .icon-menu:before {
                    content: "\\e9bd";
                  }
                /*Header*/
                .header {
                    display: grid;
                    grid-area: header;
                    grid-template-columns: 1fr 100px;
                    grid-template-areas: "logo menu";
                    background-color: var(--red);
                }
                
                .logo-container {
                    grid-area: logo;
                }
                
                .logo-container img {
                    max-height: 100px;
                }
                
                .menu {
                    color: var(--dark-blue);
                    width: 60px;
                    height: 60px;
                    margin: 20px 10px 20px 20px;
                    font-size: 2rem;
                }
                
                .menu :hover  {
                    filter: brightness(150%);
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
    render() {
        this.rootShadow.apapendChild(this.getTemplate());
    }
    connectedCallBack() {
        render()
    }
}

customElements.define('header-component', headerComponent)