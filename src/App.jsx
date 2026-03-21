import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddWorkout from "./components/AddWorkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import "./App.css";
import WorkoutHistory from "./components/WorkoutHistory";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
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
