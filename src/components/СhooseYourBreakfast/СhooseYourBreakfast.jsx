import { useNavigate } from "react-router-dom";
import { Container } from "../../reusableComponents/Container/Container";
import { SearchForm } from "../../reusableComponents/SearchForm/SearchForm";
import { HeroBG } from "components/HeroBG/HeroBG";
import { Accent, ArrowLink, Hero, Link, Paragraph, ProductBlock, Text, Title } from "./СhooseYourBreakfast.styled";

export const СhooseYourBreakfast = () => {
    const navigate = useNavigate();

    const onSearchFormSubmit = query => {
        navigate(`/search?query=title&value=${query}`);
    };
    return <Hero>
        <HeroBG />
        <Container>
            <Title><Accent>So</Accent>Yummy</Title>
            <Paragraph>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.</Paragraph>
            <ProductBlock>
                <Text><Accent>Delicious and healthy</Accent> way to enjoy a variety of fresh ingredients in one satisfying meal</Text>
                <Link to='/categories/breakfast'>See recipes<ArrowLink/></Link>
            </ProductBlock>
            <SearchForm onSearchFormSubmit={onSearchFormSubmit} color="black" />
        </Container>
    </Hero>
};