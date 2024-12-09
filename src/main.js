import { searchImages } from "./js/pixabay-api.js"
import { renderImages } from "./js/render-functions.js"
        
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
        
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
        
        
const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
                    });

const form = document.querySelector('#search-form');
const loadMoreButton = document.querySelector('.load-more');
const loader = document.querySelector('#loader');


form.addEventListener("submit", handleSearch);

async function handleSearch(event) {
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

    try {
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
    }

        catch(error) {
            console.log(error)
            gallery.insertAdjacentHTML("beforeend", renderImages(res.hits));
            lightbox.refresh();
            inputElement.value = "";
            loader.style.display = "none";
        }
    }

loadMoreButton.addEventListener('click', onLoadMore);

async function onLoadMore() {
    page += 1;

    try {
        toggleLoader(true);
        const data = await searchImages(query, page);

        renderGallery(data.hits);
        scrollPage();


        const loadedImages = page * 15;
        if (loadedImages >= totalHits) {
            iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
            toggleLoadMoreButton(false);
        }
    } catch (error) {
        iziToast.error({ message: 'Failed to load more images. Please try again later.' });
    } finally {
        toggleLoader(false);
    }
    
}

loadMoreButton.classList.replace("load-more-hidden", "load-more")