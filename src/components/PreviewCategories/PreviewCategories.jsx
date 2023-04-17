import { useEffect, useState } from "react";
import { Container } from "reusableComponents/Container/Container";
import { PreviewCard } from "./PreviewCard/PreviewCard";
import { onCapitalise } from "services/api/onCapitalise";
import { ItemCard } from "reusableComponents/ItemCard/ItemCard";
import { StyledTitle } from "reusableComponents/ManePageTitle/ManePageTitle.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectMainPageRecipes } from "redux/selectors";
import { getRecipesMainPage } from "redux/recipes/recipesOperations";

export const PreviewCategories = () => {
    const dispatch = useDispatch();
    const mainPageRecipes = useSelector(selectMainPageRecipes);
    
    const recipes = Object.entries(mainPageRecipes);
    const categories = Object.keys(mainPageRecipes);

    const x = Object.entries(mainPageRecipes);
    console.log(x);

    const [popularCategories, setPopularCategories] = useState([]);
    const [popularRecipes, setPopularRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        dispatch(getRecipesMainPage());
    }, [dispatch]);
    
    return <section>
        <Container>
            {/* {popularCategories && popularCategories.map((category) => { */}
                {/* return <div> */}
                    {/* <StyledTitle>{onCapitalise(category)}</StyledTitle> */}
                    {/* {category[1].map((item) => <ItemCard item={item} />)} */}
                    
                {/* </div> */}
            {/* })} */}
            
        </Container>
    </section>
}