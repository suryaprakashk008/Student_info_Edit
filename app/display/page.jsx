"use client";

import { useEffect, useState } from "react";

export default function Display() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const interval = setInterval(()=>{
     const data =
      JSON.parse(localStorage.getItem("students")) || [];

    setStudents(data);

    },100);
   
     return () => clearInterval(interval);
  }, []);

   const deleteStudent = (indexToDelete) => {
    const updatedStudents = students.filter(
      (_, index) => index !== indexToDelete
    );

    setStudents(updatedStudents);

    localStorage.setItem(
      "students",
      JSON.stringify(updatedStudents)
    );
  };

  return (
    <div>
      <h1>Students</h1>

      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student} <button onClick={() => deleteStudent(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}