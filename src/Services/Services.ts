import axios from 'axios';

export const getArticlesData = (controller: any) => {
  return axios.get('http://localhost:8000/articles', { signal: controller.signal });
};

export const getCommentData = (controller: any, id: any) => {
  return axios.get(`http://localhost:8000/comments?id=${id}`, { signal: controller.signal });
};

export const postComment = (comment: any) => {
  return axios.post('http://localhost:8000/new-comment', comment);
};
