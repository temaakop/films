import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

import { checkBoxCheckedIcon, checkBoxIcon } from "./const";

import { selectGenres } from "../../store/selectors";
import { Genre } from "../../types/film-type";
import { fetchGenres } from "../../store/reducers/films";
import { AppDispatch } from "../../store";

export function Genres() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const genresList: Genre[] = useSelector(selectGenres);

  return (
    <Autocomplete
      multiple
      id="multiple-films-genres"
      options={genresList}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={checkBoxIcon}
            checkedIcon={checkBoxCheckedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}
      sx={{ padding: "16px" }}
      renderInput={(params) => (
        <TextField {...params} label="Жанры" placeholder="По жанрам" />
      )}
    />
  );
}
