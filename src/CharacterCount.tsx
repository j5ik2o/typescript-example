import React, { Fragment } from 'react'
import { atom, useRecoilState, selector, useRecoilValue, RecoilState, RecoilValueReadOnly } from 'recoil'

const characterState: RecoilState<string> = atom({
  key: 'characterState',
  default: '',
})

// Selector is used to retrieve a derived/computed state
const characterCountState: RecoilValueReadOnly<number> = selector({
  key: 'characterCountState',
  get: ({ get }) => {
    const chars = get(characterState)
    return chars.length
  },
})

const CharacterCount: () => JSX.Element = () => {
  const [character, setCharacter] = useRecoilState(characterState)
  const characterCount = useRecoilValue(characterCountState)

  const clear: () => void = () => setCharacter('')
  const onChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCharacter(e.target.value)

  return (
    <Fragment>
      <div>
        <span>Count {characterCount}</span>{' '}
      </div>
      <input type="text" value={character} onChange={onChange} />
      <button onClick={clear}>Clear</button>
    </Fragment>
  )
}
export default CharacterCount
