import theme from "#theme";
import styled from "styled-components";

export const CardWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${theme.colors.bgSecondary};
  padding: 1rem;
  min-width: 0;
  min-height: 110px;
`;

export const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  flex: 0 0 auto;
`;

export const Text = styled.div`
  flex: 1 0 0;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  overflow: hidden;
  min-width: 0;
`;

export const Title = styled.h3`
  margin: 0;
  padding: 0;
  width: 100%;
  color: ${theme.colors.primary};
  font-size: ${theme.fs.small};
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Author = styled.span`
  color: ${theme.colors.highligtedPrimary};
  font-size: ${theme.fs.smaller};
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;
`;

export const Domain = styled.span`
  margin-top: auto;
  justify-self: flex-end;
  font-size: ${theme.fs.smaller};
  font-weight: 700;
  color: ${theme.colors.primary};
`;

export const FavWrapper = styled.div`
  flex: 0 0 auto;
`;
