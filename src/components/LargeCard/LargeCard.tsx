import React from "react";
import CardDescription from "../CardDescription/CardDescription";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  author: string;
  img: string;
}

const CardWrapper = styled.div`
  width: 100%;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
`;

const DescriptionWrapper = styled.div`
  position: relative;
  transform: translateY(-50%);
  padding: 1rem;
`;

const LargeCard = ({ title, author, img }: Props) => {
  const navigate = useNavigate();

  return (
    <CardWrapper>
      <Image src={img} onClick={() => navigate("/details/1")} />
      <DescriptionWrapper>
        <CardDescription title={title} author={author} />
      </DescriptionWrapper>
    </CardWrapper>
  );
};

export default LargeCard;
