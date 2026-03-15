import WorkoutForm from "./WorkoutForm";
import axios from "axios";

const API = "http://localhost:3001/workouts";

function AddWorkout() {
  const addWorkout = async (workout) => {
    const res = await axios.post(API, workout);
    return res.data;
  };
  const handleAdd = async (workout) => {
    await addWorkout(workout);
    alert("Workout Added");
  };

  return (
    <div>
      <h1>Add Workout</h1>
      <WorkoutForm onAdd={handleAdd} />
    </div>
  );
}

export default AddWorkout;
