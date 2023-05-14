import { MainSection } from "./Main.styled";
import PropTypes from 'prop-types';

export const Main = ({ children }) => {
    return <>
        <MainSection>{children}</MainSection>
    </>
};

Main.propTypes = {
  children: PropTypes.node,
};