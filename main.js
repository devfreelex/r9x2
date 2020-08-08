import { render, register } from './src/lib/component.factory.js'
import appMain from './src/components/appMain/appMain.component.js'

register('appMain', appMain)

render()

