const testimonial =  [
    {
        name: "Vicole",
        photoUrl: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"This is Simply Unbelivable! i will be lost without Apple. The very best. Not able to tell you how happy I am With Apple "
    },
    {
        name: "Rhymer",
        photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:" I would like to recommend this for any user "
    },
    {
        name: "Bob",
        photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:" I would like to recommend this for any user "
    },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userEl = document.querySelector(".username");

let idx = 0;
updateTestimonial()

function updateTestimonial(){
   const{name, photoUrl, text} = testimonial[idx]
   imgEl.src = photoUrl
   textEl.innerText = text;
   userEl.innerText = name;
   idx++
   if(idx === testimonial.length){
    idx = 0
   }
   setTimeout(()=>{
      updateTestimonial()
   }, 10000)
}