/* empty css                      */import{S as n}from"./assets/vendor-dc05894a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l=document.querySelector(".swiper-button-prev"),c=document.querySelector(".swiper-button-next");new n(".mySwiper",{direction:"horizontal",loop:!0,spaceBetween:25,slidesPerView:1,navigation:{nextEl:c,prevEl:l},pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0}});new n(".gallery-swiper",{direction:"horizontal",loop:!0,spaceBetween:40,slidesPerView:1,centeredSlides:!0,pagination:{el:".swiper-pagination.gallery",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0}});
//# sourceMappingURL=commonHelpers.js.map
