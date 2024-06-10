import theme from '#theme';
import styled from 'styled-components';
import Placeholder from '#assets/placeholder.svg';

export const Wrapper = styled.div<{ loading: boolean }>`
  width: 100%;
  aspect-ratio: 1;
  position: relative;
  background-color: ${theme.colors.bgLight};
  background-repeat: no-repeat;
  background-image: url(${Placeholder});
  background-position: center;
  border: 1px solid
    ${(props) =>
      props.loading ? theme.colors.highligtedPrimary : 'transparent'};
`;

export const Image = styled.img<{ loading: boolean }>`
  display: ${(props) => (props.loading ? 'none' : 'block')};
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;
