import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Display = (props) => {
  return (
    <p>{props.name} {'>>>'} {props.value}</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = () => {
    setGood(good + 1)
  }

  const clickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const clickBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={clickGood} text='good'/>
      <Button onClick={clickNeutral} text='neutral'/>
      <Button onClick={clickBad} text='bad'/>

      <h1>statistics</h1>
      <Display name='good' value={good} />
      <Display name='neutral' value={neutral} />
      <Display name='bad' value={bad} />
    </div>
  )
}

export default App
