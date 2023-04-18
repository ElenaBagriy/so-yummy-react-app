
// при запросе на сервер за любимыми рецептами обязательно передавать номер страницы.

import { Background } from "reusableComponents/Background/Background";
import { Container } from "reusableComponents/Container/Container";
import { Card, Description, Image, RecipesItem, RecipesList, Section, Time, Title } from "./Favorite.styled";
import { MainPageTitle } from "reusableComponents/ManePageTitle/ManePageTitle";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteRecipes, selectFavoriteRecipesTotalPages } from "redux/selectors";
import { useEffect, useState } from "react";
import { getRecipesFavorite } from "redux/recipes/recipesOperations";
import { Pagination } from "reusableComponents/Pagination/Pagination";
import { NavLink } from "react-router-dom";

export const Favorite = () => {
    const dispatch = useDispatch();
    const favoriteRecipes = useSelector(selectFavoriteRecipes);
    const totalPages = useSelector(selectFavoriteRecipesTotalPages); 
    
    const [page, setPage] = useState(1);
    
    // const mobile = useMediaQuery('(max-width: 767px)');
    // const tablet = useMediaQuery('(min-width: 768px)');
    // const desktop = useMediaQuery('(min-width: 1280px)');
    
    useEffect(() => {
        dispatch(getRecipesFavorite({page}));
    }, [dispatch, page]);

    const handleChangePage = (event, value) => {
        setPage(value);
    };
    
    return         <>
            <Background/>
            <Container>
                <Section>
                    <MainPageTitle title='Favorites' />
                    
                    {!favoriteRecipes ? <>...Loading</> :
                    <RecipesList>
                        {favoriteRecipes.map((recipe) => {
                            return <RecipesItem key={recipe._id}>
                                {/* <Image> */}
                                    <Image src={recipe.preview} alt={recipe.title} />
                                {/* </Image> */}
                                <div>
                                    <Title>{recipe.title}</Title>
                                    <Description>{recipe.description}</Description>
                                    <Time>{recipe.time} min</Time>
                                    <NavLink>See recipe</NavLink>
                                </div> 
                            </RecipesItem>
                        })}
                        </RecipesList>
                    }
                    {/* <Suspense fallback={<div>...Loading</div>}>
                        <Outlet/>
                    </Suspense> */}
                    <Pagination page={page} totalPages={totalPages} onChange={handleChangePage} />
                    </Section>
            </Container>
        </>
}