import { Main } from 'reusableComponents/Main/Main';
import iconFor404 from '../../images/PageNotFound/icon-for-404.svg';

const PageNotFound = () => {
  return (
    <Main>
      <img src={iconFor404} alt="Icon 404" />
      <p>We are sorry,</p>
      <p>but the page you were looking for can’t be found..</p>
    </Main>
  );
};

export default PageNotFound;