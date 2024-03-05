import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import GradeIcon from "@mui/icons-material/Grade";
import { Link } from "react-router-dom";
import { changeFavoriteFilms } from "../../api/change-favorite-films";
import { FilmType } from "../../types/film-type";
import { IMG_PATH } from "./const";

export function FilmCard({
  id,
  title,
  poster_path,
  vote_average,
  isVisible,
}: FilmType) {
  const [cookies] = useCookies(["user"]);
  const [isFavorite, setIsFavorite] = useState(isVisible);

  useEffect(() => {
    setIsFavorite(isVisible);
  }, [isVisible]);

  async function handleClick() {
    setIsFavorite(!isFavorite);
    await changeFavoriteFilms(cookies.user.id, !isFavorite, id);
  }

  return (
    <Card
      sx={{
        height: "324px",
      }}
    >
      <Link to={`/film-pages/${id}`}>
        <Box sx={{ height: "240px" }}>
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "100%" }}
            image={IMG_PATH + poster_path}
            alt={title}
          />
        </Box>
      </Link>
      <Box sx={{ display: "grid", gridTemplateColumns: "5fr 1fr" }}>
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            component="div"
            variant="h5"
            sx={{
              maxHeight: "32px",
              overflow: "hidden",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "133.4%",
            }}
          >
            {title}
          </Typography>
          <Typography
            component="div"
            variant="subtitle1"
            color="text.secondary"
            sx={{ flex: "1" }}
          >
            Рейтинг {Math.floor(vote_average)}
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton
            onClick={() => handleClick()}
            color={isFavorite ? "primary" : "secondary"}
          >
            <GradeIcon />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
}
