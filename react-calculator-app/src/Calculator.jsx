import { useState } from 'react';

export function Calculator() {
  const [display, setDisplay] = useState('');

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+'
  ];

  const calculate = (expression) => {
    const validExpression = /^(\d+)([+\-*/])(\d+)$/;
    const match = expression.match(validExpression);

    if (!match) {
      throw new Error('無効な式です。');
    }

    const num1 = Number(match[1]);
    const operator = match[2];
    const num2 = Number(match[3]);

    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        throw new Error('無効な演算子です。');
    }
  };

  const handleClick = (button) => {
    if (button === 'C') {
      setDisplay('');
      return;
    }

    if (button === '=') {
      try {
        setDisplay(String(calculate(display)));
      } catch {
        setDisplay('エラー');
      }
      return;
    }

    setDisplay((currentDisplay) => currentDisplay + button);
  };

  return (
    <div className="calculator-container">
      <h2>電卓アプリ</h2>
      <div className="display">{display || '0'}</div>
      <div className="button-grid">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;