var resposta = document.querySelector(".faq-resposta");
var slide = document.querySelector(".slide");



slide.addEventListener('click', function () {
    if (resposta.style.height){
        resposta.style.height = null;
        resposta.style.padding = null;
    } else {
        resposta.style.height = "5rem";
        resposta.style.padding = ".5rem 1rem";
    }  
})

// for(var i = 0; i < slide.lenght; i++) {
//     slide[i].addEventListener('click', function () {
//         if (resposta[i].style.height){
//             resposta[i].style.height = null;
//             resposta[i].style.padding = null;
//         } else {
//             resposta[i].style.height = "5rem";
//             resposta[i].style.padding = ".5rem 1rem";
//         }  
//     })
// }