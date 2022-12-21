var height = window.screen.height;
var width = window.screen.width;

const lb = document.querySelector(".lb");
const cb2 = document.querySelector(".cb2");
const rb = document.querySelector(".rb");
const lm = document.querySelector(".lm");
const rm = document.querySelector(".rm");
const at2 = document.querySelector(".at2");
const abilitiesSkillContainer = document.querySelector(".abilitiesSkillContent");
const abilitiesContentContainer = document.querySelector(".abilitiesContentContainer")


function trocaTexto() {
    document.querySelector("#paragrafo").textContent = "Tetse";
}

if (width < 1200) {
    abilitiesSkillContainer.remove();
}

if (width < 768) {
    lb.remove();
    rb.remove();
    lm.remove();
    rm.remove();
    abilitiesSkillContainer.remove()
}

if (width < 480) {
    cb2.remove();
    at2.remove();
    abilitiesSkillContainer.remove()
    abilitiesContentContainer.remove();
}