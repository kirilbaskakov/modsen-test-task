import theme from '#theme';
import styled from 'styled-components';

export const TitledBlockWrapper = styled.div`
  text-align: center;
  padding: 1rem 0;
  margin-top: 4rem;
`;

export const Title = styled.h1`
  font-size: ${theme.fs.large};
  color: ${theme.colors.primary};
  margin: 0;
  line-height: 40px;
  margin-bottom: 2.5rem;
`;

export const Subtitle = styled.h2`
  font-size: ${theme.fs.small};
  color: ${theme.colors.highligtedPrimary};
  margin: 0;
  line-height: 20px;
`;
