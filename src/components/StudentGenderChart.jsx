import { PieChart, Pie, Cell, Tooltip } from "recharts";

function StudentGenderChart({ boys, girls }) {
  const data = [
    { name: "Boys", value: boys },
    { name: "Girls", value: girls }
  ];

  const COLORS = ["#3b82f6", "#ec4899"];

  return (
    <PieChart width={260} height={260}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={100}
        dataKey="value"
      >
        {data.map((_, index) => (
          <Cell key={index} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

export default StudentGenderChart;
