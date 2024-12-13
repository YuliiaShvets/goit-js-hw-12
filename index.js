import{a as L,S as P,i as d}from"./assets/vendor-D0cagnvz.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const S="47416000-07f62798ea171a7bceefd88a8",k="https://pixabay.com/api/",g=15;async function u(t,l){const o={key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:l,per_page:g};try{return(await L(k,{params:o})).data}catch{throw new Error("Error fetching images")}}function y(t){const l=t.map(({webformatURL:o,largeImageURL:s,tags:e,likes:r,views:n,comments:w,downloads:E})=>`
    <li class="gallery-item">
    <a href="${s}">
    <img class="gallery-image" src="${o}", alt="${e}" width="360px" >
    </a>

        <ul class="image-description">
        <li class="gallery-img-item">
            <h2 class="title-img">Likes</h2>
            <p class="likes-img">${r}</p>
        </li>
        <li class="gallery-img-item">
            <h2 class="title-img">Views</h2>
            <p class="likes-img">${n}</p>
        </li>
        <li class="gallery-img-item">
            <h2 class="title-img">Comments</h2>
            <p class="likes-img">${w}</p>
        </li>
        <li class="gallery-img-item">
            <h2 class="title-img">Downloads</h2>
            <p class="likes-img">${E}</p>
        </li>
    </ul>
    </li>
    `).join("");gallery.insertAdjacentHTML("beforeend",l)}function p(){const{height:t}=gallery.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}const m=new P(".gallery a",{captionsData:"alt",captionDelay:250}),$=document.querySelector("#search-form"),i=document.querySelector(".load-more"),a=document.querySelector("#loader"),h=document.querySelector(".gallery");i.style.display="none";let f="",c=1,b=0;$.addEventListener("submit",q);async function q(t){t.preventDefault(),h.innerHTML="",a.style.display="block";const o=t.target.elements["search-input"].value.trim();if(f=o,!o){d.show({title:"",backgroundColor:"red",message:"Enter the data for the search!",position:"topRight"});return}try{c=1;const s=await u(o,c);s.hits.length===0&&d.show({title:"",backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),y(s.hits,h),m.refresh(),a.style.display="none",b=s.totalHits,s.hits.length<g?i.style.display="none":i.style.display="block"}catch(s){console.log(s),a.style.display="none",i.style.display="none"}}i.addEventListener("click",v);async function v(){c+=1,i.style.display="block",a.style.display="block";try{const t=await u(f,c);c*g>=b?(y(t.hits),m.refresh(),p(),d.info({message:"We're sorry, but you've reached the end of search results."}),i.style.display="none",a.style.display="none"):(y(t.hits),m.refresh(),i.style.display="block",p(),a.style.display="none")}catch{i.style.display="none",a.style.display="none",d.error({message:"Failed to load more images. Please try again later."})}finally{}}
//# sourceMappingURL=index.js.map
