import { useState } from "react";
const StatisticLine = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    </div>
  );
};
const Statistics = ({ good, bad, neutral, total }) => {
  if (total == 0) {
    return <h1>No Feedback given</h1>;
  }
  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (good / total) * 100;
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="total" value={total} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </div>
  );
};
const Button = ({text, onClick}) => {
  return <button onClick={onClick}>{text}</button>
}
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad

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
      <Button onClick={() => updateGood()} text = "Good"/>
      <Button onClick={() => updateNeutral()} text = "Neutral"/>
      <Button onClick={() => updateBad()} text = "Bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};
export default App;
