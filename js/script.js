function searchGoogleImages() {
    const searchTerm = document.getElementById('searchTerm').value;
    const query = searchTerm + '  -"ai" -"stable diffusion" -"midjourney" -"open art" -"prompt hunt" -"realistic vision"';
    const googleImagesSearchURL = generateGoogleImagesSearchURL(query);
    console.log(googleImagesSearchURL, '_blank');
    window.open(googleImagesSearchURL, '_blank');
  }
  
  function generateGoogleImagesSearchURL(query) {
    const baseGoogleImagesURL = "https://www.google.com/search?tbm=isch&q=";
    const encodedQuery = encodeURIComponent(query);
    return `${baseGoogleImagesURL}${encodedQuery}`;
  }