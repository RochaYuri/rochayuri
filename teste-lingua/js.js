var userLang = navigator.language || navigator.userLanguage;
var element = document.querySelector(".text")
var text = document.createTextNode("Este é o meu portfólio! O lugar onde busco mostrar minhas habilidades e ideias nos projetos que crio! Sou uma pessoa apaixonada por tecnologia, esportes (acho que será possível perceber a forma dos projetos apresentados abaixo.), família e jogos. Acredito que a tecnologia tem o poder necessário para mudar a vida das pessoas por meio do acesso à informação. Vá em frente! Aproveite o tempo que me visita e, se gostar, contacte-me!")
var text1 = document.getElementById("text1")
console.log("The language is: " + userLang);
if (userLang == 'pt-BR') {
    element.replaceChild(text1, text);
    element.appendChild(text);
}


//var userLang = navigator.language || navigator.userLanguage;
//var element = document.querySelector(".text")
//var text = document.createTextNode("TESTEEEEEEEEE")
//var text1 = document.getElementById("text1")