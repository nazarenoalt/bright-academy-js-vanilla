
console.log('hola')

class courseItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});

        this.date = this.getAttribute('date');
        this.coursetitle = this.getAttribute('coursetitle');
    }

    static get observedAttributes() {
        return ['emoji', 'coursetitle', 'date', 'difficulty', 'url']
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === 'emoji') {
            this.emoji = newVal;
        }
        if (attr === 'coursetitle') {
            this.courseTitle = newVal;
        }
        if (attr === 'date') {
            this.courseDate = newVal;
        }
        if (attr === 'difficulty') {
            this.difficulty = newVal;
        }
        if (attr === 'url') {
            this.url = newVal;
        }
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
        <div class="course-container">
            <a  href="${this.url || '#'}">
                <div class="course-item ${this.difficulty || 'beginner'}">
                    <span>
                        <img src="assets/icons/emojis/svg/${this.emoji}" alt="">
                    </span>
                </div>
            </a>
            <p class="course-title">${this.coursetitle}</p>
            <p class="course-date">${this.date}</p>
        </div>
        
        ${this.getStyle()}
        `
        return template;
    }

    getStyle() {
        return `
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;1,600&display=swap');
            :host {
                --blue: #33a8dd;
                --blue-2: #008aca;
                --green: #74c843;
                --green-2: #5cb12b;
                --orange: #ffa500;
                --orange-2: #df7e00;
            }
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Poppins', Arial, Helvetica, sans-serif;
                list-style: none;
            }
                .title {
                    margin: 70px 20px;
                    font-size: 2rem;
                }
                
                .course-container {
                    display: inline-block;
                    font-size: 1.5rem;
                    text-align: center;
                    margin: 0 30px 30px;
                }
                
                .course-item {
                    width: 100px;
                    height: 100px;
                    border-radius: 100px;
                    margin: 0 auto;  
                    transition: transform .2s;  
                    overflow: hidden;
                }
                
                /*Color of icons depending of level*/
                .course-item.beginner {
                    background-color: var(--blue);
                    border: 5px solid var(--blue-2);
                }
                
                .course-item.elementary {
                    background-color: var(--orange);
                    border: 5px solid var(--orange-2);
                }
                .course-item.intermediate {
                    background-color: var(--green);
                    border: 5px solid var(--green-2);
                }
                .course-item span {
                    line-height:100px;
                    font-size: 3rem;
                }
                
                .course-item img {
                    width: 3rem;
                }
                
                .course-item:hover {
                    transform: scale(1.1);
                }
                
                .course-title {
                    font-weight: bold;
                }
                
                .course-date {
                    font-size: 1rem;
                }

            </style>
        `
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('course-item', courseItem);

