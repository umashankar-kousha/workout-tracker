import { useEffect, useState } from "react";

function MuscleDropdown({ value, onChange }) {
  const [muscles, setMuscles] = useState([]);

  useEffect(() => {
    async function getMuscles() {
      const res = await fetch("http://localhost:3001/muscles");

      return res.json();
    }

    getMuscles().then(setMuscles);
  }, []);

  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">Select Muscle</option>

      {muscles.map((m) => (
        <option key={m.id} value={m.id}>
          {m.name}
        </option>
      ))}
    </select>
  );
}

export default MuscleDropdown;
