export async function imageSearch(value) {
    const API = '43068097-aa3ed59823608d0655ab40c7d';
    const defaultURL = "https://pixabay.com/api/";
  
    const options = {
      method: 'GET',
    };
  
    const params = new URLSearchParams({
      key: API,
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true
    });
  
    const URL = `${defaultURL}?${params.toString()}`;

  
    return fetch(URL, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then(data => {
        if (data.totalHits === 0) {
          throw new Error("Sorry, there are no images matching your search query. Please try again!");
        }
        return data.hits;
      })
      .catch(error => {
        console.error(error);
        return null;
      });
  }

