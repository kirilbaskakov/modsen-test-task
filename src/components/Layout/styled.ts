import theme from "#theme";
import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: ${theme.colors.bgPrimary};
  min-height: 100vh;
  padding: 1rem;
`;

export const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 0;
`;
