import { MyRecipesList } from "components/MyRecipesList/MyRecipesList";
import { GoToTop } from "reusableComponents/ScrollToTop/ScrollToTop";

const { Main } = require("reusableComponents/Main/Main")

const MyRecipesPage = () => {

    return <Main>
        <MyRecipesList></MyRecipesList>
        <GoToTop/>
    </Main>
};

export default MyRecipesPage;