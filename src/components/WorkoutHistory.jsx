import { useEffect, useState } from "react";

import WorkoutCard from "./WorkoutCard";
import axios from "axios";

const API = "http://localhost:3001/workouts";

function WorkoutHistory() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const getWorkouts = async () => {
    const res = await axios.get(API);
    return res.data;
  };

  const load = async () => {
    const data = await getWorkouts();
    setWorkouts(data);
  };

  const deleteWorkout = async (id) => {
    await axios.delete(`${API}/${id}`);
  };

  const handleDelete = async (id) => {
    await deleteWorkout(id);
    load();
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Workout History</h1>

      {workouts.map((w) => (
        <WorkoutCard key={w.id} workout={w} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default WorkoutHistory;
