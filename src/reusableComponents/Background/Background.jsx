import { StyledDots, StyledSpinach } from "./Background.styled";
import PropTypes from 'prop-types';

export const Background = ({ noDots = false }) => {
    return <>
        {!noDots && <StyledDots />}
        <StyledSpinach />
    </>
};

Background.propTypes = {
  noDots: PropTypes.bool,
};