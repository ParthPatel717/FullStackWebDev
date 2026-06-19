const CourseDetails = ({name, parts}) =>{
    const total_exercise = parts.reduce(function(sum,part){
    return sum + part.exercises;
  },0)
  return(
    <div>
      <h3>{name}</h3>
      <div> 
        {parts.map( part=> <p key = {part.id}>{part.name} {part.exercises} </p> )}
      </div>
      <div> Total of {total_exercise} exercises </div>
    </div>
    
  )
}
const Course = ({courses})=>{
    return(
        <div>
          <h1>Web development curriculam</h1>
            <div>
              {
                courses.map(core => {
                  return(
                    <CourseDetails key={core.id} name={core.name} parts={core.parts}/>
                  )
                })
              }
            </div>
        </div>
    )
}

const App = () => {
   const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return <Course courses={courses} />
}


export default App
