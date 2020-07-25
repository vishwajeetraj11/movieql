import fetch from "node-fetch"

const API_URL = "https://yts.mx/api/v2/list_movies.json"


export const getMovies =(limit, rating) => {

  let req_url = API_URL;

  if(limit > 0) {
    req_url += `?limit=${limit}`;
  }
  console.log(rating)
  if(rating > 0) {
    if(limit){
      req_url += `&minimum_rating=${rating}`;
    } else 
    req_url += `?minimum_rating=${rating}`;

  }

  console.log(req_url)

  return fetch(`${req_url}`)
  .then(res => res.json())
  .then(json => json.data.movies);

}
