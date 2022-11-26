import React from 'react';
import * as S from './styles';

export default function Main({
  background = '#06092b',
}: {
  background: string;
}) {
  return (
    <S.Wrapper background={background}>
      <S.Logo src="/img/logo.svg" alt="Athom Image and Advanced React Writed" />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        TypeScript, ReactJS, NextJS and Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Developer front to computer with code"
      />
    </S.Wrapper>
  );
}
