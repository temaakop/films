import { OPTIONS } from "./const";

export async function getUserInfo() {
  const url = "https://api.themoviedb.org/3/account/account_id";
  try {
    const request = await fetch(url, OPTIONS);
    const result = await request.json();
    return result;
  } catch (error) {
    return console.error();
  }
}
