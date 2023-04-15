// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectToken } from 'redux/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // const token = useSelector(selectToken);
  const token = true;
  return token ? Component : <Navigate to={redirectTo} />;
};