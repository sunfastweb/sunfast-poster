/* ===========================
   SUNFAST WEB SOLUTIONS
   PREMIUM JS PART 3A
=========================== */

"use strict";

/* ===========================
   SELECT ELEMENTS
=========================== */

const header = document.querySelector("header");
const menuLinks = document.querySelectorAll(".menu a");
const topBtn = document.querySelector(".top-btn");
const revealItems = document.querySelectorAll(
".service-card,.project-card,.price-card,.testimonial,.about,.contact"
);

/* ===========================
   STICKY HEADER
=========================== */

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});


/* ===========================
   ACTIVE MENU
=========================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.clientHeight;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

menuLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/* ===========================
   SMOOTH SCROLL
=========================== */

menuLinks.forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

window.scrollTo({

top:target.offsetTop-70,

behavior:"smooth"

});

});

});


/* ===========================
   REVEAL ON SCROLL
=========================== */

function reveal(){

const trigger=window.innerHeight-120;

revealItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<trigger){

item.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();


/* ===========================
   BACK TO TOP
=========================== */

if(topBtn){

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}


/* ===========================
   BUTTON HOVER EFFECT
=========================== */

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-3px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});


/* ===========================
   HERO FADE
=========================== */

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

if(hero){

hero.style.opacity=

1-window.scrollY/900;

}

});


/* ===========================
   PARALLAX EFFECT
=========================== */

window.addEventListener("scroll",()=>{

const y=window.pageYOffset;

document.body.style.backgroundPositionY=

-(y*0.08)+"px";

});


/* ===========================
   IMAGE HOVER
=========================== */

document.querySelectorAll(".project-image")
.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.05)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


/* ===========================
   PAGE LOADED
=========================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

console.log("Sunfast Premium JS Loaded");font-style:italic;
color:var(--gray);
margin-bottom:20px;
}

.client{
display:flex;
align-items:center;
gap:15px;
}

.client img{
width:60px;
height:60px;
border-radius:50%;
object-fit:cover;
}

.client h4{
font-size:18px;
}

/* ==========================
   CONTACT
========================== */

.contact{
display:grid;
grid-template-columns:1fr 1fr;
gap:50px;
}

.contact-info h2{
margin-bottom:20px;
}

.contact-info p{
margin-bottom:15px;
color:var(--gray);
}

.contact-form{
background:#fff;
padding:35px;
border-radius:20px;
box-shadow:var(--shadow);
}

.contact-form input,
.contact-form textarea{
width:100%;
padding:16px;
margin-bottom:20px;
border:1px solid #ddd;
border-radius:12px;
outline:none;
}

.contact-form textarea{
height:160px;
resize:none;
}

.contact-form button{
width:100%;
padding:16px;
background:var(--primary);
color:#fff;
border:none;
border-radius:12px;
cursor:pointer;
font-size:17px;
transition:.3s;
}

.contact-form button:hover{
opacity:.9;
}

/* ==========================
   FOOTER
========================== */

footer{
background:#0f172a;
color:#fff;
padding:70px 0 30px;
margin-top:80px;
}

.footer-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:40px;
}

.footer-grid h3{
margin-bottom:20px;
}

.footer-grid a{
display:block;
margin-bottom:12px;
color:#cbd5e1;
}

.footer-grid a:hover{
color:#fff;
}

.copyright{
margin-top:40px;
padding-top:20px;
border-top:1px solid rgba(255,255,255,.1);
text-align:center;
font-size:14px;
}

/* ==========================
   FLOATING WHATSAPP
========================== */

.whatsapp{
position:fixed;
bottom:25px;
right:25px;
width:60px;
height:60px;
border-radius:50%;
background:#25D366;
display:flex;
align-items:center;
justify-content:center;
font-size:28px;
color:#fff;
box-shadow:0 10px 25px rgba(0,0,0,.2);
z-index:999;
transition:.3s;
}

.whatsapp:hover{
transform:scale(1.1);
}

/* ==========================
   BACK TO TOP
========================== */

.top-btn{
position:fixed;
bottom:100px;
right:25px;
width:50px;
height:50px;
background:var(--primary);
color:#fff;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
cursor:pointer;
box-shadow:var(--shadow);
}

/* ==========================
   DARK MODE
========================== */

body.dark{
background:#111827;
color:#fff;
}

body.dark .service-card,
body.dark .project-card,
body.dark .price-card,
body.dark .testimonial,
body.dark .contact-form{
background:#1f2937;
color:#fff;
}

body.dark p{
color:#d1d5db;
}

/* ==========================
   RESPONSIVE
========================== */

@media(max-width:992px){

.hero h1{
font-size:48px;
}

.about,
.contact{
grid-template-columns:1fr;
}

}

@media(max-width:768px){

.navbar{
flex-direction:column;
gap:15px;
}

.menu{
flex-wrap:wrap;
justify-content:center;
}

.hero{
text-align:center;
}

.hero-buttons{
justify-content:center;
}

.section-title h2{
font-size:34px;
}

.price{
font-size:42px;
}

}

@media(max-width:480px){

.hero h1{
font-size:38px;
}

.section-title h2{
font-size:28px;
}

.btn{
width:100%;
text-align:center;
}

.project-image{
height:180px;
}

.whatsapp{
width:55px;
height:55px;
font-size:24px;
}

}
