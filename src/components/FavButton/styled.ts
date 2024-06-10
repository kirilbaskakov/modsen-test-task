import theme from '#theme';
import styled from 'styled-components';

export const FavButtonStyled = styled.button<{ selected?: boolean }>`
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? theme.colors.hightlightedBtn : theme.colors.bgPrimary};
  border-radius: 50%;
  border: none;
  width: 59px;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
