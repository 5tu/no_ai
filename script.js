
function searchGoogleImages() {
  const searchTerm = document.getElementById('searchTerm').value;
  const query = searchTerm + '  -"ai" -"stable diffusion" -"midjourney" -"open art" -"prompt hunt" -"realistic vision" -site:impossibleimages.ai -site:impossibleimages.ai -site:freewayml.com -site:runwayml.com';
  const googleImagesSearchURL = generateGoogleImagesSearchURL(query);
  console.log(googleImagesSearchURL, '_blank');
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