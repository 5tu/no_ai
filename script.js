// Load the exclusion terms from a CSV file
function loadExclusionTerms() {
  return fetch('exclusion_terms.csv')
    .then(response => response.text())
    .then(csvText => {
      const parsedData = Papa.parse(csvText, { header: false });
      return parsedData.data.flat();
    });
}

async function searchGoogleImages(event) {
  event.preventDefault();  // Prevent form submission and page reload
  const searchTerm = document.getElementById('searchTerm').value;
  const exclusionTerms = await loadExclusionTerms();
  const exclusionQuery = exclusionTerms.map(term => `-"${term}"`).join(' ');
  const query = `${searchTerm} ${exclusionQuery}`;
  const googleImagesSearchURL = generateGoogleImagesSearchURL(query);
  window.open(googleImagesSearchURL, '_blank');
}

function generateGoogleImagesSearchURL(query) {
  const baseGoogleImagesURL = "https://www.google.com/search?tbm=isch&q=";
  const encodedQuery = encodeURIComponent(query);
  const dropdownSize = document.getElementById('imageSize');
  const selectedImageSizeValue = dropdownSize.value;
  const dropdownSafeSearch = document.getElementById('safeSearch');
  const selectedSafeSearchValue = dropdownSafeSearch.value;
  return `${baseGoogleImagesURL}${encodedQuery}${selectedImageSizeValue}${selectedSafeSearchValue}`;
}