import React, { useState, useEffect } from "react";
import "./App.css";
import InputField from "./Components/InputField";
import TaskManager from "./Components/AllField/TaskMange";
import CompletedTaskss from "./Components/CompleteField";
import ActiveTask from "./Components/ActiveComp";
import styled from "styled-components";

interface SavedInput {
  id: string;
  text: string;
}

function App() {
  const [savedInputs, setSavedInputs] = useState<SavedInput[]>([]);
  const [Alltask, setAlltask] = useState(true);
  const [Activetast, setActivetask] = useState(false);
  const [Completedtast, setCompletedtask] = useState(false);

  const handleAlltask = () => {
    setAlltask(true);
    setActivetask(false);
    setCompletedtask(false);
  };

  const handleActivetask = () => {
    setAlltask(false);
    setActivetask(true);
    setCompletedtask(false);
  };
  const handleCompletedtask = () => {
    setAlltask(false);
    setActivetask(false);
    setCompletedtask(true);
  };

  const ClearTask = () => {
    localStorage.clear();
    setSavedInputs([]);
  };

  return (
    <div>
      {/* Display Field */}
      <WhatTodoHome>
        <p>What to Do</p>
      </WhatTodoHome>
      {/* Input Field */}
      <InputArea>
        <InputField savedInputs={savedInputs} setSavedInputs={setSavedInputs} />
      </InputArea>
      {/* Action Field */}
      <FunctionalWrapper>
        <TheWrapper>
          <ButtonWrapper>
            <button
              onClick={handleAlltask}
              style={{
                borderRadius: "5px 0px 0px 5px",
                borderRight: "1px solid black",
              }}
            >
              All Task
            </button>
            <button
              onClick={handleActivetask}
              style={{
                borderRight: "1px solid black",
              }}
            >
              Active Task
            </button>
            <button onClick={handleCompletedtask}>Completed Task</button>
            <button
              onClick={ClearTask}
              style={{
                borderRadius: "0px 5px 5px 0px",
                borderLeft: "1px solid black",
              }}
            >
              Clear Task
            </button>
          </ButtonWrapper>
          <div>
            {Alltask ? (
              <>
                {/* <Alltasks savedInputs={savedInputs} /> */}
                <TaskManager
                  savedInputs={savedInputs}
                  setSavedInputs={setSavedInputs}
                />
              </>
            ) : null}

            {Activetast ? (
              <>
                {/* <ActiveTask savedInputs={savedInputs} setSavedInputs={setSavedInputs}/> */}
              </>
            ) : null}

            {Completedtast && (
              <>
                <CompletedTaskss
                  savedInputs={savedInputs}
                  setSavedInputs={setSavedInputs}
                />
              </>
            )}
          </div>
        </TheWrapper>
      </FunctionalWrapper>
    </div>
  );
}

export default App;

const WhatTodoHome = styled.div`
  width: auto;
  height: 150px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 100px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    color: #3498db;
  }
`;

const InputArea = styled.div`
  width: auto;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 300px;
    height: 30px;
    border: 2px solid black;
    border-radius: 4px;
  }
`;

const FunctionalWrapper = styled.div`
  width: auto;
  height: auto;
  padding: 10px;
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  width: auto;
  height: 30px;
  border: 2px solid black;
  border-radius: 5px;

  button {
    height: 100%;
    border: none;
    width: 25%;
  }
`;

const TheWrapper = styled.div`
  width: 500px;
  height: auto;
  padding: 20px;
  padding-bottom: 30px;
  border-radius: 10px;
  background-color: #fae232;
`;
