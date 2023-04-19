import React, { useEffect, useState } from 'react';
import Select from '../../reusableComponents/Select/Select';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  getRecipesByIngredientsQuery,
  getRecipesByTitleQuery,
} from 'redux/recipes/recipesOperations';

export default function SearchBar({ page }) {
  const [sendSearch, setSendSearch] = useState('');
  const [recipesBy, setRecipesBy] = useState('Title');
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchParams.get('query') && searchParams.get('value')) {
        setSendSearch(searchParams.get('value'))
        setRecipesBy(searchParams.get('query'))
    };
  }, [searchParams]);

  useEffect(() => {
    if (sendSearch) {
      if (recipesBy.toLowerCase() === 'title')
        dispatch(getRecipesByTitleQuery({ query: sendSearch, page }));
      else dispatch(getRecipesByIngredientsQuery({ query: sendSearch, page }));
    }
  }, [dispatch, page, sendSearch, recipesBy]);

  const onSearchFormSubmit = inputQuery => {
    setSearchParams({query: inputQuery})
    setSendSearch(inputQuery);
  };
  return (
    <>
      <SearchForm value={sendSearch} onSearchFormSubmit={onSearchFormSubmit} />

      <Select
        label={recipesBy}
        values={['Title', 'Ingredients']}
        onChange={setRecipesBy}
      />
    </>
  );
}
