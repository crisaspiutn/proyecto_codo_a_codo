const proyectos=document.querySelector(".proyectos");
const btn_menu=document.querySelector(".btn_menu");
const menu=document.querySelector(".menu");
btn_menu.addEventListener("click",()=>{
    menu.classList.toggle("ocultar_menu");
    btn_menu.classList.toggle("icon-menu");
    btn_menu.classList.toggle("icon-close");
});

// proyectos.addEventListener("click",(e)=>{
//     console.log(e.target.dataset["slideTo"]);
//     console.log(e.target.dataset);
//     // console.log(e.target.attributes);
//     if(e.target.dataset.hasOwnProperty("slideTo")){
//         console.log(e.target.parentNode.children);
//         console.log("encontrado");
//         let lista=Object.values(e.target.parentNode.children);
//         lista.forEach(item=>{
//             console.log(item);
//             if(item.classList.contains("active")){
//                 item.classList.remove("active");
//             }
//         })
//         e.target.classList.add("active");
//     }
// });







function efectoCarrusel(){
    if(e.target.dataset.hasOwnProperty("slideTo")){
        console.log(e.target.parentNode.children);
        console.log("encontrado");
        let lista=Object.values(e.target.parentNode.children);
        lista.forEach(item=>{
            console.log(item);
            if(item.classList.contains("active")){
                item.classList.remove("active");
            }
        })
        e.target.classList.add("active");
    }
}