import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

function AttendanceChart({ present, absent }) {
  const data = [
    { name: "Present", value: present },
    { name: "Absent", value: absent }
  ];

  return (
    <BarChart width={350} height={250} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#22c55e" />
    </BarChart>
  );
}

export default AttendanceChart;
