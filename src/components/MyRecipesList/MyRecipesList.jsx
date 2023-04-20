import { Background } from "reusableComponents/Background/Background";
import { Container } from "reusableComponents/Container/Container";
import { Description, Image, RecipesItem, RecipesList, Section, Wrapper, Time, Title, BottomWrapper, Link, DeleteButton, DeleteIcon, TextWrapper } from "./MyRecipesList.styled";
import { MainPageTitle } from "reusableComponents/ManePageTitle/ManePageTitle";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useMemo, useState } from "react";
import { Pagination } from "reusableComponents/Pagination/Pagination";
import timeConvert from "services/timeConverter";
import { Tooltip, useMediaQuery } from "@mui/material";
import EllipsisText from "react-ellipsis-text";
import { selectMyRecipes, selectTotalPageRecipe } from "redux/selectors";
import { deleteOwnRecipe, getAllOwnRecipes } from "redux/ownRecipes/ownRecipesOperations";


export const MyRecipesList = () => {
    const dispatch = useDispatch();
    const myRecipes = useSelector(selectMyRecipes);
    const totalPages = useSelector(selectTotalPageRecipe); //изменить?
    
    const [page, setPage] = useState(1);
    const [deviceType, setDeviceType] = useState('');

    const mobile = useMediaQuery('(max-width: 767px)');
    const tablet = useMediaQuery('(min-width: 768px)');
    const desktop = useMediaQuery('(min-width: 1280px)');
    
    const length = useMemo(() => {
        let lengthOptions;
        switch (deviceType) {
            case 'mobile':
                lengthOptions = {
                    title: 20,
                    text: 190,
                };
                break;
            case 'tablet':
                lengthOptions = {
                    title: 21,
                    text: 150,
                };
                break;
            case 'desktop':
                lengthOptions = {
                    title: 42,
                    text: 310,
                };
                break;
                default:
                    lengthOptions = {
                    title: 10,
                    text: 10,
                };
            break;
            }
        return lengthOptions;
        
    }, [deviceType]);

    
    useEffect(() => {
        if (mobile) { setDeviceType('mobile') };
        if (tablet) { setDeviceType('tablet') };
        if (desktop) { setDeviceType('desktop') };
        
    }, [mobile, tablet, desktop, deviceType, length]);
    
    useEffect(() => {
        dispatch(getAllOwnRecipes({page}));
    }, [dispatch, page]);

    const handleChangePage = (_, value) => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        });
        setPage(value);
    };

    const onDelete = (id) => {
        console.log('id', id);
        dispatch(deleteOwnRecipe(id))
        .then(() => {
            dispatch(getAllOwnRecipes({ page }))
        });
    };
    
    return         <>
            <Background/>
            <Container>
                <Section>
                    <MainPageTitle title='My recipes' />
                    
                    {!myRecipes ? <>...Loading</> :
                    <RecipesList>
                        {myRecipes.map((recipe) => {
                            return <RecipesItem key={recipe._id}>
                                    <Image src={recipe.preview} alt={recipe.title} />
                                <Wrapper>
                                    <TextWrapper>
                                        <Title>
                                            <EllipsisText text={recipe.title} length={length.title} tooltip='true'/>
                                        </Title>
                                        <Description>
                                            <EllipsisText text={recipe.description} length={length.text} tooltip='true' />
                                        </Description>
                                    </TextWrapper>
                                    <BottomWrapper>
                                        <Time>{timeConvert(recipe.time)}</Time>
                                        <Link to={`/recipe/${recipe._id}`}>
                                            See recipe
                                        </Link>
                                    </BottomWrapper>
                                </Wrapper>
                                <Tooltip title="Delete" placement="bottom-start">
                                    <DeleteButton id={recipe._id} onClick={() => onDelete(recipe._id)}>
                                        <DeleteIcon/>
                                    </DeleteButton>
                                </Tooltip>
                            </RecipesItem>
                        })}
                        </RecipesList>
                    }
                    <Pagination page={page} totalPages={totalPages} onChange={handleChangePage} />
                    </Section>
            </Container>
        </>
}