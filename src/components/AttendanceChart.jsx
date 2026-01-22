import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { students } from "../data/StudentData";

function AttendanceChart() {
  const present = students.filter(s => s.present).length;
  const absent = students.length - present;

  const data = [
    { name: "Present", value: present },
    { name: "Absent", value: absent }
  ];

  return (
    <div className="chart-box">
      <h3>Attendance</h3>
      <BarChart width={350} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#22c55e" />
      </BarChart>
    </div>
  );
}

export default AttendanceChart;
