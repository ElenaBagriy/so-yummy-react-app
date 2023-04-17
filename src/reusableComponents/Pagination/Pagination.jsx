import { BasicPagination, ArrowBack, ArrowForward } from "./Pagination.styled";
import { PaginationItem } from "@mui/material";

export const Pagination = ({ onChange, page, totalPages }) => {
  return (
    <>
      {totalPages > 1 && (
        <BasicPagination
          count={totalPages}
          page={page}
          onChange={onChange}
          boundaryCount={1}
          siblingCount={0}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBack, next: ArrowForward }}
              {...item}
            />
          )}
        />
      )}
    </>
  );
};
