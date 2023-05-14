import { Pagination } from "@mui/material";
import { ReactComponent as ArrowBackIcon } from '../../images/commonImages/paginationBackArrow.svg';
import {ReactComponent as ArrowForwardIcon} from '../../images/commonImages/paginationForwardArrow.svg';
import styled from "styled-components";

export const BasicPagination = styled(Pagination)`
    margin-top: 40px;

    @media screen and (min-width: 768px) {
        margin-top: 50px;
    };

    .MuiPagination-ul {
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        margin: 0 auto;
        padding: 12px 28px;
        width: 275px;
        border-radius: 26px;
        box-shadow: 0px 4px 4px ${props => props.theme.pagination.shadow};
        background-color: ${props => props.theme.colors.backgroundSecondary};

        @media screen and (min-width: 768px) {
        padding: 14px 24px;
        width: 324px;
    };
    };

    .MuiPaginationItem-root {
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.5;
        margin: 0;
        padding: 0;
        min-width: auto;
        width: 27px;
        height: 27px;
        color: ${props => props.theme.pagination.text};
        transition: background-color ${props => props.theme.hover.transition}, color ${props => props.theme.hover.transition};
        
        &:hover {
            background-color: #cce681;
            color: #656565;
        }

        &.Mui-selected {
        background-color: ${props => props.theme.pagination.selected};
        color: ${props => props.theme.text.hero};
        transition: background-color ${props => props.theme.hover.transition}, color ${props => props.theme.hover.transition};

        &:hover {
            background-color: #cce681;
            color: #656565;
        }
        }
    }
`

export const ArrowBack = styled(ArrowBackIcon)`
  fill: ${props => props.theme.pagination.arrow};
`

export const ArrowForward = styled(ArrowForwardIcon)`
  fill: ${props => props.theme.pagination.arrow};
`