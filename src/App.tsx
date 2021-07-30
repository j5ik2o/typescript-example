import { hot } from 'react-hot-loader/root'
import React from 'react'
import Counter from './Counter'
import { RecoilRoot } from 'recoil'
import CharacterCount from './CharacterCount'
import './App.css'

const App: () => JSX.Element = () => (
  <RecoilRoot>
    <div className="App-header">
      <h2>Character Counter</h2>
      <CharacterCount />

      <h2>Number Counter</h2>
      <Counter />
    </div>
  </RecoilRoot>
)
export default process.env.NODE_ENV === 'development' ? hot(App) : App
