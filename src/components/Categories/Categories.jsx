<<<<<<< Updated upstream
=======
// import { useMediaQuery } from '@mui/material';
// import Loader from '../../reusableComponents/ContentLoader/CategoriesLoader';
// import DishCard from 'reusableComponents/DishCard/DishCard';
// import { getAllCategories, getCategorieRecipes } from 'services/api/recipesAPI';
>>>>>>> Stashed changes

import { Container } from "reusableComponents/Container/Container";
import { Background } from "reusableComponents/Background/Background";
import { MainPageTitle } from "reusableComponents/ManePageTitle/ManePageTitle";
import Tab from '@mui/material/Tab';
import { Suspense, useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { StyledTabs } from "./Categories.styled";
import { Pagination } from "reusableComponents/Pagination/Pagination";
import { RecipesAPI } from '../../services/api/API';
import { CommonItemList } from "reusableComponents/CommonItemList/CommonItemList";

export const Categories = () => {
    const [allCategories, setAllCategories] = useState([]);
    const [category, setCategory] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [categoryRecipes, setCategoryRecipes] = useState([]);
    const { categoryName } = useParams();

    const navigate = useNavigate();
  
<<<<<<< Updated upstream
=======
//   const [isShow, setIsShow] = useState(false);
  
  

//   const mobile = useMediaQuery('(max-width: 767px)');
//   const tablet = useMediaQuery('(max-width: 1439px)');
//   const desctop = useMediaQuery('(min-width: 1440px)');

//   const toogle = () => {
//     setIsShow(prevState => !prevState);
//   };

>>>>>>> Stashed changes
    useEffect(() => {
        if (!category) {
            return;
        }
        setIsLoading(true);
        
        async function getRecipeByCategories(data) {
            try {
                const results = await RecipesAPI.getRecipeByCategories(data);
                
                if (results.length === 0) {
                    return alert('Something went wrong!');     ///Прописать ошибку
                };

                console.log(results);
                setCategoryRecipes(results.recipes);
                const pages = Math.round(results.total / results.limit);
                if (pages > 1) {
                    setTotalPages(pages);
                } else {
                    setTotalPages(null);
                };
            } catch (error) {
                return alert('Something went wrong!')///Прописать ошибку
            } finally {
                setIsLoading(false);
            };
        };
        getRecipeByCategories({ category, page });
    }, [category, page, totalPages]);

    useEffect(() => {
        setIsLoading(true);
        async function getCategories() {
            try {
                const results = await RecipesAPI.getAllCategories();
                
                if (results.length === 0) {
                    return alert('Something went wrong!');     ///Прописать ошибку
                }
                const categories = results.map(result => ({ id: result._id, title: result.title.toLowerCase() }))
                    .sort((a, b) => a.title.localeCompare(b.title));
                setAllCategories(categories);
                setCategory(categories[0].title);
            } catch (error) {
                return alert('Something went wrong!')///Прописать ошибку
            } finally {
                setIsLoading(false);
            }
        }
        getCategories();
    }, []);
    
    useEffect(() => {
        if (categoryName) {
            setCategory(categoryName);
        };
    }, [categoryName])
    

    const handleChange = (event, newValue) => {
        setPage(1);
        setCategory(newValue);
        navigate(`/categories/${newValue}`)
  };
    
    const handleChangePage = (event, value) => {
        setPage(value);
    };
    
    return (
        <section>
            <Background/>
            <Container>
                <MainPageTitle title='Categories' />
                <StyledTabs
                    component='ul'
                    value={category}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons={false}
                    aria-label="categories list"
                >
                    {allCategories.length !== 0 && allCategories.map(({ id, title }) =>
                        <Tab
                            key={id}
                            label={title}
                            value={title}
                            component='a'
                        />)}
                </StyledTabs>

                {isLoading || categoryRecipes.length === 0 ? <>...Loading</> :
                <CommonItemList list={categoryRecipes}></CommonItemList>}

<<<<<<< Updated upstream
=======
      {/* {isLoading || recepiesCategory.length === 0 ? (
          (desctop && (
            <>
              <div className={css.loader}>
                <Loader.Desktop />
              </div>
              <Loader.Desktop />
            </>
          )) ||
          (tablet && (
            <>
              <Loader.Tablet />
              <Loader.Tablet />
              <Loader.Tablet />
              <Loader.Tablet />
            </>
          )) ||
          (mobile && <Loader.Mobile />)
        ) : (
          <ul className={css.categoryList}>
            {recepiesCategory.map(
              ({
                category,
                description,
                favorite,
                like,
                popularity,
                preview,
                time,
                title,
                _id,
              }) => (
                <li key={_id} className={css.categoryItem}>
                  <DishCard
                    id={_id}
                    isShow={isShow}
                    toogle={toogle}
                    image={preview}
                    altText={title}
                    text={title}
                    favorite={favorite}
                    like={like}
                    allData={сategoryRecipes}
                    setAllData={setCategoryRecipes}
                    popularity={popularity}
                  />
                </li>
              ),
            )}
          </ul>
        )}
        */}

>>>>>>> Stashed changes
                <Suspense fallback={<div>...Loading</div>}>
                    <Outlet/>
                </Suspense>
                <Pagination totalPages={totalPages} onChange={handleChangePage} page={page} />
            </Container>
        </section>
  );
};