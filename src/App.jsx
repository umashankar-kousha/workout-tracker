import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddWorkout from "./components/AddWorkout";

import Navbar from "./components/Navbar";
import "./App.css";
import WorkoutHistory from "./components/WorkoutHistory";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/add-workout" element={<AddWorkout />} />
        <Route path="/history" element={<WorkoutHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
