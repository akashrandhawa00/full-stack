const Header = (prop) => {
  return (
    <div>
      <h1>{prop.course.name}</h1>
    </div>
  )
}

const Content = (prop) => {
  return (
    <div>
      <Part name={prop.course.parts[0].name} exercise={prop.course.parts[0].exercises} />
      <Part name={prop.course.parts[1].name} exercise={prop.course.parts[1].exercises} />
      <Part name={prop.course.parts[2].name} exercise={prop.course.parts[2].exercises} />
    </div>
  )
}

const Total = (prop) => {

  return (
    <p>Number of exercises {prop.course.parts[0].exercises + prop.course.parts[1].exercises + prop.course.parts[2].exercises}</p>
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

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course}/>
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

export default App
