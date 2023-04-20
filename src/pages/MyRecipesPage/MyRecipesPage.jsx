import { MyRecipesList } from "components/MyRecipesList/MyRecipesList";
import { GoToTop } from "reusableComponents/ScrollToTop/ScrollToTop";
import { Main } from "reusableComponents/Main/Main";

const MyRecipesPage = () => {

    return <Main>
        <MyRecipesList/>
        <GoToTop/>
    </Main>
};

export default MyRecipesPage;