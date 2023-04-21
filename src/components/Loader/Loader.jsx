import { RotatingTriangles } from 'react-loader-spinner';

export function Loader() {
  return (
    <RotatingTriangles
      visible={true}
      height="100"
      width="100"
      ariaLabel="rotating-triangels-loading"
      wrapperStyle={{}}
      wrapperClass="loader-wrapper"
    />
  );
}
