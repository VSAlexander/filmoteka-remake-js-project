const e=document.querySelector("[data-modal]"),t=e.querySelector(".button-watched-modal");let n=JSON.parse(localStorage.getItem("watchedMovies"))||[];function o(){!function(){const s={image_thumb:e.querySelector(".image-thumb").innerHTML,title:e.querySelector(".movie-header").textContent,release_date:e.querySelector(".release_date-modal").textContent,vote:e.querySelector(".vote").textContent,genres:e.querySelector(".genres-modal").textContent,votes:e.querySelector(".votes").textContent,popularity:e.querySelector(".popularity-modal").textContent,overview:e.querySelector(".overview-modal").textContent,original_title:e.querySelector(".original_title-modal").textContent};n.push(s),localStorage.setItem("watchedMovies",JSON.stringify(n)),t.textContent="Delete from watched",t.removeEventListener("click",o),t.addEventListener("click",i)}();const s=new Event("watchedAdd");window.dispatchEvent(s)}function i(){const s=e.querySelector(".movie-header").textContent;n=n.filter((e=>e.title!==s)),localStorage.setItem("watchedMovies",JSON.stringify(n)),t.textContent="Add to watched",t.removeEventListener("click",i),t.addEventListener("click",o);const l=new Event("watchedDelete");window.dispatchEvent(l),"/library.html"===document.location.pathname&&v()}t.addEventListener("click",o);const s=document.querySelector("[data-modal]"),l=s.querySelector(".button-queue-modal");let a=JSON.parse(localStorage.getItem("queueMovies"))||[];function r(){!function(){const e={image_thumb:s.querySelector(".image-thumb").innerHTML,title:s.querySelector(".movie-header").textContent,release_date:s.querySelector(".release_date-modal").textContent,vote:s.querySelector(".vote").textContent,genres:s.querySelector(".genres-modal").textContent,votes:s.querySelector(".votes").textContent,popularity:s.querySelector(".popularity-modal").textContent,overview:s.querySelector(".overview-modal").textContent,original_title:s.querySelector(".original_title-modal").textContent};a.push(e),localStorage.setItem("queueMovies",JSON.stringify(a)),l.textContent="Delete from queue",l.removeEventListener("click",r),l.addEventListener("click",d)}();const e=new Event("queueAdd");window.dispatchEvent(e)}function d(){const e=s.querySelector(".movie-header").textContent;a=a.filter((t=>t.title!==e)),localStorage.setItem("queueMovies",JSON.stringify(a)),l.textContent="Add to queue",l.removeEventListener("click",d),l.addEventListener("click",r);const t=new Event("queueDelete");window.dispatchEvent(t),"/library.html"===document.location.pathname&&v()}l.addEventListener("click",r);const c=document.querySelector("body"),u=document.querySelector(".backdrop");function m(e){document.body.style.overflow="hidden",c.classList.add("modal-open"),u.classList.remove("is-hidden");const s=e.querySelector(".movies-list__item-thumb").innerHTML,m=e.querySelector(".movies-list__item-title").textContent,v=e.querySelector(".vote_count").textContent,y=e.querySelector(".rating").textContent,p=e.querySelector(".popularity").textContent,h=e.querySelector(".original_title").textContent,q=e.querySelector(".genres").textContent,S=e.querySelector(".overview").textContent,w=e.querySelector(".release_date").textContent;document.querySelector(".image-thumb").innerHTML=s,document.querySelector(".movie-header").innerHTML=m,document.querySelector(".vote").innerHTML=y,document.querySelector(".votes").innerHTML=v,document.querySelector(".popularity-modal").innerHTML=p,document.querySelector(".original_title-modal").innerHTML=h,document.querySelector(".genres-modal").innerHTML=q,document.querySelector(".overview-modal").innerHTML=S,document.querySelector(".release_date-modal").innerHTML=w;const g=n.some((e=>e.title===m)),L=a.some((e=>e.title===m));g?(t.textContent="Delete from watched",t.addEventListener("click",i)):(t.textContent="Add to watched",t.addEventListener("click",o)),L?(l.textContent="Delete from queue",l.addEventListener("click",d)):(l.textContent="Add to queue",l.addEventListener("click",r))}function v(){document.body.style.overflow="auto",c.classList.remove("modal-open"),u.classList.add("is-hidden")}document.querySelector(".movies-list").addEventListener("click",(e=>{const t=e.target.closest("[data-modal-open]");t&&m(t)})),document.addEventListener("click",(e=>{(e.target.matches("[data-modal-close]")||e.target.matches(".backdrop"))&&v()})),document.addEventListener("keydown",(e=>{c.classList.contains("modal-open")&&"Escape"===e.key&&v()}));const y=document.querySelector(".watched");function p(){0!==n.length?y.innerHTML=n.reverse().map((e=>`\n        <li class="movies-list__item" data-modal-open>\n          <div class="movies-list__item-thumb">${e.image_thumb}</div>\n          <div class="movies-list__item-caption">\n            <h2 class="movies-list__item-title">${e.title}</h2>\n            <p class="movies-list__item-info">${e.genres} | ${e.release_date}\n              <span class="rating">${e.vote}</span>\n            </p>\n          </div>\n          <span class="vote_count hidden">${e.votes}</span>\n          <span class="popularity hidden">${e.popularity}</span>\n          <span class="genres hidden">${e.genres}</span>\n          <span class="overview hidden">${e.overview}</span>\n          <span class="original_title hidden">${e.original_title}</span>\n          <span class="release_date hidden">${e.release_date}</span>\n        </li>\n      `)).join(""):y.innerHTML="<h2 class='no-movies'>Nothing added to watched list yet</h2>"}window.addEventListener("watchedDelete",p),window.addEventListener("watchedAdd",p),p();const h=document.getElementById("watchedBtn"),q=document.getElementById("queueBtn"),S=document.querySelector(".watched.movies-list"),w=document.querySelector(".queue.movies-list");h.classList.add("active"),S.style.display="flex",w.style.display="none",h.addEventListener("click",(()=>{h.classList.add("active"),q.classList.remove("active"),S.style.display="flex",w.style.display="none"}));const g=document.querySelector(".queue.movies-list");function L(){0!==a.length?g.innerHTML=a?.reverse()?.map((e=>`\n        <li class="movies-list__item" data-modal-open>\n          <div class="movies-list__item-thumb">${e.image_thumb}</div>\n          <div class="movies-list__item-caption">\n            <h2 class="movies-list__item-title">${e.title}</h2>\n            <p class="movies-list__item-info">${e.genres} | ${e.release_date}\n              <span class="rating">${e.vote}</span>\n            </p>\n          </div>\n          <span class="vote_count hidden">${e.votes}</span>\n          <span class="popularity hidden">${e.popularity}</span>\n          <span class="genres hidden">${e.genres}</span>\n          <span class="overview hidden">${e.overview}</span>\n          <span class="original_title hidden">${e.original_title}</span>\n          <span class="release_date hidden">${e.release_date}</span>\n        </li>\n      `)).join(""):g.innerHTML="<h2 class='no-movies'>Nothing added to queue list yet</h2>"}window.addEventListener("queueDelete",L),window.addEventListener("queueAdd",L),L();const _=document.getElementById("watchedBtn"),E=document.getElementById("queueBtn"),x=document.querySelector(".watched.movies-list"),C=document.querySelector(".queue.movies-list");E.addEventListener("click",(()=>{E.classList.add("active"),_.classList.remove("active"),x.style.display="none",C.style.display="flex"})),g.addEventListener("click",(e=>{const t=e.target.closest("[data-modal-open]");t&&m(t)}));const f=document.querySelector(".footer");let k=0;window.addEventListener("scroll",(()=>{const e=window.scrollY;e>k?f.classList.add("footer--hidden"):f.classList.remove("footer--hidden"),k=e}));const b=document.querySelector("#btn-up");window.addEventListener("scroll",(()=>{window.scrollY>window.innerHeight/2?b.classList.add("btn-up--active"):b.classList.remove("btn-up--active")})),b.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}));
//# sourceMappingURL=library.8d311f41.js.map
