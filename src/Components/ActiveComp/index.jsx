import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const ActiveTask = ({ savedInputs, setSavedInputs }) => {
  const [ActiveTasks, setActiveTasks] = useState([]);

  useEffect(() => {
    const storedActiveTasks = JSON.parse(
      localStorage.getItem("ActiveTask") || "[]"
    );
    setActiveTasks(storedActiveTasks);
    setSavedInputs([...savedInputs]);
  }, []);
  return (
    <>
      {ActiveTasks.length > 0 ? (
        <>
          {ActiveTasks.map((task) => (
            <Wrapper>
                <input
                type="checkbox"
                id={task.id}
                // onChange={(e) => handleCheckboxChange(e, input.id)}
                checked={task.completed || false} // Provide a default value for completed
              />
              <p key={task.id}>{task.text}</p>
            </Wrapper>
          ))}
        </>
      ) : (
        <p>No completed tasks found in local storage.</p>
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
