// apiManager.js

const key = 'c4924c95d7msh455aa757422697bp10b2b0jsn6485e566d80b';
const host = 'flipkart-apis.p.rapidapi.com';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': host,
    'x-rapidapi-key': key
  }
};

/**
 * Fetch product price and stock history from Flipkart
 * @param {string} pid - product id
 * @returns {Promise<Array>} - history data
 */
export async function getFlipkartProductHistory(pid) {
  const url =  'https://flipkart-apis.p.rapidapi.com/backend/rapidapi/product-history-details?pid=${pid}';


 try {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  const data = await response.json();
  // Adjust according to actual API response structure
  return data.history || [];
} catch (error) {
  // Get the container div by ID
  const container = document.getElementById('productsContainer');
  if (container) {
    container.innerHTML = `<p style="color: red;">Error fetching product history: ${error.message}</p>`;
  }
  return [];
}
}