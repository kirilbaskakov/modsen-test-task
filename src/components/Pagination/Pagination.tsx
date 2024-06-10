import React, { Dispatch, SetStateAction } from 'react';
import generatePages from '#utils/generatePages/generatePages';
import * as S from './styled';
import { PAGES } from '#constants/gallery';

const Pagination = ({
  page,
  setPage,
  maxPages,
}: {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  maxPages: number;
}) => {
  const pages = generatePages(page, maxPages, PAGES);
  return (
    <S.Pagination>
      <S.PageArrow selected={page === 1} onClick={() => setPage((p) => p - 1)}>
        {'<'}
      </S.PageArrow>
      {pages.map((p) => (
        <S.Page key={p} selected={p === page} onClick={() => setPage(p)}>
          {p}
        </S.Page>
      ))}
      <S.PageArrow
        selected={page === maxPages}
        onClick={() => setPage((p) => p + 1)}
      >
        {'>'}
      </S.PageArrow>
    </S.Pagination>
  );
};

export default Pagination;
