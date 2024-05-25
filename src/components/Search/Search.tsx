import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Title from "../Title";
import Highlighted from "../Highlighted";
import SearchIcon from "../../assets/search.svg";
import SortMenu from "../SortMenu/SortMenu";
import ISortType from "../../types/ISortType";

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 4rem;

  @media (min-width: 768px) {
    width: 50%;
  }
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
  position: absolute;
  right: 60px;
  z-index: 1;
`;

const Search = ({
  searchText,
  setSearchText,
  sortType,
  setSortType,
}: {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  sortType: ISortType;
  setSortType: Dispatch<SetStateAction<ISortType>>;
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
          <img src={SearchIcon} />
        </IconWrapper>
        <SortMenu sortType={sortType} setSortType={setSortType} />
      </InputWrapper>
    </SearchWrapper>
  );
};

export default Search;
