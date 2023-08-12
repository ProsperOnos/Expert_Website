const advert_div = document.querySelector(".ad_fixed");
const removeAd = document.querySelector(".img_cancel");
const body = document.querySelector("body");
const nav_barLinks = document.querySelector(".navbar_links")
const hambuger = document.querySelector(".hambuger")
const accord_head = document.querySelectorAll(".accordion_head")

function ad_code(){
    advert_div.style.display = 'block';
}

removeAd.addEventListener('click', ()=>{
    advert_div.style.display = 'none';
})

hambuger.addEventListener("click", ()=>{
    nav_barLinks.classList.toggle('active');
})

accord_head.forEach((accord_head)=>{
    accord_head.addEventListener('click', ()=>{
        accord_head.classList.toggle('active')
    })
})
