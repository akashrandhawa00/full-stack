const Header = (prop) => {
  return (
    <div>
      <h1>{prop.course}</h1>
    </div>
  )
}

const Content = (prop) => {
  return (
    <div>
      <Part name={prop.part1} exercise={prop.exercise1} />
      <Part name={prop.part2} exercise={prop.exercise2} />
      <Part name={prop.part3} exercise={prop.exercise3} />
    </div>
    // <p>
    //   {prop.part} {prop.exercise}
    // </p>
  )
}

const Total = (prop) => {

  return (
    <p>Number of exercises {prop.exercise1 + prop.exercise2 + prop.exercise3}</p>
  )
}

const Part = (prop) => {
  return (
    <p>
      {prop.name} {prop.exercise}
    </p>
  )
}

const App = () => {
  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercise1 = 10
  const part2 = "Using props to pass data"
  const exercise2 = 7
  const part3 = "State of a component"
  const exercise3 = 14

  return (
    <>
      <Header course={course}/>
      <Content part1={part1} exercise1={exercise1} part2={part2} exercise2={exercise2} part3={part3} exercise3={exercise3}/>
      <Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3}/>
    </>
  )
}

export default App
