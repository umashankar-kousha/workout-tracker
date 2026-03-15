import { Bar } from "react-chartjs-2";


function VolumeChart({ workouts }) {
  const labels = workouts.map((w) => w.date);

  const data = workouts.map((w) => calculateVolume(w.weight, w.reps, w.sets));

  const chartData = {
    labels,
    datasets: [
      {
        label: "Training Volume",
        data,
      },
    ],
  };

  return <Bar data={chartData} />;
}

export default VolumeChart;
