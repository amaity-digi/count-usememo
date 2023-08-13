import { useState, useMemo } from 'react';
import './App.css';

function App() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementOne = () => {
    setCountOne(countOne + 1);
  }

  const incrementTwo = () => {
    setCountTwo(countTwo + 1);
  }

  // const isEven = () => {
  //   let i = 0;
  //   while (i < 2000000000) i++;
  //   return countOne % 2 === 0;
  // }

  // this loops doesn't effect the return value , but it does the slow down the rate at while I compute,
  //Every time state update react component is rerander thatwhy it's effect for another button also.
  // This is why useMemo hooks comes in picture
  // useMemo ==> useMemo is a hook that will only recompute the cached value when one of the depandencies has changed
  // this optimisations heads to avoid expensive calculations on every render.


  //useMemo retun the memorized value, where as useCallback return the memorized callback function.

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);


  return (
    <div className="App">
      <h3>How to used useMemo</h3>
      <div>
        <button style={{ cursor: 'pointer' }} onClick={incrementOne}>Count One --{countOne}</button>
        {/* <span>{isEven() ? "Even" : "Odd"}</span> */}
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button style={{ cursor: 'pointer' }} onClick={incrementTwo}>Count Two --{countTwo}</button>
      </div>

    </div>
  );
}

export default App;
