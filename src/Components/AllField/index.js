import React from "react";
import styled from "styled-components";

const Alltasks = ({ savedInputs, handleCheckboxChange }) => {
  return (
    <>
      {savedInputs.length > 0 ? (
        <>
          {savedInputs.map((input) => (
            <Wrapper key={input.id}>
              <input
                className="larger"
                type="checkbox"
                id={input.id}
                onChange={(e) => handleCheckboxChange(e, input.id)}
                checked={input.completed || false} // Provide a default value for completed
              />
              <p>{input.text}</p>
            </Wrapper>
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
  gap: 20px;
  border: 1px solid black;
  margin-top: 10px;
  border-radius: 5px;
  background-color: aliceblue;

  input.larger{
    width: 30px;
    height: 30px;
  }
`;
