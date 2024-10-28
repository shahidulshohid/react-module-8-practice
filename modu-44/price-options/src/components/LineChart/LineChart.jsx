
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentMarks = [
        { id: 1, name: "Alice", math: 67, physics: 72, chemistry: 81 },
        { id: 2, name: "Bob", math: 82, physics: 85, chemistry: 78 },
        { id: 3, name: "Charlie", math: 91, physics: 89, chemistry: 94 },
        { id: 4, name: "David", math: 74, physics: 70, chemistry: 65 },
        { id: 5, name: "Eva", math: 88, physics: 92, chemistry: 84 },
        { id: 6, name: "Frank", math: 53, physics: 60, chemistry: 58 },
        { id: 7, name: "Grace", math: 79, physics: 75, chemistry: 80 },
        { id: 8, name: "Hannah", math: 95, physics: 94, chemistry: 97 },
        { id: 9, name: "Ian", math: 68, physics: 72, chemistry: 73 },
        { id: 10, name: "Jack", math: 85, physics: 88, chemistry: 87 }
      ];
      
  return (
    <div>
      <LChart width={800} height={400} data={studentMarks}>
        <XAxis dataKey='name'></XAxis>
        <YAxis></YAxis>
        <Line dataKey='math' stroke='red'></Line>
        <Line dataKey='physics' stroke='yellow'></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
