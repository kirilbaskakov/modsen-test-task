import { Dispatch, SetStateAction } from "react";
import Title from "#components/Title";
import Highlighted from "#components/Highlighted";
import SearchIcon from "#assets/search.svg";
import SortMenu from "#components/SortMenu/SortMenu";
import ISortType from "#types/ISortType";
import * as S from "./styled";

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
    <S.SearchWrapper>
      <Title>
        Let's Find Some <Highlighted>Art</Highlighted> <br />
        Here!
      </Title>
      <S.InputWrapper>
        <S.SearchInput
          placeholder="Search Art, Artist, Work..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <S.IconWrapper>
          <img src={SearchIcon} />
        </S.IconWrapper>
        <SortMenu sortType={sortType} setSortType={setSortType} />
      </S.InputWrapper>
    </S.SearchWrapper>
  );
};

export default Search;
