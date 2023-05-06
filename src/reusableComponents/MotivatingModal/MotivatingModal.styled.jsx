import styled from "styled-components";
import days100Mobile1x from '../../images/modal/100daysMotivation-mobile@1x-min.png';
import days100Mobile2x from '../../images/modal/100daysMotivation-mobile@2x-min.png';
import days100Tablet1x from '../../images/modal/100daysMotivation-tablet@1x-min.png';
import days100Tablet2x from '../../images/modal/100daysMotivation-tablet@2x-min.png';
import days100Desktop1x from '../../images/modal/100daysMotivation-desktop@1x-min.png';
import days100Desktop2x from '../../images/modal/100daysMotivation-desktop@2x-min.png';
import recipes10Mobile1x from '../../images/modal/10recipesMotivation-mobile@1x-min.png';
import recipes10Mobile2x from '../../images/modal/10recipesMotivation-mobile@2x-min.png';
import recipes10Tablet1x from '../../images/modal/10recipesMotivation-tablet@1x-min.png';
import recipes10Tablet2x from '../../images/modal/10recipesMotivation-tablet@2x-min.png';
import recipes10Desktop1x from '../../images/modal/10recipesMotivation-desktop@1x-min.png';
import recipes10Desktop2x from '../../images/modal/10recipesMotivation-desktop@2x-min.png';
import firstRecipeMobile1x from '../../images/modal/firstRecipeMotivation-mobile@1x-min.png';
import firstRecipeMobile2x from '../../images/modal/firstRecipeMotivation-mobile@2x-min.png';
import firstRecipeTablet1x from '../../images/modal/firstRecipeMotivation-tablet@1x-min.png';
import firstRecipeTablet2x from '../../images/modal/firstRecipeMotivation-tablet@2x-min.png';
import firstRecipeDesktop1x from '../../images/modal/firstRecipeMotivation-desktop@1x-min.png';
import firstRecipeDesktop2x from '../../images/modal/firstRecipeMotivation-desktop@2x-min.png';
import shoppingMobile1x from '../../images/modal/shoppingMotivation-mobile@1x-min.png';
import shoppingMobile2x from '../../images/modal/shoppingMotivation-mobile@2x-min.png';
import shoppingTablet1x from '../../images/modal/shoppingMotivation-tablet@1x-min.png';
import shoppingTablet2x from '../../images/modal/shoppingMotivation-tablet@2x-min.png';
import shoppingDesktop1x from '../../images/modal/shoppingMotivation-desktop@1x-min.png';
import shoppingDesktop2x from '../../images/modal/shoppingMotivation-desktop@2x-min.png';

const background = {
  1: {
    mobile: {
      x1: shoppingMobile1x,
      x2: shoppingMobile2x,
    },
    tablet: {
      x1: shoppingTablet1x,
      x2: shoppingTablet2x,
    },
    desktop: {
      x1: shoppingDesktop1x,
      x2: shoppingDesktop2x,
    }
  },
  2: {
     mobile: {
      x1: days100Mobile1x,
      x2: days100Mobile2x,
    },
    tablet: {
      x1: days100Tablet1x,
      x2: days100Tablet2x,
    },
    desktop: {
      x1: days100Desktop1x,
      x2: days100Desktop2x,
    }
  },
  3: {
    mobile: {
      x1: recipes10Mobile1x,
      x2: recipes10Mobile2x,
    },
    tablet: {
      x1: recipes10Tablet1x,
      x2: recipes10Tablet2x,
    },
    desktop: {
      x1: recipes10Desktop1x,
      x2: recipes10Desktop2x,
    }
  },
  4: {
    mobile: {
      x1: firstRecipeMobile1x,
      x2: firstRecipeMobile2x,
    },
    tablet: {
      x1: firstRecipeTablet1x,
      x2: firstRecipeTablet2x,
    },
    desktop: {
      x1: firstRecipeDesktop1x,
      x2: firstRecipeDesktop2x,
    }
  }
}

export const Backdrop = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  overflow-y: hidden;
  /* background-attachment: fixed; */
  z-index: 1000;
`;

export const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${({ content }) => (background[content].mobile.x1)});
  background-repeat: no-repeat;
  background-size: cover;

  box-shadow: 0px 0px 10px var(--boxShadow);
  animation: fadeIn 0.25s ease-out;
  z-index: 10099;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${({ content }) => (background[content].mobile.x2)});
      background-size: cover;
    }

  @media screen and (min-width: 768px) {
    border-radius: 30px;
    background-color: white;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${({ content }) => (background[content].tablet.x1)});
    background-size: cover;
    box-shadow: ${props => props.theme.hover.boxShadow};
    animation: fadeIn 0.25s ease-out;
    width: 400px;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${({ content }) => (background[content].tablet.x2)});
      background-size: cover;
    }
  }

  @media screen and (min-width: 1280px) {
      width: 500px;
      height: 500px;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${({ content }) => (background[content].desktop.x1)});
      background-size: cover;

    @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${({ content }) => (background[content].desktop.x2)});
      background-size: cover;
    }
  }
`;


