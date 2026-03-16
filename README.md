# Strength Tracker

## Overview

Strength Tracker is a workout tracking web application built with **React** and **Vite**.  
The application allows users to log workouts, track workout history, and visualize training volume.

The app focuses on simple strength tracking by recording exercises, weight, repetitions, and sets.  
Data is stored using a mock REST API powered by **JSON Server**.

---

## Tech Stack

Frontend

- React
- Vite
- React Router

Charts

- Chart.js

Backend (Mock API)

- JSON Server

---

## Features

### Dashboard

The dashboard provides an overview of training activity.

Features:

- Training volume visualization using charts
- Summary of recent workouts
- Visual representation of workout progress

Training volume formula:

Volume = Weight × Reps × Sets

Example:

Bench Press  
80 kg × 8 reps × 3 sets

Volume = 1920

---

### Workout Form

The workout form allows users to log new workouts.

Users can:

- Select workout date
- Choose a muscle group
- Select an exercise related to that muscle
- Enter weight, repetitions, and sets
- Save workout data

Workflow:

Select Muscle  
→ Exercises load automatically for that muscle  
→ Select exercise  
→ Enter weight, reps, sets  
→ Save workout

Example workout record:

```json
{
  "date": "2026-03-18",
  "muscleId": 1,
  "exercise": "Bench Press",
  "weight": 80,
  "reps": 8,
  "sets": 3
}
```

---

### Workout History

The history page displays previously logged workouts.

Features:

- View all logged workouts
- Group workouts by date
- Filter workouts by muscle
- Filter workouts by date
- Edit existing workout entries
- Delete workout entries

Example history view:

March 18  
Bench Press — 80 kg × 8  
Incline Dumbbell Press — 70 kg × 10

March 17  
Squat — 100 kg × 5

---

## Database Structure (db.json)

The application uses JSON Server as a mock backend.

```json
{
  "muscles": [
    { "id": 1, "name": "Chest" },
    { "id": 2, "name": "Back" },
    { "id": 3, "name": "Legs" },
    { "id": 4, "name": "Shoulders" },
    { "id": 5, "name": "Biceps" },
    { "id": 6, "name": "Triceps" }
  ],

  "exercises": [
    { "id": 1, "muscleId": 1, "name": "Bench Press" },
    { "id": 2, "muscleId": 1, "name": "Incline Dumbbell Press" },
    { "id": 3, "muscleId": 2, "name": "Pull Ups" },
    { "id": 4, "muscleId": 2, "name": "Barbell Row" },
    { "id": 5, "muscleId": 3, "name": "Squat" },
    { "id": 6, "muscleId": 3, "name": "Leg Press" },
    { "id": 7, "muscleId": 4, "name": "Overhead Press" },
    { "id": 8, "muscleId": 4, "name": "Lateral Raise" },
    { "id": 9, "muscleId": 5, "name": "Barbell Curl" },
    { "id": 10, "muscleId": 6, "name": "Tricep Pushdown" }
  ],

  "workouts": [
    {
      "id": 1,
      "date": "2026-03-18",
      "muscleId": 1,
      "exercise": "Bench Press",
      "weight": 80,
      "reps": 8,
      "sets": 3
    }
  ]
}
```

---

## API Endpoints

```
GET /muscles
GET /exercises
GET /exercises?muscleId=1

GET /workouts

POST /workouts
PATCH /workouts/:id
DELETE /workouts/:id
```

---

## Running the Project

Install dependencies

```
npm install
```

Start JSON Server

```
npx json-server --watch db.json --port 3001
```

Run React application

```
npm run dev
```

---

## Future Improvements

- Personal record tracker
- Routine planner
- Workout calendar
- Exercise search
- User authentication

---

## Summary

Strength Tracker demonstrates a scalable workout tracking system built with React.  
The project showcases component-based architecture, REST API integration, dynamic dropdown filtering, and workout progress visualization using charts.
