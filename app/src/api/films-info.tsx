import { OPTIONS } from "./const";

function getFilmInfoUrl(id: number) {
  return `https://api.themoviedb.org/3/movie/${id}?language=ru-US`;
}

export async function getFilmInfo(id: number) {
  const url = getFilmInfoUrl(id);
  try {
    const request = await fetch(url, OPTIONS);
    const requestJson = await request.json();
    return requestJson;
  } catch (error) {
    return console.error(error);
  }
}

function getActorsUrl(id: number) {
  return `https://api.themoviedb.org/3/movie/${id}/credits?language=ru-US`;
}
export async function getActors(id: number) {
  const url = getActorsUrl(id);
  try {
    const request = await fetch(url, OPTIONS);
    const requestJson = await request.json();
    return requestJson as string;
  } catch (error) {
    return console.error(error);
  }
}
