import { ChangeEvent } from "react";
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { filmsPage } from "../../store/actions/filters";
import { selectFilmsPage } from "../../store/selectors";

export function FilterPagination() {
  const dispatch = useDispatch();

  const pageNumber = useSelector(selectFilmsPage);
  const handleClick = (event: ChangeEvent<unknown>, page: number) => {
    dispatch(filmsPage(page));
  };
  return (
    <Pagination
      onChange={handleClick}
      page={pageNumber}
      count={99}
      siblingCount={0}
    />
  );
}
