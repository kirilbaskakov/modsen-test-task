import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FavButton from "../FavButton/FavButton";

interface Props {
  title: string;
  author: string;
  img?: string;
}

const Title = styled.h3`
  margin: 0;
  padding: 0;
  color: #393939;
  font-size: 17px;
  font-weight: 500;
  text-align: start;
  line-height: 1.75em;
`;
const Author = styled.h4`
  margin: 0;
  padding: 0;
  color: #e0a449;
  font-size: 15px;
  text-align: start;
`;

const CardWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #fff;
  padding: 0.75rem 0.5rem;
`;

const CardDescription = ({ title, author, img }: Props) => {
  const navigate = useNavigate();

  return (
    <CardWrapper onClick={() => navigate("/details/1")}>
      {img && <img src={img} width={80} height={80} />}
      <div>
        <Title>{title}</Title>
        <Author>{author}</Author>
      </div>
      <FavButton />
    </CardWrapper>
  );
};

export default CardDescription;
