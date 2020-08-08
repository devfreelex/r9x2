const DOMFactory = () => {

    const query = (selector, ctx) => {
        return ctx.querySelector(selector)
    }

    const queryAll = (selector, ctx) => {
        return Array.from(ctx.querySelectorAll(selector))
    }

    const addListener = (eventName, elements, callback, option) => {
        elements.forEach(element => {
            element.addEventListener(eventName, callback, option)
        })
    }

    const eventBind = (ctx, events, fns) => {
        const methods = fns.call(null, ctx)
        const listeners = events({ query, queryAll, addListener, methods })
        for (let key in listeners) {
            listeners[key](ctx)
        }
    }    

    return {
        query,
        queryAll,
        addListener,
        eventBind
    }
}




export { DOMFactory }