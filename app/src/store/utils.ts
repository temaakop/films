export function getSearchedFilmsApi(searchText: string) {
  const searchName = `query=${searchText}`;
  const url = `https://api.themoviedb.org/3/search/movie?${searchName}&include_adult=false&language=ru-US&page=1`;
  return url;
}
