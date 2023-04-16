//  Добавить лоудеры под разные размеры через useMediaQuery('(max-width: ...px)');
//  Добавить мотивашки
//  Прописать ошибку
//  Добавить нотифай

import { Container } from "reusableComponents/Container/Container";
import { Background } from "reusableComponents/Background/Background";
import { MainPageTitle } from "reusableComponents/ManePageTitle/ManePageTitle";
import Tab from '@mui/material/Tab';
import { Suspense, useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Section, StyledTabs } from "./Categories.styled";
import { Pagination } from "reusableComponents/Pagination/Pagination";
import { RecipesAPI } from '../../services/api/API';
import { CommonItemList } from "reusableComponents/CommonItemList/CommonItemList";

export const Categories = () => {
    const [allCategories, setAllCategories] = useState([]);
    const [category, setCategory] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [categoryRecipes, setCategoryRecipes] = useState([]);
    
    const { categoryName } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (!category) return;
        setIsLoading(true);
        
        async function getRecipeByCategories(data) {
            try {
                const results = await RecipesAPI.getRecipeByCategories(data);
                
                if (results.length === 0) {
                    return;     ///Прописать ошибку
                };

                setCategoryRecipes(results.recipes);
                const pages = Math.round(results.total / results.limit);
                if (pages > 1) {
                    setTotalPages(pages);
                } else {
                    setTotalPages(null);
                };
            } catch (error) {
                return; ///Прописать ошибку
            } finally {
                setIsLoading(false);
            };
        };
        getRecipeByCategories({ category, page });
    }, [category, page]);

    useEffect(() => {
        if (categoryName) {
            setCategory(categoryName);
        };
    }, [categoryName]);

    useEffect(() => {
        if (category) return;
        setIsLoading(true);

        async function getCategories() {
            try {
                const results = await RecipesAPI.getAllCategories();
                
                if (results.length === 0) {
                    return;     ///Прописать ошибку
                }
                const categories = results.map(result => ({ id: result._id, title: result.title.toLowerCase() }))
                    .sort((a, b) => a.title.localeCompare(b.title));
                setAllCategories(categories);
                if (categoryName) {
                    setCategory(categoryName);
                    return;
                };
                setCategory(categories[0].title);
            } catch (error) {
                return;  ///Прописать ошибку
            } finally {
                setIsLoading(false);
            }
        }
        getCategories();
    }, [categoryName, category]);

    
    const handleChange = (event, newValue) => {
        navigate(`/categories/${newValue}`)
        setCategory(newValue);
        if (page === 1) return;
        setPage(1);
  };
    
    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const onRecipeFavoriteChange = (id, favorite) => {
        const changedRecipes = categoryRecipes.map(recipe => {
            if (recipe._id === id) {
                return { ...recipe, favorite };
            }
            return recipe;
        });
        setCategoryRecipes(changedRecipes);
    }
    
    return (
        <Section>
            <Background/>
            <Container>
                <MainPageTitle title='Categories' />
                <StyledTabs
                    component='ul'
                    value={category}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons={false}
                    aria-label="categories list"
                >
                    {allCategories.length !== 0 && allCategories.map(({ id, title }) =>
                        <Tab
                            key={id}
                            label={title}
                            value={title}
                            component='a'
                        />)}
                </StyledTabs>
                {isLoading || categoryRecipes.length === 0 ? <>...Loading</> :
                <CommonItemList list={categoryRecipes} onChange={onRecipeFavoriteChange}></CommonItemList>}
                <Suspense fallback={<div>...Loading</div>}>
                    <Outlet/>
                </Suspense>
                <Pagination totalPages={totalPages} onChange={handleChangePage} page={page} />
            </Container>
        </Section>
  );
};