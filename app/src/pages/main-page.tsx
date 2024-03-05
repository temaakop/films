import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { FilterSection } from "../components/filter/index";
import { Films } from "../components/films";
import { Header } from "../components/header";
import {
  selectFavoriteFilms,
  selectFilmList,
  selectFilmsIsSearch,
  selectFilmsPage,
  selectFilterCategory,
  selectRequestIsLoading,
  selectSearchedFilmsText,
  selectUserId,
} from "../store/selectors";

import {
  fetchFilms,
  fetchFavoriteFilms,
  loading,
} from "../store/reducers/films";
import { AppDispatch } from "../store";
import { Loading } from "../components/Loading";

export function MainPage() {
  const dispatch = useDispatch<AppDispatch>();
  const requestIsLoading = useSelector(selectRequestIsLoading);
  const searchedFilmsText = useSelector(selectSearchedFilmsText);
  const filmPage = useSelector(selectFilmsPage);
  const filterCategory = useSelector(selectFilterCategory);
  const userId = useSelector(selectUserId);
  const filmsList = useSelector(selectFilmList);
  const filmsIsSearch = useSelector(selectFilmsIsSearch);
  const favoriteFilms = useSelector(selectFavoriteFilms);

  useEffect(() => {
    let ignore = false;
    dispatch(loading(false));
    if (!ignore && !filmsIsSearch) {
      dispatch(fetchFilms({ filterCategory, page: filmPage }));
    }

    if (!ignore) {
      dispatch(fetchFavoriteFilms(userId));
    }
    dispatch(loading(true));

    return () => {
      ignore = true;
    };
  }, [
    userId,
    filmPage,
    filterCategory,
    dispatch,
    searchedFilmsText,
    filmsIsSearch,
    requestIsLoading,
  ]);

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "1fr 5fr",
          margin: "24px",
        }}
      >
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "stretch",
            height: "732px",
          }}
        >
          <FilterSection />
        </Box>
        {requestIsLoading ? (
          <Films filmsList={filmsList} favoriteFilms={favoriteFilms} />
        ) : (
          <Loading />
        )}
      </Box>
    </>
  );
}
