import React, { MouseEventHandler } from 'react';
import Bookmark from '#assets/bookmark-orange.svg';
import useInFavorite from '#hooks/useInFavorite';
import * as S from './styled';

const FavButton = ({ id }: { id: number }) => {
  const [inFavorite, switchInFavorite] = useInFavorite(id);

  const onClick: MouseEventHandler = (e) => {
    e.stopPropagation();
    switchInFavorite();
  };

  return (
    <S.FavButtonStyled onClick={onClick} selected={inFavorite}>
      <img src={Bookmark} />
    </S.FavButtonStyled>
  );
};

export default FavButton;
