import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

import { imageSearch } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions";

const searchForm = document.querySelector('#search-form');
const galleryImages = document.querySelector('.gallery');
const loadMove = document.querySelector('.progress');
loadMove.style.display = 'none';

searchForm.addEventListener('submit', event => {
    event.preventDefault();

    galleryImages.innerHTML = '';
    const query = event.target.querySelector('#search-input').value.trim();

    if (query) {
        loadMove.style.display = 'flex';

        imageSearch(query)
          .then(data => {
            if (data && data.hits && data.hits.length === 0) {
                iziToast.error({
                  title: '❌',
                  icon: '',
                  message: `Sorry, there are no images matching your search query. Please, try again!`,
                });
              } else {
                renderImages(data.hits);
              }
              loadMove.style.display = 'none';
          })
          .catch(error => {
            console.error(error);
            loadMove.style.display = 'none';
          });
    } 
    event.target.reset();
})



