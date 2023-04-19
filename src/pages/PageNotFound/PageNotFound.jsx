import { Main } from 'reusableComponents/Main/Main';
import { Background } from 'reusableComponents/Background/Background';
import { Container } from 'reusableComponents/Container/Container';
import { BoldText, Picture, Section, Text } from './PageNotFound.styled';
import { GoToTop } from 'reusableComponents/ScrollToTop/ScrollToTop';

const PageNotFound = () => {
  return (
    <Main>
      <Background />
      <Section>
        <Container>
          <Picture />
          <Text>
            <BoldText>
              We are sorry,
            </BoldText>
            but the page you were looking for can’t be found..
          </Text>
        </Container>
      </Section>
      <GoToTop/>
    </Main>
  );
};

export default PageNotFound;