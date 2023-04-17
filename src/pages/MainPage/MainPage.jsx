import { PreviewCategories } from "components/PreviewCategories/PreviewCategories";
import { СhooseYourBreakfast } from "components/СhooseYourBreakfast/СhooseYourBreakfast";
import { Background } from "reusableComponents/Background/Background";
import { Main } from "reusableComponents/Main/Main";

const MainPage = () => {
    
    return <Main>
        <Background noDots/>
        <СhooseYourBreakfast/>
        <PreviewCategories />
    </Main>
};

export default MainPage;