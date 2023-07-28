import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const ActiveTask = ({ savedInputs, setSavedInputs, completedTasks }) => {
  const [activeTasks, setActiveTasks] = useState([]);

  useEffect(() => {
    const storedActiveTasks = JSON.parse(localStorage.getItem("ActiveTask") || "[]");
    setActiveTasks(storedActiveTasks);
  }, []);

  const handleCheckboxChange = (event, id) => {
    const { checked } = event.target;

    // Update the activeTasks state and remove from completedTasks when a task is checked/unchecked in ActiveTask
    const updatedActiveTasks = activeTasks.filter((task) => task.id !== id);
    if (!checked) {
      const taskToAdd = savedInputs.find((input) => input.id === id);
      if (taskToAdd) {
        updatedActiveTasks.push(taskToAdd);
      }
    }
    setActiveTasks(updatedActiveTasks);

    // Update the userInput state when a task is checked/unchecked in ActiveTask
    const updatedSavedInputs = savedInputs.map((input) =>
      input.id === id ? { ...input, completed: checked } : input
    );
    setSavedInputs(updatedSavedInputs);
    localStorage.setItem("userInputs", JSON.stringify(updatedSavedInputs));

    // Update the completedTasks state and LocalStorage when a task is checked/unchecked in ActiveTask
    const updatedCompletedTasks = completedTasks.filter((task) => task.id !== id);
    if (checked) {
      const taskToAdd = savedInputs.find((input) => input.id === id);
      if (taskToAdd) {
        updatedCompletedTasks.push(taskToAdd);
      }
    }
    localStorage.setItem("completedTasks", JSON.stringify(updatedCompletedTasks));
  };

  return (
    <>
      {activeTasks.length > 0 ? (
        <>
          {activeTasks.map((task) => (
            <Wrapper key={task.id}>
              <input
                type="checkbox"
                id={task.id}
                onChange={(e) => handleCheckboxChange(e, task.id)}
                checked={completedTasks.some((completedTask) => completedTask.id === task.id)}
              />
              <p>{task.text}</p>
            </Wrapper>
          ))}
        </>
      ) : (
        <p>No active tasks found in local storage.</p>
      )}
    </>
  );
};

export default ActiveTask;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
