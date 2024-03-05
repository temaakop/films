import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import { FilmDetails } from "../components/films/films-details";
import {
  selectFilmInfo,
  selectFilmCast,
  selectFilmDetailsLoading,
} from "../store/selectors";

import {
  fetchFilmCast,
  fetchFilmDetails,
  loadingDetails,
} from "../store/reducers/films-details";
import { Loading } from "../components/Loading";
import { AppDispatch } from "../store";

export function FilmPages() {
  const filmInfo = useSelector(selectFilmInfo);
  const actors = useSelector(selectFilmCast);
  const requestIsLoading = useSelector(selectFilmDetailsLoading);
  const dispatch = useDispatch<AppDispatch>();
  const { filmId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(loadingDetails(false));
      await dispatch(fetchFilmDetails(Number(filmId)));
      await dispatch(fetchFilmCast(Number(filmId)));
      dispatch(loadingDetails(true));
    };

    fetchData();
  }, [filmId, dispatch]);

  if (requestIsLoading) {
    return (
      <FilmDetails
        filmInfo={filmInfo}
        actors={actors}
        isLoading={requestIsLoading}
      />
    );
  }
  return <Loading />;
}
