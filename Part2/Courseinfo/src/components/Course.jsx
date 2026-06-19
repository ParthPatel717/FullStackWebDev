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
export default Course