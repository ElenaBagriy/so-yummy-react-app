import React, { useEffect, useState } from 'react';
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
import { GoToTop } from 'reusableComponents/ScrollToTop/ScrollToTop';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

export default function SearchPage() {
  const [page, setPage] = useState(1);
  const { isRecipes, isPage, isLoading } = useRecipes();

  const [localState, setLocalState] = useState({});
  const [totalPage, setTotalPage] = useState(1);
  const [value, setValue] = useState('');
  const [query, setQuery] = useState('');
  const [searchParams] = useSearchParams();

  const handleChangePage = value => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
    setPage(value);
  };

  useEffect(() => {
    if (searchParams.get('query') || searchParams.get('value')) {
      setValue(searchParams.get('value'));
      setQuery(searchParams.get('query'));
    }
  }, [searchParams]);

  useEffect(() => {
    if (value && query) {
      setLocalState(isRecipes);
      setTotalPage(isPage);
    }
  }, [isRecipes, query, value, isPage]);

  return (
    <Main>
      <Background />
      <Container>
        <Section>
          <MainPageTitle title="Search" />

          <SearchBar
            page={page}
            valueParam={value}
            queryParam={query}
            handleChangePage={handleChangePage}
          />
          {isLoading && <Loader/>}

          {!isLoading && !!localState.recipes?.length && (
            <CommonItemList list={localState.recipes} />
          )}

          {!isLoading && !localState.recipes?.length && <NeedSearching text="Try looking for something else..."/>}

          {!isLoading && (
            <Pagination
              totalPages={totalPage}
              onChange={handleChangePage}
              page={page}
            />
          )}
        </Section>
      </Container>
      <GoToTop />
    </Main>
  );
}
