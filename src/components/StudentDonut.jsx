import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { students } from "../data/StudentData";

function StudentDonut() {
  const enrolled = students.filter(s => s.status === "Enrolled").length;
  const pending = students.length - enrolled;

  const data = [
    { name: "Enrolled", value: enrolled },
    { name: "Pending", value: pending }
  ];

  const COLORS = ["#6366f1", "#f59e0b"];

  return (
    <div className="chart-box">
      <h3>Student Status</h3>
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={100}
          dataKey="value"
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default StudentDonut;
