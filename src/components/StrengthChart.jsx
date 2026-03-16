import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function StrengthChart({ workouts }) {
  const labels = workouts.map((w) => w.date);

  const calculate1RM = (weight, reps) => {
    return Math.round(weight * (1 + reps / 30));
  };

  const data = workouts.map((w) => calculate1RM(w.weight, w.reps));

  const chartData = {
    labels,
    datasets: [
      {
        label: "Estimated 1RM",
        data,
      },
    ],
  };

  return <Line data={chartData} />;
}

export default StrengthChart;
