import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('addition');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    let result;
    switch (operation) {
      case 'addition':
        result = number1 + number2;
        break;
      case 'subtraction':
        result = number1 - number2;
        break;
      case 'multiplication':
        result = number1 * number2;
        break;
      case 'division':
        result = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
        break;
      default:
        result = 'Invalid operation';
    }

    setResult(result);
  };

  return (
    <div className="calculator">
      <h1>Simple Calculator</h1>
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
      </div>
      <div>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
      </div>
      <div>
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="addition">Addition</option>
          <option value="subtraction">Subtraction</option>
          <option value="multiplication">Multiplication</option>
          <option value="division">Division</option>
        </select>
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
};

export default Calculator;