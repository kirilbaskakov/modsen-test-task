import theme from '#theme';
import styled from 'styled-components';

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.25rem;
`;

export const Page = styled.button<{ selected: boolean }>`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  font-size: ${theme.fs.small};
  font-weight: 600;
  background-color: ${(props) =>
    props.selected ? theme.colors.hightlightedSecondary : 'transparent'};
  color: ${(props) => (props.selected ? '#fff' : theme.colors.primary)};
`;

export const PageArrow = styled(Page)`
  margin: 0 0.5rem;

  visibility: ${(props) => (props.selected ? 'hidden' : 'visible')};
`;
