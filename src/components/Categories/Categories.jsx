

import { Container } from "reusableComponents/Container/Container";
import { Background } from "reusableComponents/Background/Background";
import { Title } from "reusableComponents/Title/Title";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Suspense, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

export const Categories = () => {
  const [category, setCategory] = useState('Beef');
  const { categoryName } = useParams();


    const handleChange = (event, newValue) => {
        console.log(newValue);
        setCategory(newValue);
  };
    
    return (
        <section>
            <Background/>
            <Container>
                <Title title='Categories' />
                <Tabs
                    component='ul'
                    value={category}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons={false}
                    aria-label="categories list">
                    <Tab label="Item One" value='q'/>
                    <Tab label="Beef" value='Beef' component='a'/>
                    <Tab label="Item Three" value='e' />
                    <Tab label="Item Four" value='r' />
                    <Tab label="Item Five" value='t'/>
                    <Tab label="Item Six" value='y'/>
                    <Tab label="Item Seven" value='u'/>
                </Tabs>
                <NavLink to="beef" >Beef</NavLink>

                
                <Suspense fallback={<div>...Loading</div>}>
                    <Outlet/>
                </Suspense>
            </Container>

    </section>
  );
};