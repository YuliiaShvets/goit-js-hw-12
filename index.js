import{a as y,S as f,i}from"./assets/vendor-tnUJPedx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const L="47416000-07f62798ea171a7bceefd88a8",b="https://pixabay.com/api/",w=15;async function d(s,r=1,o=15){const a={key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:w};try{return(await y(b,{params:a})).data}catch{throw new Error("Error fetching images")}}function c(s){const r=document.querySelector(".gallery"),o=s.map(({webformatURL:a,largeImageURL:e,tags:t,likes:l,views:u,comments:p,downloads:h})=>`
    <li class="gallery-item">
    <a href="${e}">
    <img class="gallery-image" src="${a}", alt="${t}" width="360px" >
    </a>

        <ul class="image-description">
        <li class="gallery-img-item">
            <h2 class="title-img">Likes</h2>
            <p class="likes-img">${l}</p>
        </li>
        <li class="gallery-img-item">
            <h2 class="title-img">Views</h2>
            <p class="likes-img">${u}</p>
        </li>
        <li class="gallery-img-item">
            <h2 class="title-img">Comments</h2>
            <p class="likes-img">${p}</p>
        </li>
        <li class="gallery-img-item">
            <h2 class="title-img">Downloads</h2>
            <p class="likes-img">${h}</p>
        </li>
    </ul>
    </li>
    `).join("");r.innerHTML=o}const g=new f(".gallery a",{captionsData:"alt",captionDelay:250}),E=document.querySelector("#search-form"),m=document.querySelector(".load-more"),n=document.querySelector("#loader");E.addEventListener("submit",P);async function P(s){s.preventDefault(),gallery.innerHTML="";let r=s.target.elements["search-input"];const o=r.value.trim();if(!o){i.show({title:"",backgroundColor:"red",message:"Enter the data for the search!",position:"topRight"});return}try{n.style.display="block",d(o).then(a=>{a.hits.length===0&&i.show({title:"",backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c(a.hits,gallery),g.refresh(),r.value="",n.style.display="none"})}catch(a){console.log(a),gallery.insertAdjacentHTML("beforeend",c(res.hits)),g.refresh(),r.value="",n.style.display="none"}}m.addEventListener("click",S);async function S(){page+=1;try{toggleLoader(!0);const s=await d(query,page);renderGallery(s.hits),scrollPage(),page*15>=totalHits&&(i.info({message:"We're sorry, but you've reached the end of search results."}),toggleLoadMoreButton(!1))}catch{i.error({message:"Failed to load more images. Please try again later."})}finally{toggleLoader(!1)}}m.classList.replace("load-more-hidden","load-more");
//# sourceMappingURL=index.js.map
