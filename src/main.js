import { searchImages } from "./js/pixabay-api"
import { renderImages } from "./js/render-functions"


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a', {
                captionsData: 'alt',
                captionDelay: 250,
            });


const form = document.querySelector("#search-form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector("#loader")

form.addEventListener("submit", handleSearch);

function handleSearch(event) {
    event.preventDefault();
    gallery.innerHTML = "";
    let inputElement = event.target.elements["search-input"];
    const inputSearch = inputElement.value.trim();
    if (!inputSearch) {
        iziToast.show({
            title: '',
            backgroundColor: 'red',
            message: `Enter the data for the search!`,
            position: 'topRight',
        }
        );
        return;
    };
    loader.style.display = "block";
    searchImages(inputSearch)
        .then((res) => {
            if (res.hits.length === 0) {
                iziToast.show({
                    title: '',
                    backgroundColor: 'red',
                    message: `Sorry, there are no images matching your search query. Please try again!`,
                    position: 'topRight',
                })
            };
            renderImages(res.hits, gallery)
            lightbox.refresh();
            inputElement.value = "";
            loader.style.display = "none";
        })
        .catch((error) => {
            console.log(error)
            gallery.insertAdjacentHTML("beforeend", renderImages(res.hits));
            lightbox.refresh();
            inputElement.value = "";
            loader.style.display = "none";
        })
    }
