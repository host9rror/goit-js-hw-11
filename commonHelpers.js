import{S as f,i as m}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&l(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function p(i){const o="43068097-aa3ed59823608d0655ab40c7d",s="https://pixabay.com/api/",l={method:"GET"},e=new URLSearchParams({key:o,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${s}?${e.toString()}`;return fetch(r,l).then(t=>{if(!t.ok)throw new Error("Error");return t.json()}).then(t=>t.totalHits===0?null:t).catch(t=>t)}new f(".gallery-link",{captionsData:"alt",captionDelay:250});function h(i,o){if(!Array.isArray(i)){console.error(Error);return}const s=i.map(({webformatURL:l,largeImageURL:e,tags:r,likes:t,views:a,comments:u,downloads:d})=>`<li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img
            src="${l}"
            data-source="${e}"
            alt="${r}"
          />
          <ul class="gallery-description">
            <li class="gallery-desc-item"><div class="desc-info"><h3>Likes</h3><p>${t}</p></div></li>
            <li class="gallery-desc-item"><div class="desc-info"><h3>Views</h3><p>${a}</p></div></li>
            <li class="gallery-desc-item"><div class="desc-info"><h3>Comments</h3><p>${u}</p></div></li>
            <li class="gallery-desc-item"><div class="desc-info"><h3>Downloads</h3><p>${d}</p></div></li>
          </ul>
        </a>
      </li>`).join("");o?o.innerHTML=s:console.error(Error)}const y=document.querySelector("#search-form"),n=document.querySelector(".gallery"),c=document.querySelector(".loader");y.addEventListener("submit",i=>{i.preventDefault(),n.innerHTML="";const o=i.target.querySelector("#search-input").value.trim();o&&(c.classList.add("loading"),p(o).then(s=>{s===null?m.error({position:"topRight",title:"❌",icon:"",message:"Sorry, there are no images matching your search query. Please try again!"}):h(s.hits,n)}).catch(s=>{console.error(s)}).finally(()=>{c.classList.remove("loading")})),i.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
