const renderFactory = (components, eventBind) => {
    const _components = components
    const _eventBind = eventBind

    const render = (ctx, keys) => {
        if (!ctx || !keys) {
            automaticRender()
            return
        }

        manualRender(ctx, keys)
    }
    
    const automaticRender = () => {
        const components = Object.keys(_components)

        components.forEach(key => {
            const { ctx, keys } = _components[key]
            ctx.innerHTML = keys.template()
            _eventBind(ctx, keys.events, keys.methods)
        })
    }
    
    const manualRender = (ctx, keys) => {
        const template = keys.template()
        ctx.innerHTML = template
        _eventBind(ctx, keys.events, keys.methods)
    }
    
    return { render }
}

export { renderFactory }