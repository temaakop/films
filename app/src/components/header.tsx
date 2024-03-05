import { Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "5em",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px",
        backgroundColor: "var(--primary-main, #2196F3);",
      }}
    >
      <Typography
        style={{
          color: "white",
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
      <Link to="request-token-page">
        <IconButton size="large">
          <AccountCircleIcon sx={{ color: "white" }} />
        </IconButton>
      </Link>
    </Box>
  );
}
