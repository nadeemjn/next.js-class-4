// components/StudentList.js

import React from 'react';
import StudentCard from './StudentCard';

const StudentList = () => {
  const students = [
    { name: 'Nadeem', age: 18, rollNumber: '121212', className: 'Monday 2 to 5' },
    { name: 'Ahmed', age: 19, rollNumber: '212121', className: 'Monday 2 to 5' },
    { name: 'Ayan', age: 20, rollNumber: '232323', className: 'Monday 2 to 5' },
  ];

  return (
    <div className="flex flex-wrap">
      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          age={student.age}
          rollNumber={student.rollNumber}
          className={student.className}
        />
      ))}
    </div>
  );
};

export default StudentList;
