import { PaginationItem } from "@mui/material"
import { BasicPagination } from "./Pagination.styled"
import ArrowBackIcon from '../../images/commonImages/paginationBackArrow.svg';
import ArrowForwardIcon from '../../images/commonImages/paginationForwardArrow.svg';
// import greenDotDesktop from '../../images/commonImages/greenDot-desktop.svg';
// import blackDotDesktop from '../../images/commonImages/blackDot-desktop.svg';
// import spinachMobile1x from '../../images/commonImages/spinach-mobile@1x.png';
// import spinachMobile2x from '../../images/commonImages/spinach-mobile@2x.png';
// import spinachTablet1x from '../../images/commonImages/spinach-tablet@1x.png';
// import spinachTablet2x from '../../images/commonImages/spinach-tablet@2x.png';
// import spinachDesktop1x from '../../images/commonImages/spinach-desktop@1x.png';
// import spinachDesktop2x from '../../images/commonImages/spinach-desktop@2x.png';

export const Pagination = ({onChange, page, totalPages}) => {
    return <BasicPagination
        count={totalPages}
        page={page}
        onChange={onChange}
    />
}