//  Добавить лоудеры под разные размеры через useMediaQuery('(max-width: ...px)');
//  Добавить мотивашки
//  Прописать ошибку
//  Добавить нотифай

import { Container } from 'reusableComponents/Container/Container';
import { Background } from 'reusableComponents/Background/Background';
import { MainPageTitle } from 'reusableComponents/ManePageTitle/ManePageTitle';
import Tab from '@mui/material/Tab';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Section, StyledTabs } from './Categories.styled';
import { Pagination } from 'reusableComponents/Pagination/Pagination';
import { RecipesAPI } from '../../services/api/API';
import { CommonItemList } from 'reusableComponents/CommonItemList/CommonItemList';
import { onCapitalise } from 'services/api/onCapitalise';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from 'redux/recipes/recipesOperations';
import { selectCategoryList } from 'redux/selectors';

export const Categories = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const allCategories = useSelector(selectCategoryList);

  const [category, setCategory] = useState(categoryName);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [categoryRecipes, setCategoryRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categoryName) return;
    setCategory(allCategories[0].title);
  }, [allCategories, categoryName]);

  useEffect(() => {
    if (!category) return;

    async function getRecipeByCategories(data) {
      try {
        setIsLoading(true);
        const results = await RecipesAPI.getRecipeByCategories(data);
        if (results.length === 0) {
          return; ///Прописать ошибку
        }

        setCategoryRecipes(results.recipes);
        const pages = Math.round(results.total / results.limit);
        if (pages > 1) {
          setTotalPages(pages);
        } else {
          setTotalPages(null);
        }
      } catch (error) {
        return; ///Прописать ошибку
      } finally {
        setIsLoading(false);
      }
    }
    const normalisedQuery = onCapitalise(category);
    getRecipeByCategories({ normalisedQuery, page });
  }, [category, page]);

  const handleChange = (_, newValue) => {
    navigate(`/categories/${newValue}`);
    setCategory(newValue);
    if (page === 1) return;
    setPage(1);
  };

  const handleChangePage = (_, value) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setPage(value);
  };

  return (
    <>
      <Background />
      <Container>
        <Section>
          <MainPageTitle title="Categories" />
          <StyledTabs
            component="ul"
            value={category}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="categories list"
          >
            {allCategories.length !== 0 &&
              allCategories.map(({ id, title }) => (
                <Tab key={id} label={title} value={title} component="a" />
              ))}
          </StyledTabs>
          {isLoading || categoryRecipes.length === 0 ? (
            <>...Loading</>
          ) : (
            <CommonItemList list={categoryRecipes}></CommonItemList>
          )}
          <Suspense fallback={<div>...Loading</div>}>
            <Outlet />
          </Suspense>
          <Pagination
            page={page}
            totalPages={totalPages}
            onChange={handleChangePage}
          />
        </Section>
      </Container>
    </>
  );
};
