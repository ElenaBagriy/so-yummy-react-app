import { BasicPagination, ArrowBack, ArrowForward } from "./Pagination.styled"
import { PaginationItem } from "@mui/material";
import PropTypes from 'prop-types';

export const Pagination = ({ onChange, page, totalPages }) => {
    return  <>{totalPages >1 && <BasicPagination
        count={totalPages}
        page={page}
        onChange={(e, value) => onChange(value)}
        boundaryCount={1}
        siblingCount={0}
        renderItem={(item) => (
            <PaginationItem
                slots={{ previous: ArrowBack, next: ArrowForward }}
                {...item}
            />
        )}
    />}
    </>
};

Pagination.propTypes = {
    onChange: PropTypes.func,
    page: PropTypes.number,
    totalPages: PropTypes.number,
};