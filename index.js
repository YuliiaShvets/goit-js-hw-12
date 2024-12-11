import{a as L,S as E,i as d}from"./assets/vendor-D0cagnvz.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const w="47416000-07f62798ea171a7bceefd88a8",S="https://pixabay.com/api/",y=15;async function g(r,o){const a={key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:y};try{return(await L(S,{params:a})).data}catch{throw new Error("Error fetching images")}}function m(r){const o=r.map(({webformatURL:a,largeImageURL:t,tags:e,likes:s,views:i,comments:f,downloads:b})=>`
    <li class="gallery-item">
    <a href="${t}">
    <img class="gallery-image" src="${a}", alt="${e}" width="360px" >
    </a>

        <ul class="image-description">
        <li class="gallery-img-item">
            <h2 class="title-img">Likes</h2>
            <p class="likes-img">${s}</p>
        </li>
        <li class="gallery-img-item">
            <h2 class="title-img">Views</h2>
            <p class="likes-img">${i}</p>
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
    `).join("");gallery.insertAdjacentHTML("beforeend",o)}const k=new E(".gallery a",{captionsData:"alt",captionDelay:250}),P=document.querySelector("#search-form"),l=document.querySelector(".load-more"),c=document.querySelector("#loader"),p=document.querySelector(".gallery");l.style.display="none";let u="",n=1,h=0;P.addEventListener("submit",$);async function $(r){r.preventDefault(),p.innerHTML="",c.style.display="block";const a=r.target.elements["search-input"].value.trim();if(u=a,!a){d.show({title:"",backgroundColor:"red",message:"Enter the data for the search!",position:"topRight"});return}try{n=1;const t=await g(a,n);t.hits.length===0&&d.show({title:"",backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m(t.hits,p),k.refresh(),c.style.display="none",h=t.totalHits,t.hits.length<y?l.style.display="none":l.style.display="block"}catch(t){console.log(t),c.style.display="none",l.style.display="none"}}l.addEventListener("click",q);async function q(){n+=1,l.style.display="block",c.style.display="block";try{const r=await g(u,n);n*y>=h?(m(r.hits),d.info({message:"We're sorry, but you've reached the end of search results."}),l.style.display="none"):(m(r.hits),l.style.display="block")}catch{l.style.display="none",d.error({message:"Failed to load more images. Please try again later."})}finally{}}
//# sourceMappingURL=index.js.map
