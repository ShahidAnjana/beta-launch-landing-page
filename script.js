// Run this function once the page has fully loaded
window.onload = function () {

  // Select the <footer> element from the page
  const footer = document.querySelector("footer");

  // Define the expected footer text that should be present
  const expectedText = "Landing Page Showcase by Muhammad Shahid";

  // Check if the footer is missing OR the expected text is not found
  if (!footer || !footer.innerHTML.includes(expectedText)) {
    
    // If footer is removed or modified, redirect to the original landing page showcase
    window.location.href = "https://shahidanjana.github.io/landing-page-showcase/";
  }
};