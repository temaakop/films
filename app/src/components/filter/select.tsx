import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { filterCategory } from "../../store/actions/filters";
import { FILTERS_FOR } from "../../store/actions/const";

export function FiltersCategorySelect() {
  const dispatch = useDispatch();
  const handleChange = (
    e: React.SyntheticEvent<Element, Event>,
    newValue: { title: string; name: string } | null,
  ) => {
    if (newValue) {
      dispatch(filterCategory(newValue.name));
    }
  };

  return (
    <Autocomplete
      disablePortal
      onChange={handleChange}
      limitTags={2}
      id="multiple-films-tags"
      options={FILTERS_FOR}
      getOptionLabel={(option) => (option ? option.title : "")}
      defaultValue={FILTERS_FOR[0]}
      renderInput={(params) => (
        <TextField
          {...params}
          label="По категориям"
          variant="standard"
          sx={{
            paddingBottom: "20px",
          }}
        />
      )}
      sx={{ padding: "16px" }}
    />
  );
}
