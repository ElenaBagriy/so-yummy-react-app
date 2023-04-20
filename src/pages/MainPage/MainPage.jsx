import { PreviewCategories } from "components/PreviewCategories/PreviewCategories";
import { СhooseYourBreakfast } from "components/СhooseYourBreakfast/СhooseYourBreakfast";
import { Background } from "reusableComponents/Background/Background";
import { Main } from "reusableComponents/Main/Main";
import { GoToTop } from "reusableComponents/ScrollToTop/ScrollToTop";

const MainPage = () => {

    return <Main>
        <Background noDots/>
        <СhooseYourBreakfast/>
        <PreviewCategories />
        <GoToTop/>
    </Main>
};

export default MainPage;