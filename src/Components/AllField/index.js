import React from "react";
import styled from "styled-components";

const Alltasks = ({ savedInputs }) => {
  
  const handleCheckboxChange = (event, id) => {
    const { checked } = event.target;
    const completedTask = savedInputs.find((input) => input.id === id);

    if (completedTask) {
      completedTask.completed = checked;
      localStorage.setItem("completedTasks", JSON.stringify(savedInputs));
    }
  };

  return (
    <>
      {savedInputs.length > 0 ? (
        <>
          {savedInputs.map((input) => (
            <>
              <Wrapper>
                <input type="checkbox" id={input.id} onChange={(e) => handleCheckboxChange(e, input.id)}></input>
                <p key={input.id}>Text: {input.text}</p>
              </Wrapper>
            </>
          ))}
        </>
      ) : (
        <p>No saved inputs found in local storage.</p>
      )}
    </>
  );
};

export default Alltasks;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
