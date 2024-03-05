import Slider from "@mui/material/Slider";

import { useState } from "react";
import { Box, Typography } from "@mui/material";

export function FilterYearsSlider() {
  const [value, setValue] = useState<number | number[]>([2020, 2023]);
  function handleChange(event: Event, value: number | number[]) {
    setValue(value);
  }

  return (
    <Box sx={{ padding: "16px" }}>
      <Typography style={{ marginBottom: "26px" }}>
        Год релиза: c {Array.isArray(value) ? value[0] : value} по{" "}
        {Array.isArray(value) ? value[1] : value}
      </Typography>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value}
        min={1900}
        max={2023}
        onChange={handleChange}
        valueLabelDisplay="auto"
        disableSwap
      />
    </Box>
  );
}
