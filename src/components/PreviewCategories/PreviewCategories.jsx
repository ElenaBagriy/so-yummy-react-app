import { useEffect, useState } from "react";
import { Container } from "reusableComponents/Container/Container";
import { RecipesAPI } from "services/api/API";
import { PreviewCard } from "./PreviewCard/PreviewCard";
import { onCapitalise } from "services/api/onCapitalise";
import { ItemCard } from "reusableComponents/ItemCard/ItemCard";
import { StyledTitle } from "reusableComponents/ManePageTitle/ManePageTitle.styled";

export const PreviewCategories = () => {
    const [popularCategories, setPopularCategories] = useState([]);
    const [popularRecipes, setPopularRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        async function getPopularCategories() {
            try {
                const results = await RecipesAPI.getRecipesMainPage();
                const recipes = Object.entries(results);
                const categories = Object.keys(results);

                const x = Object.values(results);
                console.log(x);

                if (recipes.length === 0) {
                    return;     ///Прописать ошибку
                }
                setPopularRecipes(recipes);
                setPopularCategories(categories)

            } catch (error) {
                return;  ///Прописать ошибку
            } finally {
                setIsLoading(false);
            }
        }
        getPopularCategories();
      }, []);
    
    return <section>
        <Container>
            {popularCategories && popularCategories.map((category) => {
                return <div>
                    <StyledTitle>{onCapitalise(category)}</StyledTitle>
                    {/* {category[1].map((item) => <ItemCard item={item} />)} */}
                    
                </div>
            })}
            
        </Container>
    </section>
}