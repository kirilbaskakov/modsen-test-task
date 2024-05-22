import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const TitledBlockWrapper = styled.div`
  text-align: center;
  padding: 1rem 0;
  margin-top: 4rem;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #393939;
  margin: 0;
  line-height: 40px;
  margin-bottom: 2.5rem;
`;

const Subtitle = styled.h2`
  font-size: 16px;
  color: #e0a449;
  margin: 0;
  line-height: 20px;
`;

const TitledBlock = ({ title, subtitle, children }: Props) => {
  return (
    <TitledBlockWrapper>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      <>{children}</>
    </TitledBlockWrapper>
  );
};

export default TitledBlock;
