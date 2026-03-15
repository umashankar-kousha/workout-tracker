import { useState } from "react";

function WorkoutForm({ onAdd }) {

  const [form,setForm] = useState({
    exercise:"",
    muscle:"",
    weight:"",
    reps:"",
    sets:""
  });

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();

    const workout = {
      ...form,
      weight:Number(form.weight),
      reps:Number(form.reps),
      sets:Number(form.sets),
      date:new Date().toISOString().slice(0,10)
    };

    onAdd(workout);

    setForm({
      exercise:"",
      muscle:"",
      weight:"",
      reps:"",
      sets:""
    });
  };

  return (

    <form onSubmit={handleSubmit} style={{marginTop:"20px"}}>

      <div>
        <input
          name="exercise"
          placeholder="Exercise (Bench Press)"
          value={form.exercise}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          name="muscle"
          placeholder="Muscle Group (Chest)"
          value={form.muscle}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          type="number"
          name="weight"
          placeholder="Weight"
          value={form.weight}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          type="number"
          name="reps"
          placeholder="Reps"
          value={form.reps}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          type="number"
          name="sets"
          placeholder="Sets"
          value={form.sets}
          onChange={handleChange}
        />
      </div>

      <button type="submit">
        Add Workout
      </button>

    </form>

  );
}

export default WorkoutForm;