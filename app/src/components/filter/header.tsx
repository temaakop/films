import React from "react";
import { Typography, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

type FilterHeaderProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export function FilterHeader({ onClick }: FilterHeaderProps) {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "4px",
      }}
    >
      <Typography
        style={{
          color: "black",
          fontFamily: "Roboto",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "160%",
          letterSpacing: "0.15px",
        }}
      >
        Фильмы
      </Typography>

      <IconButton onClick={onClick}>
        <RestartAltIcon />
      </IconButton>
    </Box>
  );
}
