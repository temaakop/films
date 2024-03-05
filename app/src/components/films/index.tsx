import { Box } from "@mui/material";
import { FilmCard } from "./card";
import { FilmType } from "../../types/film-type";

type FilmsPropsType = {
  filmsList: FilmType[];
  favoriteFilms: FilmType[];
};

export function Films({ filmsList, favoriteFilms }: FilmsPropsType) {
  return (
    <Box
      sx={{
        flex: "4",
        display: "grid",
        gap: "8px",
        gridTemplateColumns: "1fr 1fr 1fr 1fr ",
      }}
    >
      {filmsList &&
        filmsList.map((film: FilmType) => {
          const isFilmFavorite = Boolean(
            favoriteFilms &&
              favoriteFilms.find((favoriteFilm) => favoriteFilm.id === film.id),
          );

          return (
            <FilmCard {...film} key={film.id} isVisible={isFilmFavorite} />
          );
        })}
    </Box>
  );
}
