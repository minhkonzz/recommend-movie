import axios from "axios";

export const fetchOnce = async(url) => {
  const response = await axios.get(url); 
  return response.data;
}

export const fetchAll = async(urls) => {
  const responses = await axios.all(urls.map((url) => axios.get(url))); 
  return responses.map((response) => response.data);
}