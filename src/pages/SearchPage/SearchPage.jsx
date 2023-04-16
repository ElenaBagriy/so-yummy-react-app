import React from 'react';
import { Container } from 'reusableComponents/Container/Container';
import { Background } from 'reusableComponents/Background/Background';
import { MainPageTitle } from 'reusableComponents/ManePageTitle/ManePageTitle';
import ButtonRound from '../../reusableComponents/Button/ButtonRound';
import Input from '../../reusableComponents/Input/Input';
import { useState } from 'react';
import { Main } from 'reusableComponents/Main/Main';

export default function SearchPage() {
  const [search, setSearch] = useState(' ');
  return (
    <Main>
      <Background />
      <Container>
        <MainPageTitle title="Search" />
        <ButtonRound customStyle="round" type="button">
          Search
        </ButtonRound>
        <Input
          name="search"
          type="text"
          value={search}
          $grey
          onChange={setSearch}
        />
      </Container>
    </Main>
  );
}
