"use strict";!function(){for(var e=document.querySelectorAll(".courses__check"),t=document.querySelector(".courses__complete"),r=document.querySelector(".courses__wrapper"),o=document.querySelector(".courses__title"),n=document.querySelector(".courses__title ~ p"),s=0;s<e.length;s++)e[s].addEventListener("click",function(e){e.target.parentNode.parentNode.classList.add("courses__item--invisible"),setTimeout(function(){e.target.parentNode.parentNode.nextElementSibling&&e.target.parentNode.parentNode.nextElementSibling.classList.add("courses__item--margin-right"),e.target.parentNode.parentNode.remove(),null==r.firstElementChild&&(t.classList.add("courses__complete--visible"),o.remove(),n.remove())},1e3)})}();