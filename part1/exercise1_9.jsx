import { useState } from "react";
const Statistics = ({good,bad,neutral,total}) => {
  if(total==0){
    return(
      <h1>No Feedback given</h1>
    )
  }
  return(
  <div>
    
   <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
       <p>Total {total}</p>
        <p>Average {total===0?0:(good-bad)/total}</p>
      <p>Positive {total===0?0:(good/total)*100}%</p>
  </div>
  )
}
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good+neutral+bad, average =0

  const updateGood = () => {
    const updated = good + 1;
    setGood(updated);
  };

  const updateNeutral = () => {
    const updated = neutral + 1;
    setNeutral(updated);
  };
  const updateBad = () => {
    const updated = bad + 1;
    setBad(updated);
  };
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => updateGood()}>Good</button>
      <button onClick={() => updateNeutral()}>Neutral</button>
      <button onClick={() => updateBad()}>Bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  );
};
export default App;
