import { PER_PAGE, searchImages } from "./js/pixabay-api.js"
import { renderImages, scrollPage } from "./js/render-functions.js"
        
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
const gallery = document.querySelector('.gallery');

loadMoreButton.style.display = 'none';


let INPUT_VALUE = '';
let page = 1;
let total_Hits = 0;

form.addEventListener("submit", handleSearch);

async function handleSearch(event) {
    event.preventDefault();
    gallery.innerHTML = "";

    loader.style.display = "block";

    let inputElement = event.target.elements["search-input"];
    const inputSearch = inputElement.value.trim();

    INPUT_VALUE = inputSearch;

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
        page = 1;
        const res = await searchImages(inputSearch, page);

            if (res.hits.length === 0) {
                iziToast.show({
                    title: '',
                    backgroundColor: 'red',
                    message: `Sorry, there are no images matching your search query. Please try again!`,
                    position: 'topRight',
                })
        };

            renderImages(res.hits, gallery);
            loader.style.display = "none";
            total_Hits = res.totalHits;

            if (res.hits.length < PER_PAGE) {
                loadMoreButton.style.display = "none"   
            }
            else {
                loadMoreButton.style.display = "block"   
            }
        }
    
        catch(error) {
            console.log(error)
            loader.style.display = "none";
            loadMoreButton.style.display = "none";
        }
    }

loadMoreButton.addEventListener('click', onLoadMore);

async function onLoadMore() {
    page += 1;
    loadMoreButton.style.display = "block";
    loader.style.display = "block";

    try {
        const data = await searchImages(INPUT_VALUE, page);

        const loadedImages = page * PER_PAGE;
        if (loadedImages >= total_Hits) {
            renderImages(data.hits);
            lightbox.refresh();
            scrollPage();
            iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
            loadMoreButton.style.display = "none";
            loader.style.display = "none";
        } else {
            renderImages(data.hits);
            lightbox.refresh();
            loadMoreButton.style.display = "block";
            scrollPage();
            loader.style.display = "none";
    } 
}

    catch (error) {
        loadMoreButton.style.display = "none";
        loader.style.display = "none";
        iziToast.error({ message: 'Failed to load more images. Please try again later.' });
    }
    finally {
}
}


