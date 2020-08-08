import { DOMFactory } from './DOM.module.js'
import { renderFactory } from './render.module.js'

const _components = {}
const { query, queryAll, eventBind, addListener } = DOMFactory()
const { render } = renderFactory(_components, eventBind)

const register = (selector, componentFactory) => {
    const ctx = document.querySelector(`[data-component="${selector}"]`)
    const keys = componentFactory()
    _components[selector] = { ctx, keys }

}


export { render, register }