import { createContext, useEffect, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("students")) || []
  );

  const [activities, setActivities] = useState(
    JSON.parse(localStorage.getItem("activities")) || []
  );

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
    setActivities((prev) => [
      { id: Date.now(), text: `🟢 Student added: ${student.name}` },
      ...prev
    ]);
  };

  const toggleAttendance = (id) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, present: !s.present } : s
      )
    );
    setActivities((prev) => [
      { id: Date.now(), text: "🟡 Attendance updated" },
      ...prev
    ]);
  };

  return (
    <StudentContext.Provider
      value={{ students, addStudent, toggleAttendance, activities }}
    >
      {children}
    </StudentContext.Provider>
  );
};
