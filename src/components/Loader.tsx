import React from "react";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  position: absolute;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <h1>Loading..</h1>
    </LoaderWrapper>
  );
};

export default Loader;
