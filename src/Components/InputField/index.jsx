import React from "react";
import styled from "styled-components";

const InputField = () => {
  return (
    <>
      <Wrapper>
        <InputArea/>
      </Wrapper>
    </>
  );
};
export default InputField;

const Wrapper = styled.div``;
const InputArea = styled.input``;