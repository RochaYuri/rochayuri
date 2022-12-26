var height = window.screen.height;
var width = window.screen.width;

const lb = document.querySelector(".lb");
const cb2 = document.querySelector(".cb2");
const rb = document.querySelector(".rb");
const lm = document.querySelector(".lm");
const rm = document.querySelector(".rm");
const at2 = document.querySelector(".at2");
const abilitiesSkillContainer = document.querySelector(".abilitiesSkillContent");
const abilitiesContentContainer = document.querySelector(".abilitiesContentContainer");
const check = document.getElementById('check');
var github = document.getElementById("github");
var darktheme = 0;

if (width < 1200) {
    abilitiesSkillContainer.remove();
}

if (width < 768) {
    lb.remove();
    rb.remove();
    lm.remove();
    rm.remove();
    abilitiesSkillContainer.remove();
}

if (width < 480) {
    cb2.remove();
    at2.remove();
    abilitiesSkillContainer.remove()
    abilitiesContentContainer.remove();
}

check.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.querySelector('.logo').classList.toggle('dark');
    document.querySelector('#navLink1').classList.toggle('dark');
    document.querySelector('#navLink2').classList.toggle('dark');
    document.querySelector('#navLink3').classList.toggle('dark');
    document.querySelector('#navButton1').classList.toggle('dark');
    document.querySelector('#navButton2').classList.toggle('dark');
    document.querySelector('#navButton3').classList.toggle('dark');
    document.querySelector('#button').classList.toggle('dark');
    document.querySelector('#formTitle').classList.toggle('dark');
    document.querySelector('#copyright').classList.toggle('dark');
    document.querySelector('#github').classList.toggle('dark');
})

function trocaImg(){
   if (darktheme == 0) {
    github.src = "./images/githubdark.svg";
    darktheme = 1;
   } else if (darktheme == 1) {
    github.src = "./images/github.svg";
    darktheme = 0;
   }
}