// ui.js

/**
 * Render a list of products with details (title, image, price, rating)
 * @param {Array} productList 
 */
export function renderProducts(productList) {
  const container = document.getElementById('productsContainer');
  if (!container) return;

  container.innerHTML = ''; // Clear previous content

  productList.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product-card'); // unified class name

    div.innerHTML = `
      <h3>${product.title}</h3>
      ${product.image ? `<img src="${product.image}" alt="${product.title}" />` : ''}
      <p>Price: ${product.price || 'N/A'}</p>
      <p>Rating: ${product.rating || 'N/A'}</p>
    `;

    container.appendChild(div);
  });
}

/**
 * Show an error message inside the products container
 * @param {string} message 
 */
export function showError(message) {
  const container = document.getElementById('productsContainer');
  if (!container) return;

  container.innerHTML = `<p style="color: red;">${message}</p>`;
}
