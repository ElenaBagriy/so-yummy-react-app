import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMainPageRecipes } from "redux/selectors";
import { getRecipesMainPage } from "redux/recipes/recipesOperations";
import { Container } from "reusableComponents/Container/Container";
import { onCapitalise } from "services/onCapitalise";
import { StyledTitle } from "reusableComponents/ManePageTitle/ManePageTitle.styled";
import { Button, Link, CategoriesList, Section, RecipesList, RecipesItem, StyledLink } from "./PreviewCategories.styled";
import { ItemCard } from "reusableComponents/ItemCard/ItemCard";
import { NavLink } from "react-router-dom";
// import { useMediaQuery } from "@mui/material";

export const PreviewCategories = () => {
    const dispatch = useDispatch();
    const mainPageRecipes = useSelector(selectMainPageRecipes);

    // const [isLoading, setIsLoading] = useState(false);

    // const mobile = useMediaQuery('(max-width: 767px)');
    // const tablet = useMediaQuery('(min-width: 768px)');
    // const desktop = useMediaQuery('(min-width: 1280px)');
    
    useEffect(() => {
        dispatch(getRecipesMainPage());
    }, [dispatch]);
    
    return <Section>
        <Container>
            <CategoriesList>
            {mainPageRecipes && mainPageRecipes.map(({title, data}) => {
                return <li key={title}>
                    <NavLink to={`/categories/${title}`}><StyledTitle isLink="true">{onCapitalise(title)}</StyledTitle></NavLink>
                    
                    <RecipesList>
                        {data.map(item =>
                            <RecipesItem key={item._id}>
                                <ItemCard item={item} />
                            </RecipesItem>)}
                    </RecipesList>
                    <Button>
                        <Link to={`/categories/${title}`}>See all</Link>
                    </Button>
                    </li>
             })}
            </CategoriesList>
            <StyledLink to={`/categories/beef`}>
                Other categories
            </StyledLink>
        </Container>
    </Section>
}