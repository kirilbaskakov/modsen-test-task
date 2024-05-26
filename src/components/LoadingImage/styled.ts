import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  aspect-ratio: 1;
  position: relative;
  background-color: rgba(57, 57, 57, 0.05);
`;

export const Image = styled.img<{ loading: boolean }>`
  display: ${(props) => (props.loading ? "none" : "block")};
  aspect-ratio: 1;
  width: 100%;
`;
