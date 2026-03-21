import { useState } from "react";
import MuscleDropdown from "./dropdown/MuscleDropdown";
import ExerciseDropdown from "./dropdown/ExerciseDropdown";
import { apiServer } from "./services";

function WorkoutForm({ onAdd }) {
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [muscleId, setMuscleId] = useState("");
  const [exercise, setExercise] = useState("");

  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = {
      date,
      muscleId,
      exercise,
      weight,
      reps,
      sets,
    };
    onAdd(workout);
    setDate(today);
    setMuscleId("");
    setExercise("");
    setWeight("");
    setReps("");
    setSets("");
    /* await fetch(`${apiServer}/workouts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workout),
    }); */
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label>Muscle</label>
      <MuscleDropdown value={muscleId} change={setMuscleId} />

      <label>Exercise</label>
      <ExerciseDropdown
        muscleId={Number(muscleId)}
        value={exercise}
        onChange={setExercise}
      />

      <label>Weight</label>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <label>Reps</label>
      <input
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />

      <label>Sets</label>
      <input
        type="number"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
      />

      <button type="submit">Save Workout</button>
    </form>
  );
}

export default WorkoutForm;
