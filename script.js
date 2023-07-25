const tl = gsap.timeline();
//?Timeline used to avoid using delay multiple time and no tweak all id want to adjust one
tl.from("#nav img,#nav h3,#nav h4,#nav button ",{
   y:-100,
   delay:0.1,
   duration:0.5,
   opacity:0,
   stagger:0.2
})
//? Stagger property: Element comes one by one on a gap given in front stagger 
tl.from("#main h1",{
   x:-1000,
   opacity:0,
   stagger:0.2
})
tl.from("#main>img",{
   scale:0,
   opacity:0
})
tl.from("h5",{
   scale:0,
   opacity:0,
})
tl.to("h5",{
   y:20,
   repeat:-1,
   yoyo:true
})
//?Yoyo property adds the smooth up and down movement to the element