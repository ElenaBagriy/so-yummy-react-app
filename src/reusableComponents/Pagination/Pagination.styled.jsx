import { Pagination } from "@mui/material";
import { ReactComponent as ArrowBackIcon } from '../../images/commonImages/paginationBackArrow.svg';
import {ReactComponent as ArrowForwardIcon} from '../../images/commonImages/paginationForwardArrow.svg';
import styled from "styled-components";

export const BasicPagination = styled(Pagination)`
    margin-top: 40px;

    @media screen and (min-width: 768px) {
        margin-top: 50px;
    };

    @media screen and (min-width: 1280px) {
        /* padding-bottom: 100px; */
    };

    .MuiPagination-ul {
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        margin: 0 auto;
        padding: 12px 28px;
        width: 275px;
        border-radius: 26px;
        box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);
        background-color: ${props => props.theme.colors.bgMain};

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
        color: ${props => props.theme.text.paginationText};
        
        &:hover {
            background-color: #cce681;
        }

        &.Mui-selected {
        background-color: ${props => props.theme.colors.lightGreen};

        &:hover {
            background-color: #cce681;
        }
        }
    }
`

export const ArrowBack = styled(ArrowBackIcon)`
  fill: rgba(169, 169, 169, 0.73);
`

export const ArrowForward = styled(ArrowForwardIcon)`
  fill: rgba(169, 169, 169, 0.73);
`