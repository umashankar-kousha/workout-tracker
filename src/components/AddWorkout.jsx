import WorkoutForm from "./WorkoutForm";
import { useState } from "react";
import axios from "axios";
import { apiServer } from "./services";
import { toast } from "react-toastify";


const API = `${apiServer}/workouts`;

function AddWorkout() {
  const addWorkout = async (workout) => {
    const res = await axios.post(API, workout);
    return res.data;
  };
  const handleAdd = async (workout) => {
    await addWorkout(workout);
    toast.success("Workout added 💪");
  };

  return (
    <div>
      <h1>Add Workout</h1>
      <WorkoutForm onAdd={handleAdd} />
    </div>
  );
}

export default AddWorkout;
