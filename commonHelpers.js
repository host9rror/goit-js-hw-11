import{S as u,i as y}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function h(i){const o="43068097-aa3ed59823608d0655ab40c7d",s="https://pixabay.com/api/",n={method:"GET"},e=new URLSearchParams({key:o,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${s}?${e.toString()}`;return fetch(r,n).then(t=>{if(!t.ok)throw new Error("Error");return t.json()}).then(t=>{if(t.totalHits===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t.hits}).catch(t=>(console.error(t),null))}new u(".gallery-link",{captionsData:"alt",captionDelay:250});function m(i){if(!Array.isArray(i)){console.error("Data is not an array or is undefined");return}const o=i.map(({webformatURL:s,largeImageURL:n,tags:e,likes:r,views:t,comments:a,downloads:c})=>`<li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img
            src="${s}"
            data-source="${n}"
            alt="${e}"
          />
          <ul class="gallery-description">
            <li class="gallery-dscr_item"><h3>Likes</h3><p>${r}</p></li>
            <li class="gallery-dscr_item"><h3>Views</h3><p>${t}</p></li>
            <li class="gallery-dscr_item"><h3>Comments</h3><p>${a}</p></li>
            <li class="gallery-dscr_item"><h3>Downloads</h3><p>${c}</p></li>
          </ul>
        </a>
      </li>`).join("");galleryImages.innerHTML=o}const p=document.querySelector("#search-form"),d=document.querySelector(".gallery"),l=document.querySelector(".progress");l.style.display="none";p.addEventListener("submit",i=>{i.preventDefault(),d.innerHTML="";const o=i.target.querySelector("#search-input").value.trim();o&&(l.style.display="flex",h(o).then(s=>{s&&s.hits&&s.hits.length===0?y.error({title:"❌",icon:"",message:"Sorry, there are no images matching your search query. Please, try again!"}):m(s.hits),l.style.display="none"}).catch(s=>{console.error(s),l.style.display="none"})),i.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
