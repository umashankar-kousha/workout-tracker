import { useEffect, useState } from "react";

import WorkoutCard from "./WorkoutCard";
import axios from "axios";
import { apiServer } from "./services";
import { toast } from "react-toastify";

const API = `${apiServer}/workouts?_embed=muscle`;

function WorkoutHistory() {
  const [workouts, setWorkouts] = useState([]);

  const [muscles, setMuscles] = useState([]);
  const [muscleFilter, setMuscleFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

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
    
    await axios.delete(`${apiServer}/workouts/${id}`);
    
  };

  const handleDelete = async (id) => {
    await deleteWorkout(id);
    load();
  };

  useEffect(() => {
    fetch(`${apiServer}/muscles`)
      .then((res) => res.json())
      .then(setMuscles);
  }, []);

  const filteredWorkouts = workouts.filter((w) => {
    const muscleMatch =
      muscleFilter === "" || String(w.muscleId) === String(muscleFilter);

    const dateMatch = dateFilter === "" || w.date === dateFilter;

    return muscleMatch && dateMatch;
  });

  return (
    <div style={{ padding: "40px" }}>
      <h1>Workout History</h1>
      <div style={{ marginBottom: "20px" }}>
        <select
          value={muscleFilter}
          onChange={(e) => setMuscleFilter(e.target.value)}
        >
          <option value="">All Muscles</option>

          {muscles.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
        <button
          onClick={() => {
            setMuscleFilter("");
            setDateFilter("");
          }}
        >
          Clear Filters
        </button>
      </div>

      {filteredWorkouts.map((w) => {
        return <WorkoutCard key={w.id} workout={w} onDelete={handleDelete} />;
      })}
    </div>
  );
}

export default WorkoutHistory;
