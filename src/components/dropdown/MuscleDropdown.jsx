import { useEffect, useState } from "react";
import { apiServer } from "../services";

function MuscleDropdown({ value, change }) {
  const [muscles, setMuscles] = useState([]);

  useEffect(() => {
    async function getMuscles() {
      const res = await fetch(`${apiServer}/muscles`);

      return res.json();
    }

    getMuscles().then(setMuscles);
  }, []);

  const handleChange = (e) => {
    change(e.target.value);
  };

  return (
    <select value={value} onChange={handleChange}>
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
