import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddWorkout from "./components/AddWorkout";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/add-workout" element={<AddWorkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
