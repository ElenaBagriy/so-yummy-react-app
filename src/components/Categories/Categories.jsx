
import { Container } from "reusableComponents/Container/Container";
import { Background } from "reusableComponents/Background/Background";
import { Title } from "reusableComponents/Title/Title";
import Tab from '@mui/material/Tab';
import { Suspense, useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { StyledTabs } from "./Categories.styled";
import { Pagination } from "reusableComponents/Pagination/Pagination";
import { RecipesAPI } from '../../services/api/API';

export const Categories = () => {
    const [allCategories, setAllCategories] = useState([]);
    const [category, setCategory] = useState('Beef');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const { categoryName } = useParams();


  
  const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        RecipesAPI.getAllCategories();

  }, []);

    



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


                <Suspense fallback={<div>...Loading</div>}>
                    <Outlet/>
                </Suspense>
                <Pagination totalPages={totalPages} onChange={handleChangePage} page={page} />
            </Container>
        </section>
  );
};