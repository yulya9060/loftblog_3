webpackJsonp([1],[function(e,t,n){"use strict";n(1)},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(3);var o={init:function(){var e=document.body||document.getElementsByTagName("body")[0],t=document.getElementById("hamb"),n=document.querySelector(".hamburger--slider"),o=document.querySelector(".fixed");t.addEventListener("click",function(){n.classList.toggle("is-active"),o.classList.toggle("fixed_shown"),e.classList.toggle("body_overflow")})}};t.default=o},function(e,t){},function(e,t,n){"use strict";n(5)},function(e,t){},,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(6),n(0);var o=n(2),c=function(e){return e&&e.__esModule?e:{default:e}}(o);n(4),n(7),n(23),c.default.init();var i={init:function(){var e=(document.querySelector(".content-right"),document.querySelectorAll(".article")),t=document.querySelectorAll(".content-left__item"),n=document.querySelectorAll(".content-left__link"),o=[];e.forEach(function(e){o.push(e.offsetTop)}),console.log(o),window.addEventListener("scroll",function(){o.forEach(function(e,n){window.pageYOffset>=e&&(t.forEach(function(e,t){e.classList.remove("content-left_active")}),t[n].classList.add("content-left_active"))})}),Array.prototype.filter.call(n,function(e){e.addEventListener("click",function(e){console.log("erewrewrw"),e.preventDefault(),o.forEach(function(e){window.scrollTo(0,e)})})})}};t.default=i,i.init()},function(e,t){}],[22]);