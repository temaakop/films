import React, { useState } from "react";
import { Paper, Box, Typography, Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export function RequestTokenPage() {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e) {
      setUserEmail(e.target.value);
    }
  }

  function sendEmail() {
    console.log(userEmail);
  }

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "var(--grey-500, #9E9E9E)",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "0 24px",
          width: "444px",
        }}
      >
        <Typography
          component="h1"
          sx={{ margin: "16px 0", fontWeight: "500px", fontSize: "20px" }}
        >
          Запросить токен
        </Typography>
        <TextField
          type="email"
          id="token-request-form"
          label="Почта"
          onChange={handleChange}
        />
        <Box
          sx={{
            marginTop: "20px",
            marginBottom: "8px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            Отмена
          </Button>
          <Link to="authorization-page">
            <Button onClick={sendEmail}>Запросить</Button>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
}
