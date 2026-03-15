import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function VolumeChart({ workouts }) {
  const labels = workouts.map((w) => w.date);
  const calculateVolume = (weight, reps, sets) => {
    return weight * reps * sets;
  };

  const data = workouts.map((w) => calculateVolume(w.weight, w.reps, w.sets));

  const chartData = {
    labels,
    datasets: [
      {
        label: "Training Volume",
        data: data,
      },
    ],
  };

  return <Bar data={chartData} />;
}

export default VolumeChart;
