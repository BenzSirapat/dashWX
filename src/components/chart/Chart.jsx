import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
export default function ({ title, data, dataKey, grid }) {
  /* aspect={4 / 1} อัตราส่วน*/
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bb" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bb" />
          <Tooltip />
          {grid === grid
            ? grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
            : null}
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
