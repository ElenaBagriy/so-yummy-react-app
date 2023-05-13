import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectMainPageRecipes } from "redux/selectors";
import { getRecipesMainPage } from "redux/recipes/recipesOperations";
import { onCapitalise } from "services/onCapitalise";
import { Container } from "reusableComponents/Container/Container";
import { StyledTitle } from "reusableComponents/ManePageTitle/ManePageTitle.styled";
import { ItemCard } from "reusableComponents/ItemCard/ItemCard";
import { Button, Link, CategoriesList, Section, RecipesList, RecipesItem, StyledLink } from "./PreviewCategories.styled";

export const PreviewCategories = () => {
    const dispatch = useDispatch();
    const mainPageRecipes = useSelector(selectMainPageRecipes);
    
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