import axios from "axios";

const api = axios.create({
  baseURL: "https://teyah-nc-games-app.herokuapp.com/",
});

export const fetchReviewsByCategory = (category) => {
  return api.get(`/api/reviews?category=${category}`);
};
export const fetchReviews = () => {
  return api.get("/api/reviews");
};
export const fetchCategories = () => {
  return api.get("/api/categories");
};

export const fetchReviewById = (review_id) => {
  return api.get(`/api/reviews/${review_id}`);
};

//add catch?
