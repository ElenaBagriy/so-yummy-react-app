import { RotatingLines } from "react-loader-spinner";
import PropTypes from 'prop-types';

const ButtonLoader = ({ color, width }) => {
  return (
    <RotatingLines
      strokeColor={color}
      strokeWidth="5"
      animationDuration="0.75"
      width={width}
      visible={true}
    />
  );
};

export default ButtonLoader;

ButtonLoader.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
};