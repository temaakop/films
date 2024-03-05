export async function changeFavoriteFilms(
  accountId: string,
  isFavorite: boolean,
  movie_id: number,
) {
  const requestBody = {
    media_type: "movie",
    media_id: movie_id,
    favorite: isFavorite,
  };
  try {
    const request = await fetch(
      `https://api.themoviedb.org/3/account/${accountId}/favorite`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTY2NGM1ZTZlMzUxMzI4ZTliOWM3NmY3OTIyMDA1YSIsInN1YiI6IjY1NTUyMjhlNjdiNjEzNDVjYjRkYjFlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F_H6Vr13l2t3_2BbgC8pbMBcqo0jB2B_0mZC5vEFz6s",
        },
        body: JSON.stringify(requestBody),
      },
    );
    return request;
  } catch (error) {
    return console.error(error);
  }
}
