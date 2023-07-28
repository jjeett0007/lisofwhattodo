import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

const InputField = ({ savedInputs, setSavedInputs }) => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSaveInput = () => {
    if (inputText.trim() !== '') {
      const newInput = {
        id: uuidv4(), // Generate a random ID
        text: inputText.trim(),
      };

      setSavedInputs([...savedInputs, newInput]);
      setInputText('');

      // Save all inputs to local storage
      localStorage.setItem('userInputs', JSON.stringify([...savedInputs, newInput]));
      localStorage.setItem('ActiveTask', JSON.stringify([...savedInputs, newInput]));
    }
  };

  return (
    <>
      <Wrapper>
        <InputArea type="text" value={inputText} onChange={handleInputChange} />
        <button onClick={handleSaveInput}>Add</button>
        {/* {savedInputs.length > 0 ? (
          <ul>
            {savedInputs.map((input) => (
              <li key={input.id}>{input.text}</li>
            ))}
          </ul>
        ) : (
          <p>No saved inputs yet.</p>
        )} */}
      </Wrapper>
    </>
  );
};
export default InputField;

const Wrapper = styled.div``;
const InputArea = styled.input``;
