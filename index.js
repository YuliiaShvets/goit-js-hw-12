import{a as w,S as E,i as d}from"./assets/vendor-D0cagnvz.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const L="47416000-07f62798ea171a7bceefd88a8",P="https://pixabay.com/api/",y=15;async function p(t,o){const l={key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:y};try{return(await w(P,{params:l})).data}catch{throw new Error("Error fetching images")}}function m(t){const o=t.map(({webformatURL:l,largeImageURL:s,tags:e,likes:r,views:a,comments:f,downloads:b})=>`
    <li class="gallery-item">
    <a href="${s}">
    <img class="gallery-image" src="${l}", alt="${e}" width="360px" >
    </a>

        <ul class="image-description">
        <li class="gallery-img-item">
            <h2 class="title-img">Likes</h2>
            <p class="likes-img">${r}</p>
        </li>
        <li class="gallery-img-item">
            <h2 class="title-img">Views</h2>
            <p class="likes-img">${a}</p>
        </li>
        <li class="gallery-img-item">
            <h2 class="title-img">Comments</h2>
            <p class="likes-img">${f}</p>
        </li>
        <li class="gallery-img-item">
            <h2 class="title-img">Downloads</h2>
            <p class="likes-img">${b}</p>
        </li>
    </ul>
    </li>
    `).join("");gallery.insertAdjacentHTML("beforeend",o)}function S(){const{height:t}=gallery.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}const k=new E(".gallery a",{captionsData:"alt",captionDelay:250}),$=document.querySelector("#search-form"),i=document.querySelector(".load-more"),c=document.querySelector("#loader"),g=document.querySelector(".gallery");i.style.display="none";let h="",n=1,u=0;$.addEventListener("submit",q);async function q(t){t.preventDefault(),g.innerHTML="",c.style.display="block";const l=t.target.elements["search-input"].value.trim();if(h=l,!l){d.show({title:"",backgroundColor:"red",message:"Enter the data for the search!",position:"topRight"});return}try{n=1;const s=await p(l,n);s.hits.length===0&&d.show({title:"",backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m(s.hits,g),k.refresh(),c.style.display="none",u=s.totalHits,s.hits.length<y?i.style.display="none":i.style.display="block"}catch(s){console.log(s),c.style.display="none",i.style.display="none"}}i.addEventListener("click",v);async function v(){n+=1,i.style.display="block",c.style.display="block";try{const t=await p(h,n);n*y>=u?(m(t.hits),d.info({message:"We're sorry, but you've reached the end of search results."}),i.style.display="none"):(m(t.hits),i.style.display="block",S())}catch{i.style.display="none",d.error({message:"Failed to load more images. Please try again later."})}finally{}}
//# sourceMappingURL=index.js.map
