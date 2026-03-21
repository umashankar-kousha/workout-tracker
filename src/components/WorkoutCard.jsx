import { useState } from "react";
import axios from "axios";
import { apiServer } from "./services";
import { toast } from "react-toastify";

const API = `${apiServer}/workouts`;

function WorkoutCard({ workout, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(workout);

  const updateWorkout = async (id, workout) => {
    await axios.put(`${API}/${id}`, workout);
  };

  const handleUpdate = async () => {
    await updateWorkout(workout.id, form);
    setEditing(false);
    window.location.reload();
  };

  const handleOnDelete = () => {
    toast(
      ({ closeToast }) => (
        <div>
          <p style={{ fontWeight: "bold" }}>Delete this workout?</p>

          <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
            <button
              style={{ background: "red", color: "white" }}
              onClick={() => {
                onDelete(workout.id);

                toast.error("Workout deleted ❌");
                closeToast();
              }}
            >
              Yes
            </button>

            <button onClick={closeToast}>Cancel</button>
          </div>
        </div>
      ),
      {
        autoClose: false,
        closeOnClick: false,
      },
    );
  };

  if (editing) {
    return (
      <div>
        <input
          value={form.exercise}
          onChange={(e) => setForm({ ...form, exercise: e.target.value })}
        />

        <input
          value={form.weight}
          onChange={(e) => setForm({ ...form, weight: e.target.value })}
        />

        <input
          value={form.reps}
          onChange={(e) => setForm({ ...form, reps: e.target.value })}
        />

        <button onClick={handleUpdate}>Save</button>
      </div>
    );
  }

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{workout.exercise}</h3>

      <p>Muscle: {workout.muscle.name}</p>
      <p>Weight: {workout.weight}</p>
      <p>Reps: {workout.reps}</p>
      <p>Sets: {workout.sets}</p>

      <button onClick={() => setEditing(true)}>Edit</button>

      <button onClick={handleOnDelete}>Delete</button>
    </div>
  );
}

export default WorkoutCard;
