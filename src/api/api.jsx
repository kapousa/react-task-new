import axios from 'axios';

export const fetchData = async (endpoint, pageSize = 5, page = 1) => {
  const response = await axios.get(`https://dummyjson.com/${endpoint}?limit=${pageSize}&skip=${(page - 1) * pageSize}`);
  return response.data;
};
