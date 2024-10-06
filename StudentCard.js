// components/StudentCard.js

import React from 'react';

const StudentCard = ({ name, age, rollNumber, className }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 max-w-sm w-full">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700">Age: {age}</p>
      <p className="text-gray-700">Roll Number: {rollNumber}</p>
      <p className="text-gray-700">Class: {className}</p>
    </div>
  );
};

export default StudentCard;

