
const Header = ({ name }) => <h2>{name}</h2>

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part) => (
                <Part key={part.id} part={part} />
            ))}
        </div>
    )
}

const Part = ({ part }) => (
    <p>
        {part.name} {part.exercises}
    </p>
)

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Total = ({ parts }) => {
    return (
        <p>
            Number of exercises {parts.reduce((sum, current) => sum + current.exercises, 0)}
        </p>
    )
}

export default Course
