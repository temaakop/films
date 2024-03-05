// import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { FilterHeader } from "./header";
import { FiltersCategorySelect } from "./select";
import { FilterYearsSlider } from "./slider";
import { Genres } from "./film-genres";
import { FilterPagination } from "./pagination";
import { SearchFilm } from "./search-films";

import { filterReset } from "../../store/actions/filters";
import { FILTERS_FOR } from "../../store/actions/const";

export function FilterSection() {
  const dispatch = useDispatch();
  function resetButton() {
    dispatch(
      filterReset({
        category: FILTERS_FOR[0].name as "top_rated",
        pages: 1,
        searchText: "",
      }),
    );
  }

  return (
    <Paper
      sx={{
        width: "100%",
        height: "100%",
        maxWidth: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "var(--background-paper-elevation-1, #FFF)",
      }}
    >
      <Box>
        <FilterHeader onClick={resetButton} />
        <SearchFilm />
        <FiltersCategorySelect />
        <FilterYearsSlider />

        <Genres />
      </Box>
      <Box
        sx={{
          marginBottom: "24px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FilterPagination />
      </Box>
    </Paper>
  );
}
export { Genres };
