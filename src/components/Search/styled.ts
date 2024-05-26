import theme from "#theme";
import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 4rem;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 10px;
  border: none;
  background-color: ${theme.colors.bgLight};
  padding: 1.25rem 0.5rem;
  padding-right: 3.5rem;
  font-size: ${theme.fs.smaller};
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 60px;
  z-index: 1;
`;
