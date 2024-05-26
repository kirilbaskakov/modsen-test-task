import theme from "#theme";
import styled from "styled-components";

export const DetailsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1280px) {
    width: 45%;
  }
`;

export const FavButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.75rem;
`;

export const Title = styled.h1`
  font-size: ${theme.fs.large};
  color: ${theme.colors.primary};
  margin: 0;
  font-weight: 400;
`;

export const Author = styled.h2`
  color: ${theme.colors.highligtedPrimary};
  font-size: ${theme.fs.medium};
  margin: 0;
  margin-top: 1.5rem;
`;

export const Year = styled.span`
  color: ${theme.colors.primary};
  font-size: ${theme.fs.small};
  font-weight: 700;
  line-height: 2.5em;
`;

export const OverviewWrapper = styled.div`
  margin-top: 2rem;

  @media (min-width: 768px) {
    margin-top: 0;
    position: absolute;
    bottom: 0;
  }
`;

export const OverviewList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin-top: 2rem;
`;

export const OverviewItem = styled.li`
  margin-top: 1rem;
  font-size: ${theme.fs.small};
`;

export const Hightlighted = styled.span`
  color: ${theme.colors.highligtedPrimary};
`;
