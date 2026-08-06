const sideBar=document.querySelector(".sideBar");
const headBar=document.querySelector(".headBar");
const sideBarClose=document.querySelector(".sideBarClose");
const nav=document.querySelector("nav");

headBar.addEventListener('click',()=>{
    sideBar.style.display='block';
    nav.style.display='none';
})

sideBarClose.addEventListener('click',()=>{
    sideBar.style.display='none';
    nav.style.display='flex';
})