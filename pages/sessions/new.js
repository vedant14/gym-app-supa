import React, { useState } from "react";
import ApplicationLayout from "@/components/application-layout";

export default function NewSession() {
  const [formData, setFormData] = useState([]);
  console.log("Ved", formData);

  const handleAddExercise = (value) => {
    if (value.trim() !== "") {
      const newExercise = {
        exerciseName: value,
        exerciseSets: [],
      };
      setFormData([...formData, newExercise]);
    }
  };
  function handleAddSet(exerciseIndex, setIndex, newSet) {
    const updatedFormData = [...formData];
    const selectedExercise = updatedFormData[exerciseIndex];
    if (setIndex !== undefined && setIndex !== null) {
      // If setIndex is provided, update the existing set
      selectedExercise.exerciseSets[setIndex] = newSet;
    } else {
      // Otherwise, add a new set
      selectedExercise.exerciseSets.push(newSet);
    }
    setFormData(updatedFormData);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  function ExerciseAddForm() {
    const [newExerciseName, setNewExerciseName] = useState("");
    return (
      <div className="mt-2">
        <input
          type="text"
          name="exerciseName"
          id="exerciseName"
          value={newExerciseName}
          onChange={(e) => setNewExerciseName(e.target.value)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Exercise Name"
        />
        <button
          type="button"
          onClick={() => handleAddExercise(newExerciseName)}
          className="mt-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Exercise
        </button>
      </div>
    );
  }

  function SetAddForm({ exerciseIndex, setIndex, setData }) {
    const defaultSetData = { count: 0, weight: 0, units: "Kg" };
    const [newSet, setNewSet] = useState(setData || defaultSetData);

    function handleSetChange(key, value) {
      setNewSet({ ...newSet, [key]: value });
    }

    return (
      <div className="mt-2 flex space-x-2">
        <input
          type="number"
          name="count"
          id="count"
          value={newSet.count}
          onChange={(e) => handleSetChange("count", e.target.value)}
          className="block w-16 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Count"
        />
        <input
          type="number"
          name="weight"
          id="weight"
          value={newSet.weight}
          onChange={(e) => handleSetChange("weight", e.target.value)}
          className="block w-16 mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Weight"
        />
        <input
          type="text"
          name="units"
          id="units"
          value={newSet.units}
          onChange={(e) => handleSetChange("units", e.target.value)}
          className="block w-16 mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Units"
        />
        <button
          type="button"
          onClick={() => {
            handleAddSet(exerciseIndex, setIndex, newSet); // Pass setIndex to identify which set to edit
          }}
          className="mt-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {setData ? "Update" : "Add"} Set
        </button>
      </div>
    );
  }

  return (
    <ApplicationLayout title="New Session">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Exercises
            </h2>
            {formData.map((exercise, exerciseIndex) => (
              <div key={exerciseIndex}>
                <div>
                  {exercise.exerciseName} {exerciseIndex}
                </div>
                Set count: {exercise.exerciseSets.length}
                {exercise.exerciseSets.map((setData, setIndex) => (
                  <SetAddForm
                    key={setIndex}
                    setIndex={setIndex}
                    exerciseIndex={exerciseIndex}
                    setData={setData}
                  />
                ))}
                <SetAddForm exerciseIndex={exerciseIndex} />
              </div>
            ))}
            <ExerciseAddForm />
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </ApplicationLayout>
  );
}
