import { MyRecipesList } from "components/MyRecipesList/MyRecipesList";

const { Main } = require("reusableComponents/Main/Main")

const MyRecipesPage = () => {

    return <Main>
        <MyRecipesList></MyRecipesList>
    </Main>
};

export default MyRecipesPage;