export const Content = styled.div`
  display: block;
  position: absolute;
  background: rgba(217, 217, 217, 0.138);
  backdrop-filter: blur(27.9764px);

  @media screen and (max-width: 767px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    shape-outside: path("M0.112493 52.3184C0.112557 40.2806 0.464111 18.6124 4.177 11.5749C10.51 -0.428903 27.3081 0.321514 40.8653 0.9544L266.329 11.4796C267.686 11.543 269.035 11.7282 270.359 12.033C283.802 15.1278 294.124 25.9105 296.629 39.4761L296.879 40.831C298.29 48.4733 299 56.2026 299 63.9741V190.208C299 200.126 295.569 209.763 289.288 217.438C283.685 224.286 275.311 228.256 266.464 228.256H214.996C213.736 228.256 212.25 228.474 210.667 228.831C201.267 230.946 193.891 237.852 188.141 245.583C186.863 247.302 185.455 248.917 184.013 250.502C177.363 257.816 168.479 269 149.092 269C142.647 269 136.698 267.178 131.865 264.89C124.186 261.253 118.713 254.448 113.675 247.605C104.908 235.695 90.2931 229.723 75.5303 230.597C59.7539 231.53 41.0742 231.471 27.495 228.256C5.58893 223.071 -0.970468 194.766 0.112493 181.957V52.3184Z");
    clip-path: path("M0.112493 52.3184C0.112557 40.2806 0.464111 18.6124 4.177 11.5749C10.51 -0.428903 27.3081 0.321514 40.8653 0.9544L266.329 11.4796C267.686 11.543 269.035 11.7282 270.359 12.033C283.802 15.1278 294.124 25.9105 296.629 39.4761L296.879 40.831C298.29 48.4733 299 56.2026 299 63.9741V190.208C299 200.126 295.569 209.763 289.288 217.438C283.685 224.286 275.311 228.256 266.464 228.256H214.996C213.736 228.256 212.25 228.474 210.667 228.831C201.267 230.946 193.891 237.852 188.141 245.583C186.863 247.302 185.455 248.917 184.013 250.502C177.363 257.816 168.479 269 149.092 269C142.647 269 136.698 267.178 131.865 264.89C124.186 261.253 118.713 254.448 113.675 247.605C104.908 235.695 90.2931 229.723 75.5303 230.597C59.7539 231.53 41.0742 231.471 27.495 228.256C5.58893 223.071 -0.970468 194.766 0.112493 181.957V52.3184Z");
    width: 299px;
    height: 269px;
    padding: 44px 26px;
  }
  
  @media screen and (min-width: 768px) {
    width: 268px;
    height: 242px;
    padding: 32px 24px;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    shape-outside: path("M0.100829 47.0671C0.100887 36.2375 0.415993 16.7442 3.74393 10.4131C9.41112 -0.368316 24.4852 0.289637 36.652 0.859711L238.71 10.3271C239.93 10.3843 241.143 10.5515 242.334 10.8266L243.056 10.9934C254.664 13.6756 263.571 22.9942 265.727 34.7113C267.239 42.9315 268 51.2469 268 59.605V171.171C268 180.059 264.933 188.698 259.316 195.587C254.282 201.763 246.743 205.346 238.776 205.346H192.705C191.583 205.346 190.261 205.539 188.853 205.856C180.406 207.756 173.788 213.98 168.633 220.936C167.489 222.481 166.227 223.932 164.936 225.357C158.976 231.938 151.013 242 133.634 242C127.855 242 122.519 240.359 118.186 238.299C111.305 235.027 106.409 228.914 101.903 222.771C94.0396 212.049 80.8993 206.67 67.6262 207.456C53.5009 208.291 36.7947 208.233 24.6443 205.346C5.00947 200.681 -0.869851 175.217 0.100829 163.694V47.0671Z");
    clip-path: path("M0.100829 47.0671C0.100887 36.2375 0.415993 16.7442 3.74393 10.4131C9.41112 -0.368316 24.4852 0.289637 36.652 0.859711L238.71 10.3271C239.93 10.3843 241.143 10.5515 242.334 10.8266L243.056 10.9934C254.664 13.6756 263.571 22.9942 265.727 34.7113C267.239 42.9315 268 51.2469 268 59.605V171.171C268 180.059 264.933 188.698 259.316 195.587C254.282 201.763 246.743 205.346 238.776 205.346H192.705C191.583 205.346 190.261 205.539 188.853 205.856C180.406 207.756 173.788 213.98 168.633 220.936C167.489 222.481 166.227 223.932 164.936 225.357C158.976 231.938 151.013 242 133.634 242C127.855 242 122.519 240.359 118.186 238.299C111.305 235.027 106.409 228.914 101.903 222.771C94.0396 212.049 80.8993 206.67 67.6262 207.456C53.5009 208.291 36.7947 208.233 24.6443 205.346C5.00947 200.681 -0.869851 175.217 0.100829 163.694V47.0671Z");
  }

  @media screen and (min-width: 1280px) {
    bottom: 40px;
  }
`;


export const Text = styled.p`
  z-index: 130;
  color: var(--whiteColor);
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  text-align: left;
  font-size: 32px;
  line-height: 1.06;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.bgMain};
    
    @media screen and (min-width: 768px) {
        font-size: 28px;
        line-height: 1.07;
    }
    
    @media screen and (min-width: 1280px) {
        top: 225px;
        right: 140px;
        width: 220px;
        height: 120px;
        text-align: left;
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 1.07;
    }
`;

export const AccentText = styled.span`
  background: linear-gradient(180deg, #8BAA36 0%, #BEE454 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.green};
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color ${props => props.theme.hover.transition};

  &:hover,
   :focus {
    background-color: ${props => props.theme.colors.black};
   }
`;

export const Icon = styled.svg`
  width: 28px;
  height: 28px;
  fill: transparent;
  stroke: ${props => props.theme.colors.bgMain};
`;