import { Pagination } from "@mui/material";
import styled from "styled-components";

export const BasicPagination = styled(Pagination)`
    
    padding-bottom: 100px;

    @media screen and (min-width: 768px) {
        padding-bottom: 200px;
    };

    @media screen and (min-width: 1280px) {
        padding-bottom: 100px;
    };

    .MuiPagination-ul {
        
        justify-content: center;
        flex-wrap: nowrap;
        margin: 0 auto;
        width: 275px;
        height: 51px;
        
    };

    .MuiPaginationItem-root {
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.5;
        margin: 0;
        width: 27px;
        height: 27px;
        color: ${props => props.theme.text.paginationText};
    }
`