export default (ctx, props) => {
    
    const state = { title: 'O título'}

    const template = () => /*html*/`
        <h1>
            ${state.title}
        </h1>
    `

    const styles = () => /*css*/`
        h1 { color: red }
    `

    const events = ({query, queryAll, addListener, methods}) => {

        const onClickTitle  = (ctx) => {
            const h1 = queryAll('h1', ctx)
            addListener('click', h1, methods.changeTitle)
        }

        return { 
            onClickTitle
        }
    }

    const methods = () => {
        
        const changeTitle = ({target}) => {
            state.title = 'outro título'
            target.textContent = state.title
        }

        return { changeTitle }
    }

    return {
        state,
        template,
        styles,
        events,
        methods
    }
    
}
