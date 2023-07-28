import React, { useState, useEffect } from "react";
import Alltasks from "./index";

const TaskManager = ({ savedInputs, setSavedInputs }) => {
//   const [savedInputs, setSavedInputs] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  // Load savedInputs and completedTasks from local storage when the component mounts
  useEffect(() => {
    const storedInputs = JSON.parse(localStorage.getItem("userInputs")) || [];
    setSavedInputs(storedInputs);

    const storedCompletedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
    setCompletedTasks(storedCompletedTasks);
  }, []);

  // Function to update the completed status of tasks
  const handleCheckboxChange = (event, id) => {
    const { checked } = event.target;
    const updatedSavedInputs = savedInputs.map((input) =>
      input.id === id ? { ...input, completed: checked } : input
    );

    setSavedInputs(updatedSavedInputs);

    // Filter completed tasks and save them in the completedTasks state
    const completedTasks = updatedSavedInputs.filter((input) => input.completed);
    setCompletedTasks(completedTasks);

    // Save updated savedInputs and completedTasks to local storage
    localStorage.setItem("userInputs", JSON.stringify(updatedSavedInputs));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  };

  return (
    <>
      <Alltasks savedInputs={savedInputs} handleCheckboxChange={handleCheckboxChange} />
    </>
  );
};

export default TaskManager;
