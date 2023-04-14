import styled from "styled-components";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

export const Link = styled.a`
    display: block;
    height: 100%;
`;

export const PictureTitle = styled.div`
    position: absolute;
    bottom: 26px;
    left: 50%;
    transform: translateX(-50%);
    width: 307px;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.24px;
    line-height: 1.25;
    padding: 16px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.text.primary};

    @media screen and (min-width: 768px) {
        width: 300px;
    };

    @media screen and (min-width: 1280px) {
        width: 268px;
        bottom: 24px;
    }
`;

export const Icon = styled(FavoriteBorder)`
  color: ${props => props.theme.colors.green};
`;

export const CheckedIcon = styled(Favorite)`
  color: ${props => props.theme.colors.green};
`;

export const LikeButton = styled.button`
    position: absolute;
    top: 20px;
    right: 23px;
    border: none;
    background-color: transparent;
    transition: scale ${props => props.theme.transition.normal};

    @media screen and (min-width: 1280px) {
        top: 23px;
        right: 23px;
    }

    &:hover,
    :focus {
        scale: 1.5;
    }
`