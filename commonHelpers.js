import{a as h,S as b,i}from"./assets/vendor-b11e2a50.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const w="45022873-80f77178c96ea8fdbff7ba9f5";async function L(o,r=1,s=15,n="photo",e="horizontal",t=!0){try{return(await h.get("https://pixabay.com/api/",{params:{key:w,q:o,image_type:n,orientation:e,safesearch:t,page:r,per_page:s}})).data}catch(a){throw new Error(a.message)}}function v(o){const r=document.querySelector(".gallery"),s=o.map(({webformatURL:n,largeImageURL:e,tags:t,likes:a,views:m,comments:g,downloads:y})=>`
        <div class="gallery-item">
          <a href="${e}">
            <img src="${n}" alt="${t}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes</b><span>${a}</span></p>
            <p><b>Views</b><span>${m}</span></p>
            <p><b>Comments</b><span>${g}</span></p>
            <p><b>Downloads</b><span>${y}</span></p>
          </div>
        </div>
    `);r.innerHTML+=s.join(""),new b(".gallery-item a",{captionsData:"alt",captionDelay:250}).refresh()}const x=document.querySelector("#search"),q=document.querySelector(".gallery"),d=document.querySelector(".loader"),S=document.querySelector(".next-page"),f=document.querySelector(".next-page-box");let c=1,l=0,u="";x.addEventListener("submit",$);S.addEventListener("click",I);async function $(o){if(o.preventDefault(),u=o.currentTarget.elements.searchQuery.value.toLowerCase(),u==""){i.error({title:"Error",message:"Please enter a search query!"});return}await p(!0)}async function I(){await p()}async function p(o=!1){d.classList.add("loader-show"),f.classList.remove("next-page-show"),o?(c=1,l=0,q.innerHTML=""):c++;try{const r=await L(u,c);if(r.hits.length==0)i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"});else{l+=r.hits.length,v(r.hits);const s=document.querySelector(".gallery-item");s&&window.scrollBy({top:s.getBoundingClientRect().height*2,behavior:"smooth"}),r.totalHits<=l?i.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}):f.classList.add("next-page-show")}}catch(r){i.error({title:"Error",message:`Something went wrong: ${r.message}`})}finally{d.classList.remove("loader-show")}}
//# sourceMappingURL=commonHelpers.js.map
