import { hot } from 'react-hot-loader/root'
import React from 'react'
import ReactDOM from 'react-dom'

const App: () => JSX.Element = () => <h1>Hello World!</h1>
export default process.env.NODE_ENV === 'development' ? hot(App) : App

ReactDOM.render(<App />, document.getElementById('app'))
