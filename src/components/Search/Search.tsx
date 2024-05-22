import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Highlighted from "../Highlighted";

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchInput = styled.input`
  margin-top: 4rem;
  width: 50%;
  border-radius: 10px;
  border: none;
  background-color: rgba(57, 57, 57, 0.05);
  padding: 1.25rem 0.5rem;
  font-size: 14px;
`;

const Search = () => {
  return (
    <SearchWrapper>
      <Title>
        Let's Find Some <Highlighted>Art</Highlighted> Here!
      </Title>
      <SearchInput placeholder="Search Art, Artist, Work..." />
    </SearchWrapper>
  );
};

export default Search;
