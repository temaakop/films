import { useSelector, useDispatch } from "react-redux";
import { ChangeEvent } from "react";
import { TextField } from "@mui/material";

import { filmsSearch } from "../../store/actions/filters";
import { AppDispatch } from "../../store";
import { selectSearchedFilmsText } from "../../store/selectors";
import { fetchSearchedFilms, search } from "../../store/reducers/films";

export function SearchFilm() {
  const dispatch = useDispatch<AppDispatch>();
  const searchText = useSelector(selectSearchedFilmsText);
  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    if (!event.target.value) {
      dispatch(search(false));
    }
    if (event.target.value) {
      dispatch(search(true));
      dispatch(filmsSearch(event.target.value));
      dispatch(fetchSearchedFilms(searchText));
    }
  }
  return (
    <TextField
      id="search-film-input"
      label="Поиск фильмов:"
      onChange={handleChange}
    />
  );
}
