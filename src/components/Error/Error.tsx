import React from 'react';
import ErrorIcon from '#assets/error.svg';
import * as S from './styled';

const Error = () => {
  return (
    <S.ErrorWrapper>
      <S.TextWrapper>
        <S.Icon src={ErrorIcon} />
        <S.Text>
          Something went wrong.
          <br /> Try reloading the page
        </S.Text>
      </S.TextWrapper>
      <S.ReloadButton onClick={() => window.location.reload()}>
        &#x21bb;
      </S.ReloadButton>
    </S.ErrorWrapper>
  );
};

export default Error;
