import { useEffect } from "react";
import { Container } from "reusableComponents/Container/Container";
// import { PreviewCard } from "./PreviewCard/PreviewCard";
import { onCapitalise } from "services/api/onCapitalise";
// import { ItemCard } from "reusableComponents/ItemCard/ItemCard";
import { StyledTitle } from "reusableComponents/ManePageTitle/ManePageTitle.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectMainPageRecipes } from "redux/selectors";
import { getRecipesMainPage } from "redux/recipes/recipesOperations";
import { CommonItemList } from "reusableComponents/CommonItemList/CommonItemList";

// const find = [
//     { title: breakfast,
//       data: [{}, {}, {}] 
//     },
//     { title: dessert,
//       data: [{}, {}, {}] 
//     },
// ];

export const PreviewCategories = () => {
    const dispatch = useDispatch();
    const mainPageRecipes = useSelector(selectMainPageRecipes);

    // const [popularCategories, setPopularCategories] = useState([]);
    // const [popularRecipes, setPopularRecipes] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        dispatch(getRecipesMainPage());
    }, [dispatch]);
    
    return <section>
        <Container>
            {mainPageRecipes && mainPageRecipes.map(({title, data}) => {
                return <div key={title}>
                    <StyledTitle >{onCapitalise(title)}</StyledTitle>
                    <CommonItemList list={data} />
                </div>
             })}
            
        </Container>
    </section>
}