import theme from "#theme";
import styled from "styled-components";

export const ErrorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Text = styled.h1`
  color: ${theme.colors.danger};
  line-height: 1.5em;
  display: inline;
  vertical-align: middle;
  font-size: ${theme.fs.medium};
`;

export const Icon = styled.img`
  position: absolute;
  left: -95px;
  width: 70px;
  height: 70px;
  padding-right: 1.5rem;
`;

export const ReloadButton = styled.button`
  cursor: pointer;
  border: none;
  font-size: 50px;
  background-color: transparent;
`;
