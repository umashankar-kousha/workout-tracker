import { useEffect, useState } from "react";

function ExerciseDropdown({ muscleId, value, onChange }) {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (!muscleId) return;

    async function getExercisesByMuscle(muscleId) {
      const res = await fetch(
        `http://localhost:3001/exercises?muscleId=${muscleId}`,
      );

      return res.json();
    }

    getExercisesByMuscle(muscleId).then(setExercises);
  }, [muscleId]);

  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">Select Exercise</option>

      {exercises.map((e) => (
        <option key={e.id} value={e.name}>
          {e.name}
        </option>
      ))}
    </select>
  );
}

export default ExerciseDropdown;
