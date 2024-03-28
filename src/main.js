import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

import { imageSearch } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions";

const searchForm = document.querySelector('#search-form');
const galleryImages = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', event => {
    event.preventDefault();

    galleryImages.innerHTML = '';
    const query = event.target.querySelector('#search-input').value.trim();

    if (query) {
        // Показываем лоадер перед началом поиска
        loader.classList.add('loading'); // Добавляем класс "loading", чтобы лоадер начал крутиться

        imageSearch(query)
          .then(data => {
            if (data === null) {
                iziToast.error({
                  position: "topRight",
                  title: '❌',
                  icon: '',
                  message: "Sorry, there are no images matching your search query. Please try again!",
                });
            } else {
                renderImages(data.hits, galleryImages);
            }
          })
          .catch(error => {
            console.error(error);
          })
          .finally(() => {
            // Скрываем лоадер после завершения всех операций (независимо от результата)
            loader.classList.remove('loading'); // Убираем класс "loading", чтобы лоадер перестал крутиться
          });
    } 
    event.target.reset();
})
