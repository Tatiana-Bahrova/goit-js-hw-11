import{i as c,S as u}from"./assets/vendor-B07T6_gy.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const f=r=>`
  <li class="gallery-card">
  <a href="${r.largeImageURL}" class="gallery-link">
  <img src="${r.webformatURL}" alt="${r.tags}" class="gallery-img" />
  </a>
  <ul class='gallery-li'>
  <li class='gallery-li-info'>
  <span class="gallery-text">Likes</span>
  <span class="gallery-img-info">${r.likes}</span>
  </li>
  <li class='gallery-li-info'>
  <span class="gallery-text">Views</span>
  <span class="gallery-img-info">${r.views}</span>
  </li>
  <li class='gallery-li-info'>
  <span class="gallery-text">Comments</span>
   <span class="gallery-img-info">${r.comments}</span>
   </li>
  <li class='gallery-li-info'>
  <span class="gallery-text">Downloads</span>
  <span class="gallery-img-info">${r.downloads}</span>
  </li>
</ul>
</li>
    `,p="https://pixabay.com/api/",y=r=>{const l=new URLSearchParams({key:"45736267-1794b9732fa70958098f9f4da",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${l}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},n=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),i=document.querySelector(".js-loader"),g=r=>{r.preventDefault();const l=n.elements.user_query.value;i.classList.remove("is-hidden"),y(l).then(t=>{t.total===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!"});const a=t.hits.map(s=>f(s)).join("");d.innerHTML=a,new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}).catch(t=>{console.log(t)}),i.classList.add("is-hidden"),n.reset()};n.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
