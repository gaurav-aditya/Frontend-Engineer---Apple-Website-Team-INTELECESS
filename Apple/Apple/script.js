// Add your JavaScript for interactivity
// For example, you can add animations or fetch data from a mock API

// Example: Smooth scroll on clicking the "Buy Now" button
document.querySelector('.btn-primary').addEventListener('click', function () {
    document.querySelector('.product-details').scrollIntoView({ behavior: 'smooth' });
});
