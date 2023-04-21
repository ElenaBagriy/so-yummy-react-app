import styled from "styled-components";
// import backgroundDesktop from "../../images/recipePage/vegetables@1x.jpg";
// import backgroundMobile from "../../images/recipePage/vegetables@3x.jpg";
// import backgroundTablet from "../../images/recipePage/vegetables@2x.jpg";

export const Section = styled.section`
    padding-top: 32px;
    padding-bottom: 100px;

    @media screen and (min-width: 768px) {
      padding-top: 50px;
      padding-bottom: 200px;
    };
`;

// export const ImgBox = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 2;
//   background-repeat: no-repeat;
//   background-size: 100% 100%;
//   background-position: center center;
//   background-size: cover;
//   width: 100%;
//   height: 455px;
//   background-image: url(${backgroundMobile});
//   @media screen and (min-width: 555px) {
//     background-size: cover;
//     height: 455px;
//     background-image: url(${backgroundTablet});
//   }
//   ${(p) => p.theme.sizes.tablet} {
//     height: 495px;
//     background-size: cover;
//     background-image: url(${backgroundTablet});
//   }
//   ${(p) => p.theme.sizes.desktop} {
//     height: 493px;
//     background-image: url(${backgroundDesktop});
//     background-size: cover;
//   }
// `;