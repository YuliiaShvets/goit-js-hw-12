export function renderImages(images) {
  const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <li class="gallery-item">
    <a href="${largeImageURL}">
    <img class="gallery-image" src="${webformatURL}", alt="${tags}" width="360px" >
    </a>

        <ul class="image-description">
        <li class="gallery-img-item">
            <h2 class="title-img">Likes</h2>
            <p class="likes-img">${likes}</p>
        </li>
        <li class="gallery-img-item">
            <h2 class="title-img">Views</h2>
            <p class="likes-img">${views}</p>
        </li>
        <li class="gallery-img-item">
            <h2 class="title-img">Comments</h2>
            <p class="likes-img">${comments}</p>
        </li>
        <li class="gallery-img-item">
            <h2 class="title-img">Downloads</h2>
            <p class="likes-img">${downloads}</p>
        </li>
    </ul>
    </li>
    `).join("");

    gallery.insertAdjacentHTML('beforeend', markup);
}



export function scrollPage() {
    const { height: cardHeight } = gallery.firstElementChild.getBoundingClientRect();
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
}

