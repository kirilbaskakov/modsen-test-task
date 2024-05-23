import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Title from "../Title";
import Highlighted from "../Highlighted";
import SearchIcon from "../../assets/search.svg";

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  margin-top: 4rem;
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 10px;
  border: none;
  background-color: rgba(57, 57, 57, 0.05);
  padding: 1.25rem 0.5rem;
  padding-right: 3.5rem;
  font-size: 14px;
`;

const IconWrapper = styled.div`
  position: relative;
  left: -45px;
  z-index: 1;
`;

const Icon = styled.img``;

const Search = ({
  searchText,
  setSearchText,
}: {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <SearchWrapper>
      <Title>
        Let's Find Some <Highlighted>Art</Highlighted> <br />
        Here!
      </Title>
      <InputWrapper>
        <SearchInput
          placeholder="Search Art, Artist, Work..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <IconWrapper>
          <Icon src={SearchIcon} />
        </IconWrapper>
      </InputWrapper>
    </SearchWrapper>
  );
};

export default Search;
