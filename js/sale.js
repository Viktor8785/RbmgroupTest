import{header}from"./header.js";const dropdownSale=document.querySelector("#sale-dropdown"),inputSale=document.querySelector("#sale-input"),options=document.querySelectorAll(".options_item");options.forEach((e=>{e.addEventListener("click",(e=>{inputSale.value=e.target.innerText}))})),dropdownSale.onclick=function(){dropdownSale.classList.toggle("active")},window.addEventListener("click",(e=>{!e.composedPath().includes(dropdownSale)&&dropdownSale.classList.contains("active")&&dropdownSale.classList.toggle("active")})),window.addEventListener("touchstart",(e=>{!e.composedPath().includes(dropdownSale)&&dropdownSale.classList.contains("active")&&dropdownSale.classList.toggle("active")})),header();