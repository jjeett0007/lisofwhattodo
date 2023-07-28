// import React, { useState } from "react";
// import styled from "styled-components";

// const Alltasks = ({ savedInputs }) => {
//   // const handleCheckboxChange = (event, id) => {
//   //   const { checked } = event.target;
//   //   const completedTask = savedInputs.find((input) => input.id === id);

//   //   if (completedTask) {
//   //     completedTask.completed = checked;
//   //     localStorage.setItem("completedTasks", JSON.stringify(savedInputs));
//   //   }
//   // };

//   const handleCheckboxChange = (event, id) => {
//     const { checked } = event.target;
    
//     // Create a new array with the updated completed state
//     const updatedInputs = savedInputs.map((input) =>
//       input.id === id ? { ...input, completed: checked } : input
//     );

//     // Update the state with the new array
//     localStorage.setItem("completedTasks", JSON.stringify(updatedInputs));
//   };

//   return (
//     <>
//       {savedInputs.length > 0 ? (
//         <>
//           {savedInputs.map((input) => (
//             <>
//               <Wrapper>
//                 <input
//                   type="checkbox"
//                   id={input.id}
//                   onChange={(e) => handleCheckboxChange(e, input.id)}
//                 ></input>
//                 <p key={input.id}>Text: {input.text}</p>
//               </Wrapper>
//             </>
//           ))}
//         </>
//       ) : (
//         <p>No saved inputs found in local storage.</p>
//       )}
//     </>
//   );
// };

// export default Alltasks;

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;


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
                type="checkbox"
                id={input.id}
                onChange={(e) => handleCheckboxChange(e, input.id)}
                checked={input.completed || false} // Provide a default value for completed
              />
              <p>Text: {input.text}</p>
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
  justify-content: center;
`;
