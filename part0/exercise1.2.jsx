
const Header = (course) =>{
  return(
    <div>
      <p>{course.course}</p>
    </div>
  )
}
const Part = ({p})=>{
  return(
    <div>
      {p.part} {p.exercises}
    </div>
  )
}
const Content = ({c}) =>{
  return(
    <div> 
        <Part p = {c[0]}/>
        <Part p = {c[1]}/>
        <Part p = {c[2]}/>
    </div>
  )
}
const  Total = ({c}) =>{
    return(
      <div>
        Number of exercises {c[0].exercises + c[1].exercises + c[2].exercises };
      </div>
    )
}


const App = () => {
  const course = 'Half Stack application development'
  const c = [
    {part : 'Fundamentals of React', exercises: 10},
    {part : 'Using props to pass data', exercises: 7},
    {part : 'State of a component', exercises: 14}
  ]
  return (
    <div>
      <Header course = {course}/>
      <Content c = {c}/>
      <Total c = {c}/>
    </div>
  )
}

export default App
