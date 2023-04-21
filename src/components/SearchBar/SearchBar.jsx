import React, { useEffect, useState } from "react";
import Select from "../../reusableComponents/Select/Select";
import { SearchForm } from "components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getRecipesByIngredientsQuery,
  getRecipesByTitleQuery,
} from "redux/recipes/recipesOperations";
import { Wrapper, SelectBar, SelectText } from "./SearchBar.styled";

export default function SearchBar({
  page,
  valueParam,
  queryParam,
  handleChangePage,
}) {
  const [sendSearch, setSendSearch] = useState(valueParam || "");
  const [recipesBy, setRecipesBy] = useState(queryParam || "title");
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const isTablet = window.innerWidth <= 768;

  useEffect(() => {
    valueParam && setSendSearch(valueParam);
    queryParam && setRecipesBy(queryParam);
  }, [queryParam, valueParam]);

  useEffect(() => {
    if (sendSearch) {
      if (recipesBy === "title")
        dispatch(
          getRecipesByTitleQuery({
            query: sendSearch,
            page,
            limit: isTablet ? 6 : 12,
          })
        );
      else
        dispatch(
          getRecipesByIngredientsQuery({
            query: sendSearch,
            page,
            limit: isTablet ? 6 : 12,
          })
        );
    }
  }, [dispatch, page, sendSearch, recipesBy, isTablet]);

  const onSearchFormSubmit = (inputQuery) => {
    setSearchParams({ query: recipesBy, value: inputQuery });
    setSendSearch(inputQuery);
    handleChangePage(1);
  };

  const changeSelect = (type) => {
    setRecipesBy(type);
    setSearchParams({ query: type, value: sendSearch });
    handleChangePage(1);
  };
  return (
    <Wrapper>
      <SearchForm
        value={sendSearch}
        onSearchFormSubmit={onSearchFormSubmit}
        color="green"
      />

      <SelectBar>
        <SelectText>Search by:</SelectText>
        <Select
          label={recipesBy}
          values={["title", "ingredients"]}
          onChange={changeSelect}
        />
      </SelectBar>
    </Wrapper>
  );
}
