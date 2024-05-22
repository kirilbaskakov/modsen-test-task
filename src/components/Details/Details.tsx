import React from "react";
import styled from "styled-components";
import FavButton from "../FavButton/FavButton";

const DetailsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: 5rem;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  height: 50vh;
`;

const FavButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.75rem;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #393939;
  margin: 0;
  font-weight: 400;
`;

const Author = styled.h2`
  color: #e0a449;
  font-size: 24px;
  margin: 0;
  margin-top: 1.5rem;
`;

const Year = styled.span`
  color: #393939;
  font-size: 16px;
  font-weight: 700;
  line-height: 2.5em;
`;

const OverviewWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const OverviewList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin-top: 2rem;
`;

const OverviewItem = styled.li`
  margin-top: 1rem;
  font-size: 16px;
`;

const Hightlighted = styled.span`
  color: #e0a449;
`;

const Details = () => {
  return (
    <DetailsWrapper>
      <ImageWrapper>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYjgP0Uoes2hbUVqWFPK4LFASUBRyhCBqJw&s" />
        <FavButtonWrapper>
          <FavButton />
        </FavButtonWrapper>
      </ImageWrapper>
      <div>
        <Title>Charles V, bust length</Title>
        <Author>Giovanni Britto</Author>
        <Year>1535-45</Year>
        <OverviewWrapper>
          <Title>Overview</Title>
          <OverviewList>
            <OverviewItem>
              <Hightlighted>Artist nationality:</Hightlighted> German
            </OverviewItem>
            <OverviewItem>
              <Hightlighted>Dimensions Sheet:</Hightlighted> German
            </OverviewItem>
            <OverviewItem>
              <Hightlighted>Credit Line:</Hightlighted> German
            </OverviewItem>
            <OverviewItem>
              <Hightlighted>Repository:</Hightlighted> German
            </OverviewItem>
          </OverviewList>
        </OverviewWrapper>
      </div>
    </DetailsWrapper>
  );
};

export default Details;
