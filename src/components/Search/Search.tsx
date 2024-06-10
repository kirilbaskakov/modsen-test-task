import { Dispatch, FormEventHandler, SetStateAction, useState } from 'react';
import Title from '#components/Title';
import Highlighted from '#components/Highlighted';
import SearchIcon from '#assets/search.svg';
import SortMenu from '#components/SortMenu/SortMenu';
import ISortType from '#types/ISortType';
import * as S from './styled';
import * as Yup from 'yup';

const Search = ({
  setSearchText,
  sortType,
  setSortType,
}: {
  setSearchText: Dispatch<SetStateAction<string>>;
  sortType: ISortType;
  setSortType: Dispatch<SetStateAction<ISortType>>;
}) => {
  const searchSchema = Yup.object().shape({
    query: Yup.string()
      .matches(
        /^[a-zA-Z0-9]*$/,
        'The search query must contain latin letters and numbers.'
      )
      .max(50, 'The search query must be no more than 50 characters'),
  });

  const [error, setError] = useState(null);

  const onChange: FormEventHandler<HTMLInputElement> = async (e) => {
    const { value } = e.target as HTMLInputElement;
    try {
      await searchSchema.validate({ query: value }, { abortEarly: false });
      setError(null);
      setSearchText(value);
    } catch (error: any) {
      setError(error.inner[0].message);
    }
  };

  return (
    <S.SearchWrapper>
      <Title>
        Let's Find Some <Highlighted>Art</Highlighted> <br />
        Here!
      </Title>
      <S.InputWrapper>
        <S.SearchInput
          name="query"
          placeholder="Search Art, Artist, Work..."
          onChange={onChange}
        />
        <S.IconWrapper>
          <img src={SearchIcon} alt="Search icon" />
        </S.IconWrapper>

        <SortMenu sortType={sortType} setSortType={setSortType} />
      </S.InputWrapper>
      <S.Error>{error}</S.Error>
    </S.SearchWrapper>
  );
};

export default Search;
