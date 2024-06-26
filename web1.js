var csr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
csr.style.left=dets.x+30+"px"
csr.style.top=dets.y+"px"
   blur.style.left=dets.x-89+"px"
    blur.style.top=dets.y-89+"px"
})
var h4all =document.querySelectorAll("#nav h4,#arrow1")
h4all.forEach(function(elem){

elem.addEventListener("mouseenter",function(){
csr.style.scale =3
csr.style.border="0.5px solid #fff"
csr.style.backgroundColor="transparent"
})
elem.addEventListener("mouseleave",function(){
    csr.style.scale =1
    csr.style.border="0px solid #95C11E"
    csr.style.backgroundColor="#95C11E"
    })


})
var h4all =document.querySelectorAll("#f2,#f3")
h4all.forEach(function(elem1){

elem1.addEventListener("mouseenter",function(){
csr.style.scale =3
csr.style.border="0.5px solid #fff"
csr.style.backgroundColor="transparent"
})
elem1.addEventListener("mouseleave",function(){
    csr.style.scale =1
    csr.style.border="0px solid #95C11E"
    csr.style.backgroundColor="#95C11E"
    })


})
var h5all =document.querySelectorAll("#cards,.elem")
h5all.forEach(function(elem2){

elem2.addEventListener("mouseenter",function(){
csr.style.scale =3
csr.style.border="0.5px solid #fff"
csr.style.backgroundColor="transparent"
})
elem2.addEventListener("mouseleave",function(){
    csr.style.scale =1
    csr.style.border="0px solid #95C11E"
    csr.style.backgroundColor="#95C11E"
    })


})
gsap.to("#nav",{

backgroundColor:"#000",
duration:0.5,
height:"110px",
scrollTrigger:{

trigger:"#nav",
scroller:"body",
//markers:true,
start:"top-10%",
scrub:1,
}}
)

gsap.to("#main",{

backgroundColor:"#000",
scrollTrigger:{
    trigger:"#main",
    scroller:"body",
   // markers:true,
    start:"top 10%",
    
    scrub:2
}

})
gsap.from("#about-us img,#about-us #about",{
    y:50,
    opacity:0,
    duration:1,
   
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
      //  markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
   
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
      //  markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})
gsap.from("#colon1",{
    x:-80,
    y:-80,
    scrollTrigger:{
        trigger:"#colon1",
        scroll:"body",
        start:"top 85%",
        end:"top 65%",
        scrub:4
    }
})
gsap.from("#colon2",{
    x: 20,
    y: 20,
    scrollTrigger:{
        trigger:"#colon2",
        scroll:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
    y: 50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroll:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})

