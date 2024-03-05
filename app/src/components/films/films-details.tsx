import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import GradeIcon from "@mui/icons-material/Grade";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { MAX_CAST_LENGTH } from "../../pages/const";
import { IMG_PATH } from "./const";
import { FilmsActorsType, FilmsInfoType } from "../../types/film-type";

type FilmDetailsPropsType = {
  filmInfo: FilmsInfoType;
  actors: FilmsActorsType["cast"];
  isLoading: boolean;
};

export function FilmDetails({
  filmInfo,
  actors,
  isLoading,
}: FilmDetailsPropsType) {
  const navigate = useNavigate();

  if (isLoading) {
    const releaseDate = filmInfo.release_date.slice(0, 4);
    return (
      <Card
        sx={{
          padding: "24px",
          display: "flex",
          flexDirection: "center",
          gap: "24px",
          height: "100vh",
          alignItems: "stretch",
        }}
      >
        <CardMedia
          component="img"
          image={IMG_PATH + filmInfo.poster_path}
          title={filmInfo.title}
          sx={{ width: "300px", height: "400px" }}
        />
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "48px", marginBottom: "10px" }}>
              {filmInfo.title} ({releaseDate})
            </Typography>
            <IconButton>
              <GradeIcon />
            </IconButton>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            <IconButton
              onClick={() => {
                navigate("/");
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Box>
          <Box sx={{ marginBottom: "80px" }}>
            <Typography sx={{ fontWeight: "600" }}>
              Актерский состав :
            </Typography>
            <List>
              {actors.map((actor, index) => {
                if (index <= MAX_CAST_LENGTH) {
                  return (
                    <ListItem key={actor.id} sx={{ padding: "0" }}>
                      <ListItemText>{actor.name}</ListItemText>
                    </ListItem>
                  );
                }
                return null;
              })}
            </List>
          </Box>

          <Box>
            <Typography sx={{ fontSize: "34px", marginBottom: "24px" }}>
              Детали
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ width: "200px", marginRight: "10px" }}>
                Страна
              </Typography>
              <Typography>{filmInfo.production_countries[0].name}</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ width: "200px", marginRight: "10px" }}>
                Год
              </Typography>
              <Typography>{releaseDate}</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ width: "200px", marginRight: "10px" }}>
                Жанр
              </Typography>
              <Typography>{filmInfo.genres[0].name}</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ width: "200px", marginRight: "10px" }}>
                Сборы
              </Typography>
              <Typography sx={{ width: "200px", marginRight: "10px" }}>
                {filmInfo.revenue / 1000000} млн $
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ width: "200px", marginRight: "10px" }}>
                Длительность
              </Typography>
              <Typography>{filmInfo.runtime} мин.</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ width: "200px", marginRight: "10px" }}>
                Рейтинг
              </Typography>
              <Typography>{filmInfo.vote_average}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  }
}
