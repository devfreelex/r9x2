const appFactory = () => {

    const app = {
        components: [],
        directives: [],
        validators: [],
        pipes: []
    }

    const logger = () => {
        console.log(app)
    }

    const registerComponent = (selector, template, style, controller) => {
        if(!componentIsRegistred(selector)) {
            components.push({[selector]: {template, style, controller}})
        }
    }



    return {
        logger,
        registerComponent
    }
}

export { appFactory }