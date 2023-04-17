import React, { useState, useEffect } from "react";
import { Container } from "reusableComponents/Container/Container";
import { Background } from "reusableComponents/Background/Background";
import { MainPageTitle } from "reusableComponents/ManePageTitle/ManePageTitle";
import ButtonRound from "../../reusableComponents/Button/ButtonRound";
import Input from "../../reusableComponents/Input/Input";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import {
  getRecipesByIngredientsQuery,
  getRecipesByTitleQuery,
} from "redux/recipes/recipesOperations";
import { Pagination } from "reusableComponents/Pagination/Pagination";
import { CommonItemList } from "reusableComponents/CommonItemList/CommonItemList";
import { useRecipes } from "../../components/hooks";
import Select from "../../reusableComponents/Select/Select";

export default function Search() {
  const [search, setSearch] = useState("");
  const [sendSearch, setSendSearch] = useState("");
  const [recipesBy, setRecipesBy] = useState("title");
  const [page, setPage] = useState(1);
  const { isRecipes, isPage } = useRecipes();

  const { searchParam } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchParam) setSearch(searchParam);
  }, [searchParam]);

  useEffect(() => {
    if (sendSearch) {
      if (recipesBy === "title")
        dispatch(getRecipesByTitleQuery({ query: sendSearch, page }));
      else dispatch(getRecipesByIngredientsQuery({ query: sendSearch, page }));
    }
  }, [dispatch, page, sendSearch, recipesBy]);

  const handleChangePage = (_, value) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setPage(value);
  };

  const onSearch = () => {
    if (search && search.length) setSendSearch(search);
  };

  return (
    <>
      <Background />
      <Container>
        <MainPageTitle title="Search" />
        <Select
          label="Title"
          values={["Title", "Ingredients"]}
          onChange={setRecipesBy}
        />
        <Input
          name="search"
          type="text"
          value={search}
          $colorGrey
          onChange={setSearch}
        />
        <ButtonRound type="button" onClick={onSearch}>
          Search
        </ButtonRound>

        {isRecipes && isRecipes.recipes.length && (
          <CommonItemList list={isRecipes.recipes} />
        )}

        <Pagination
          totalPages={isPage}
          onChange={handleChangePage}
          page={page}
        />
      </Container>
    </>
  );
}
