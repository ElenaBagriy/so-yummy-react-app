import React, { useState } from 'react';
import { Container } from 'reusableComponents/Container/Container';
import { Background } from 'reusableComponents/Background/Background';
import { MainPageTitle } from 'reusableComponents/ManePageTitle/ManePageTitle';

import { Pagination } from 'reusableComponents/Pagination/Pagination';
import { CommonItemList } from 'reusableComponents/CommonItemList/CommonItemList';
import { useRecipes } from '../../components/hooks';

import { Main } from 'reusableComponents/Main/Main';
import { Section } from './SearchPage.styled';
import SearchBar from 'components/SearchBar/SearchBar';
import NeedSearching from 'components/NeedSearching/NeedSearching';

export default function SearchPage() {
  const [page, setPage] = useState(1);
  const { isRecipes, isPage, isLoading } = useRecipes();

  const handleChangePage = (value) => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    })
    setPage(value);
  };

  return (
    <Main>
      <Background />
      <Container>
        <Section>
          <MainPageTitle title="Search" />

          <SearchBar page={page} handleChangePage={handleChangePage} />
          {isLoading && <>...Loading</>}

          {!isLoading && !!isRecipes.recipes?.length && (
            <CommonItemList list={isRecipes.recipes} />
          )}

          {!isLoading && !isRecipes.recipes?.length && <NeedSearching />}

          <Pagination
            totalPages={isPage}
            onChange={handleChangePage}
            page={page}
          />
        </Section>
      </Container>
    </Main>
  );
}
