class RenderElement {
    constructor() {

    }

    isLogged = () => {
        console.log('this work')
    }

    isNotLogged = () => {
        console.log('this A')

    }
}

const renderElements = new RenderElement()

export { renderElements }