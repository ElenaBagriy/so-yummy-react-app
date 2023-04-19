import { Favorite } from "components/Favorite/Favorite";
import { Main } from "reusableComponents/Main/Main"
import { GoToTop } from "reusableComponents/ScrollToTop/ScrollToTop";

const FavoritePage = () => {
    return <Main>
        <Favorite />
        <GoToTop/>
    </Main>
};

export default FavoritePage;