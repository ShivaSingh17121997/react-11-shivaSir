import React, { useMemo, useState } from 'react';

export default function Optimization() {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
      sum += i;
    }
    return sum;
  };

  // Memoize the expensive calculation
  const expensiveCalculation = useMemo(() => handleClick(), []);

  console.log("expfun", expensiveCalculation);

  return (
    <div>
      <button onClick={() => setClick(click + 1)}>Click</button>
      <p>Click count: {click}</p>
      <p>Expensive Calculation Result: {expensiveCalculation}</p>
    </div>
  );
}
