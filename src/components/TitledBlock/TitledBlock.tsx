import React from 'react';
import * as S from './styled';

const TitledBlock = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}) => {
  return (
    <S.TitledBlockWrapper>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.Title>{title}</S.Title>
      <>{children}</>
    </S.TitledBlockWrapper>
  );
};

export default TitledBlock;
