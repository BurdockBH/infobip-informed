import axios from 'axios';

export const getArticlesData = (controller: any) => {
  return axios.get('http://localhost:8000/articles', { signal: controller.signal });
};

export const getCategoriesData = (controller: any) => {
  return axios.get('http://localhost:8000/categories', { signal: controller.signal });
};

export const getHeadArticleData = (controller: any) => {
  return axios.get('http://localhost:8000/head-article', { signal: controller.signal });
};

export const postComment = () => {
  return axios.post('http://localhost:8000/comment');
};
