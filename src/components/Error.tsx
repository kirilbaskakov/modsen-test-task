import React from "react";
import styled from "styled-components";
import ErrorIcon from "../assets/error.svg";

const ErrorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Text = styled.h1`
  color: #e05b4c;
  line-height: 1.5em;
  display: inline;
  vertical-align: middle;
  font-size: 28px;
`;

const Icon = styled.img`
  position: absolute;
  left: -95px;
  width: 70px;
  height: 70px;
  padding-right: 1.5rem;
`;

const ReloadButton = styled.button`
  cursor: pointer;
  border: none;
  font-size: 50px;
  background-color: transparent;
`;
const Error = () => {
  return (
    <ErrorWrapper>
      <TextWrapper>
        <Icon src={ErrorIcon} />
        <Text>
          Something went wrong.
          <br /> Try reloading the page
        </Text>
      </TextWrapper>
      <ReloadButton onClick={() => window.location.reload()}>
        &#x21bb;
      </ReloadButton>
    </ErrorWrapper>
  );
};

export default Error;
