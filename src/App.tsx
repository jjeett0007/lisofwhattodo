import React, { useState, useEffect } from "react";
import "./App.css";
import InputField from "./Components/InputField";
import Alltasks from "./Components/AllField";
import TaskManager from "./Components/AllField/TaskMange";
import CompletedTaskss from "./Components/CompleteField";

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
    <div className="App">
      {/* Display Field */}
      <div>
        <p>What to Do</p>
      </div>
      {/* Input Field */}
      <div>
        <InputField savedInputs={savedInputs} setSavedInputs={setSavedInputs} />
      </div>
      {/* Action Field */}
      <div>
        <div>
          <button onClick={handleAlltask}>All Task</button>
          <button onClick={handleActivetask}>Active Task</button>
          <button onClick={handleCompletedtask}>Completed Task</button>
          <button onClick={ClearTask}>Clear Task</button>
        </div>
        <div>
          {Alltask ? (
            <>
              {/* <Alltasks savedInputs={savedInputs} /> */}
              <TaskManager savedInputs={savedInputs} setSavedInputs={setSavedInputs}/>
            </>
          ) : null}
          
          {Activetast ? (
            <>
              <p>hello world</p>
            </>
          ) : null}

          {Completedtast && (
            <>
              <CompletedTaskss savedInputs={savedInputs} setSavedInputs={setSavedInputs} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
