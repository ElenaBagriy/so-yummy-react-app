import {Categories} from "components/Categories/Categories";
import { Main } from "reusableComponents/Main/Main";
import { GoToTop } from "reusableComponents/ScrollToTop/ScrollToTop";

const CategoriesPage = () => {
  return (
    <Main>
      <Categories />
      <GoToTop/>
    </Main>
  );
};

export default CategoriesPage;