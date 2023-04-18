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
import { Button, Item, Link, CategoriesList, Section } from "./PreviewCategories.styled";

export const PreviewCategories = () => {
    const dispatch = useDispatch();
    const mainPageRecipes = useSelector(selectMainPageRecipes);

    // const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        dispatch(getRecipesMainPage());
    }, [dispatch]);
    
    return <Section>
        <Container>
            <CategoriesList>
            {mainPageRecipes && mainPageRecipes.map(({title, data}) => {
                return <Item key={title}>
                    <StyledTitle >{onCapitalise(title)}</StyledTitle>
                    
                    <CommonItemList list={data} />
                    <Button>
                        <Link to={`/categories/${title}`}>See all</Link>
                    </Button>
                    </Item>
             })}
            </CategoriesList>
        </Container>
    </Section>
}