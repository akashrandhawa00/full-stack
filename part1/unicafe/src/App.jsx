import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
      <tr>
        <td>{props.name}</td>
        <td>{props.value}</td>
      </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if ((good+neutral+bad) === 0){
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <>
      <h1>statistics</h1>

      <table>
        <tbody>
        <StatisticLine name='Good' value={good} />
        <StatisticLine name='Neutral' value={neutral} />
        <StatisticLine name='Bad' value={bad} />
        <StatisticLine name='Total # of feedbacks' value={good + neutral + bad} />
        <StatisticLine name='Average' value={(good*1 + bad*-1)/(good+neutral+bad)}/>
        <StatisticLine name='Positive' value={good/(good+neutral+bad)}/>
        </tbody>
      </table>
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
