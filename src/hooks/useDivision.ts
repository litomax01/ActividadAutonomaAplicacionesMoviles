import { useState } from 'react';

export default function useDivision() {
  const [result, setResult] = useState<string | null>(null);

  const divideNumbers = (num1: string, num2: string) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Ingrese números válidos");
      return;
    }

    if (b === 0) {
      setResult(a === 0 ? "INDETERMINACIÓN" : "NO EXISTE DIVISIÓN PARA CERO");
    } else {
      setResult((a / b).toFixed(2));
    }
  };

  return { result, divideNumbers };
}
