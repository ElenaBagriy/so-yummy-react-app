// import { useMediaQuery } from '@mui/material';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import Loader from '../../reusableComponents/ContentLoader/CategoriesLoader';
// import DishCard from 'reusableComponents/DishCard/DishCard';
// import { getAllCategories, getCategorieRecipes } from 'services/api/recipesAPI';
// import BasicPagination from 'reusableComponents/Pagination/Pagination';

import { Container } from "reusableComponents/Container/Container";
import { Background } from "reusableComponents/Background/Background";
import { Title } from "reusableComponents/Title/Title";
import Tab from '@mui/material/Tab';
import { Suspense, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { StyledTabs } from "./Categories.styled";
import { Pagination } from "reusableComponents/Pagination/Pagination";

export const Categories = () => {
//   const [allCategories, setAllCategories] = useState([]);
//   const [recepiesCategory, setRecepiesCategory] = useState([]);
//   const [isShow, setIsShow] = useState(false);
  
  
//   const [isLoading, setIsLoading] = useState(true);

//   const mobile = useMediaQuery('(max-width: 767px)');
//   const tablet = useMediaQuery('(max-width: 1439px)');
//   const desctop = useMediaQuery('(min-width: 1440px)');

//   const toogle = () => {
//     setIsShow(prevState => !prevState);
//   };

//   useEffect(() => {
//     setIsLoading(true);
//     if (!category) {
//       setIsLoading(false);
//       return;
//     }

//     getCategorieRecipes(category || '', page, 8).then(({ recipes, total }) => {
//       setRecepiesCategory(recipes);
//       const pageCounts = Math.ceil(total / 8);
//       if (pageCounts > 1) {
//         setTotalPage(pageCounts);
//       } else {
//         setTotalPage(null);
//       }
//     });
//     setIsLoading(false);
//   }, [category, categoryName, page]);

//   useEffect(() => {
//     getAllCategories()
//       .then(data => {
//         const titleArray = data.map(({ title }) => title);
//         const sortTitle = titleArray.sort((a, b) => a.localeCompare(b));
//         setAllCategories(sortTitle);
//         if (categoryName) {
//           setCategory(categoryName);
//           return;
//         }
//         if (data.length > 0) {
//           setCategory(data[0].title);
//         }
//       })
//       .catch(error => console.log(error.message));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

    
    const [category, setCategory] = useState('Beef');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(8);
    const { categoryName } = useParams();


    const handleChange = (event, newValue) => {
        setPage(1);
        setCategory(newValue);
  };
    
    const handleChangePage = (event, value) => {
        setPage(value);
    };

    return (
        <section>
            <Background/>
            <Container>
                <Title title='Categories' />
                <StyledTabs
                    component='ul'
                    value={category}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons={false}
                    aria-label="categories list"
                >
                    <Tab label="Item One" value='q'/>
                    <Tab label="Beef" value='Beef' component='a'/>
                    <Tab label="Item Three" value='e' />
                    <Tab label="Item Four" value='r' />
                    <Tab label="Item Five" value='t'/>
                    <Tab label="Item Six" value='y'/>
                    <Tab label="Item Seven" value='u'/>
                </StyledTabs>
                <NavLink to="beef" >Beef</NavLink>


      {/* <div className="container ">
          <Tabs
            value={category}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
            sx={{
              '.MuiTabs-indicator': {
                backgroundColor: '#8BAA36',
              },
            }}
          >
            {allCategories.map((title, index) => (
              <Tab
                sx={{
                  '&.Mui-selected': {
                    color: '#8BAA36',
                  },
                  color: 'var(--categoriesForDarkToWhite)',
                }}
                key={index}
                value={title}
                label={title}
              />
            ))}
          </Tabs>

        {isLoading || recepiesCategory.length === 0 ? (
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
                    allData={recepiesCategory}
                    setAllData={setRecepiesCategory}
                    popularity={popularity}
                  />
                </li>
              ),
            )}
          </ul>
        )}
      </div> */}


  );


                <Suspense fallback={<div>...Loading</div>}>
                    <Outlet/>
                </Suspense>
                <Pagination  totalPages={totalPages} onChange={handleChangePage} page={page}/>
            </Container>
            
      {/* {totalPage && (
        <div className={css.pagination}>
          <BasicPagination
            count={totalPage}
            page={page}
            isChange={handleChangePage}
          />
        </div>
      )} */}
    </section>
  );
};