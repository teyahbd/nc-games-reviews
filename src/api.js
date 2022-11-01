import axios from "axios";

const api = axios.create({
  baseURL: "https://teyah-nc-games-app.herokuapp.com/",
});

export const fetchReviews = () => {
  return api.get("/api/reviews");
};

//add catch?
