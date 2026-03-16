import { useState, useEffect } from "react";
import StrengthChart from "./StrengthChart";

import axios from "axios";
import VolumeChart from "./VolumeChart";
const API = "http://localhost:3001/workouts";

function Dashboard() {
  const getWorkouts = async () => {
    const res = await axios.get(API);
    return res.data;
  };

  function useWorkouts() {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
      load();
    }, []);

    const load = async () => {
      const data = await getWorkouts();
      setWorkouts(data);
    };

    return { workouts, setWorkouts, reload: load };
  }
  const { workouts } = useWorkouts();
  const [muscle, setMuscle] = useState("");
  const [muscles, setMuscles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/muscles")
      .then((res) => res.json())
      .then(setMuscles);
  }, []);

  const filtered =
    muscle === ""
      ? workouts
      : workouts.filter((w) => String(w.muscleId) === String(muscle));

  return (
    <div style={{ padding: "40px" }}>
      <h1>Strength Analytics</h1>

      <select value={muscle} onChange={(e) => setMuscle(e.target.value)}>
        <option value="">All Muscles</option>

        {muscles.map((m) => (
          <option key={m.id} value={m.id}>
            {m.name}
          </option>
        ))}
      </select>

      <h2>Strength Progress</h2>
      <StrengthChart workouts={filtered} />

      <h2>Training Volume</h2>
      <VolumeChart workouts={filtered} />
    </div>
  );
}

export default Dashboard;
