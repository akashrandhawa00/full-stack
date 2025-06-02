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

const Statistics = ({good, neutral, bad}) => {
  return (
    <>
      <h1>statistics</h1>
    
      <Display name='Good' value={good} />
      <Display name='Neutral' value={neutral} />
      <Display name='Bad' value={bad} />
      <Display name='Total # of feedbacks' value={good + neutral + bad} />
      <Display name='Average' value={(good*1 + bad*-1)/(good+neutral+bad)}/>
      <Display name='Positive' value={good/(good+neutral+bad)}/>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)


  const clickGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const clickNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const clickBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={clickGood} text='good'/>
      <Button onClick={clickNeutral} text='neutral'/>
      <Button onClick={clickBad} text='bad'/>

      <Statistics good={good} neutral={neutral} bad={bad}  />
    </div>
  )
}

export default App
