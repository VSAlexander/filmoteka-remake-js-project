var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in s)return s[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return s[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,s){n[e]=s},e.parcelRequired7c6=t),t("hzVFV");const i=document.querySelector(".watched");window.addEventListener("storage",(e=>{"watchedMovies"===e.key&&(console.log("Hello"),function(){const e=JSON.parse(localStorage.getItem("watchedMovies"))||[];i.innerHTML=e.reverse().map((e=>`\n        <li class="movies-list__item" data-modal-open>\n          <div class="movies-list__item-thumb">${e.image_thumb}</div>\n          <div class="movies-list__item-caption">\n            <h2 class="movies-list__item-title">${e.title}</h2>\n            <p class="movies-list__item-info">${e.genres} | ${e.release_date}\n              <span class="rating">${e.vote}</span>\n            </p>\n          </div>\n          <span class="vote_count hidden">${e.votes}</span>\n          <span class="popularity hidden">${e.popularity}</span>\n          <span class="genres hidden">${e.genres}</span>\n          <span class="overview hidden">${e.overview}</span>\n          <span class="original_title hidden">${e.original_title}</span>\n          <span class="release_date hidden">${e.release_date}</span>\n        </li>\n      `)).join(""),console.log("Watched movies HTML:")}())}));const a=document.getElementById("watchedBtn"),l=document.getElementById("queueBtn"),o=document.querySelector(".watched.movies-list"),d=document.querySelector(".queue.movies-list");a.classList.add("active"),o.style.display="flex",d.style.display="none",a.addEventListener("click",(()=>{a.classList.add("active"),l.classList.remove("active"),o.style.display="flex",d.style.display="none"}));var c=t("hzVFV");const r=document.querySelector(".backdrop"),p=document.querySelector(".queue.movies-list");function v(){const e=JSON.parse(localStorage.getItem("queueMovies"))||[];p.innerHTML=e?.reverse()?.map((e=>`\n        <li class="movies-list__item" data-modal-open>\n          <div class="movies-list__item-thumb">${e.image_thumb}</div>\n          <div class="movies-list__item-caption">\n            <h2 class="movies-list__item-title">${e.title}</h2>\n            <p class="movies-list__item-info">${e.genres} | ${e.release_date}\n              <span class="rating">${e.vote}</span>\n            </p>\n          </div>\n          <span class="vote_count hidden">${e.votes}</span>\n          <span class="popularity hidden">${e.popularity}</span>\n          <span class="genres hidden">${e.genres}</span>\n          <span class="overview hidden">${e.overview}</span>\n          <span class="original_title hidden">${e.original_title}</span>\n          <span class="release_date hidden">${e.release_date}</span>\n        </li>\n      `)).join("")}window.addEventListener("storage",v),r.classList.contains("is-hidden")&&v();const m=document.getElementById("watchedBtn"),u=document.getElementById("queueBtn"),_=document.querySelector(".watched.movies-list"),h=document.querySelector(".queue.movies-list");u.addEventListener("click",(()=>{u.classList.add("active"),m.classList.remove("active"),_.style.display="none",h.style.display="flex"})),p.addEventListener("click",(e=>{const s=e.target.closest("[data-modal-open]");s&&(0,c.openModal)(s)})),t("3sLj0"),t("04jNI"),t("ipUyS");
//# sourceMappingURL=library.2a6dfcfb.js.map
