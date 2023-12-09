import { BASE_URL } from './../Constant/Constant.jsx';

export const fetchProducts = async () => {
  try {
    const response = await fetch(BASE_URL);
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};