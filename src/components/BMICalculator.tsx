import React, { useState } from 'react';

function BMICalculator() {

    const [weight, setWeight] = useState<number | string>('');
    const [height, setHeight] = useState<number | string>('');
    const [bmi, setBmi] = useState<number | null>(null);
    const [status, setStatus] = useState<string>('');
  
    const calculateBMI = () => {
      if (weight && height) {
        const weightNum = typeof weight === 'string' ? parseFloat(weight) : weight;
        const heightNum = typeof height === 'string' ? parseFloat(height) : height;
  
        const bmiValue = (weightNum / (heightNum * heightNum)) * 703;
        setBmi(bmiValue);
  
        let statusValue = '';
        if (bmiValue < 18.5) {
          statusValue = 'Underweight';
        } else if (bmiValue < 24.9) {
          statusValue = 'Normal weight';
        } else if (bmiValue < 29.9) {
          statusValue = 'Overweight';
        } else {
          statusValue = 'Obesity';
        }
        setStatus(statusValue);
      }
    };
    
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">BMI Calculator</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Weight (lbs)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="mt-1 p-2 w-full border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Height (in)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="mt-1 p-2 w-full border rounded"
        />
      </div>
      <button
        onClick={calculateBMI}
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Submit
      </button>
      {bmi !== null && (
        <div className="mt-4">
          <p className="text-lg">Your BMI is: {bmi.toFixed(1)}</p>
          <p className="text-lg">You are: {status}</p>
        </div>
      )}
    </div>
  )
}

export default BMICalculator
