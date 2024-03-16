import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPhotos = async (page: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/photos?_page=${page}&_limit=20`);
    return response.data;
  } catch (error) {
    // Handle any errors (e.g., network error, API error)
    console.error('Error fetching photos:', error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
};

export const fetchPosts = async (page: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts?_page=${page}&_limit=20`);
    return response.data;
  } catch (error) {
    // Handle any errors (e.g., network error, API error)
    console.error('Error fetching posts:', error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
};
