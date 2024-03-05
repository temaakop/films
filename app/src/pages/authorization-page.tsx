import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { Paper, Box, Typography, Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { getUserInfo } from "../api/user";
// import { userLogin } from "../store/actions/user";
import { login } from "../store/reducers/user";

export function Authorization() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [, setCookies] = useCookies(["user"]);

  const [bearerToken, setBearerToken] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e) {
      setBearerToken(e.target.value);
    }
  }

  async function handleClick() {
    navigate("/");

    const userInfo = await getUserInfo();
    console.log(userInfo);
    setCookies("user", { id: userInfo.id, token: bearerToken });
    dispatch(login({ id: userInfo.id, token: bearerToken }));
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
          Введите токен
        </Typography>
        <TextField
          type="email"
          id="token-request-form"
          label="Токен"
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
          <Link to="request-token-page">
            <Button>Назад</Button>
          </Link>

          <Button onClick={handleClick}>Ok</Button>
        </Box>
      </Paper>
    </Box>
  );
}
