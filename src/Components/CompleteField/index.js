import React, { useState, useEffect } from "react";

const CompletedTaskss = ({ savedInputs, setSavedInputs }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const storedCompletedTasks = JSON.parse(localStorage.getItem('completedTasks') || '[]');
    setCompletedTasks(storedCompletedTasks);
    setSavedInputs([...savedInputs]);
  }, []);

  return (
    <>
      {completedTasks.length > 0 ? (
        <ul>
          {completedTasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      ) : (
        <p>No completed tasks found in local storage.</p>
      )}
    </>
  );
};

export default CompletedTaskss;
