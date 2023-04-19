import { Background } from "reusableComponents/Background/Background";
import { Container } from "reusableComponents/Container/Container";
import { Description, Image, RecipesItem, RecipesList, Section, Wrapper, Time, Title, BottomWrapper, Link, DeleteButton, DeleteIcon, TextWrapper } from "./Favorite.styled";
import { MainPageTitle } from "reusableComponents/ManePageTitle/ManePageTitle";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteRecipes, selectFavoriteRecipesTotalPages } from "redux/selectors";
import { useEffect, useState } from "react";
import { getRecipesFavorite } from "redux/recipes/recipesOperations";
import { Pagination } from "reusableComponents/Pagination/Pagination";
import timeConvert from "services/api/timeConverter";
import { Tooltip } from "@mui/material";


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

    const onDelete = (id) => {
        console.log(id);
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
                                    <Image src={recipe.preview} alt={recipe.title} />
                                <Wrapper>
                                    <TextWrapper>
                                        <Title>{recipe.title}</Title>
                                        <Description>{recipe.description}</Description>
                                    </TextWrapper>
                                    <BottomWrapper>
                                        <Time>{timeConvert(recipe.time)}</Time>
                                        <Link to={`/recipe/${recipe._id}`}>
                                            See recipe
                                        </Link>
                                    </BottomWrapper>
                                </Wrapper>
                                <Tooltip title="Delete" placement="bottom-start">
                                    <DeleteButton id={recipe._id} onClick={() => onDelete(recipe._id)}>
                                        <DeleteIcon/>
                                    </DeleteButton>
                                </Tooltip>
                            </RecipesItem>
                        })}
                        </RecipesList>
                    }
                    <Pagination page={page} totalPages={totalPages} onChange={handleChangePage} />
                    </Section>
            </Container>
        </>
}