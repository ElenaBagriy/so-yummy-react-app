import styled from 'styled-components';
import back from '../../images/welcomePage/background-desktop@2x.png';

export const SigninStyled = styled.div`
  padding-top: 155px;
  padding-bottom: 196px;
  position: relative;

  img {
    position: absolute;
    top: 115px;
    left: 113px;
  }
  background-image: url('${back}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

// export const FormikStyled = styled(Formik)`
//   display: flex;
// `;
