import { getFlipkartProductHistory } from './apiManager.js';
import { showError, renderProducts } from './ui.js';

const key = '8289fc3e20msh0c7af6205ea7e1ap1670a8jsn1edd5324cce2';  // API key

// Load and render Flipkart product history
async function loadProductHistory(pid) {
  try {
    const productList = await getFlipkartProductHistory(pid);
    renderProducts(productList);
  } catch (error) {
    showError(`Error fetching product history: ${error.message}`);
  }
}

// Use key as pid for now
loadProductHistory(key);

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent menu closing immediately
    navLinks.classList.toggle('show');
  });

  // Close menu when clicking outside of it
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('show');
    }
  });
});
