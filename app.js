const hamburger = document.querySelector(".hamburger-icon");
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', ()=> {
    navbar.toggleAttribute('hidden');
    
})



////////////////// Habilidades //////////////////
let habilidades = document.querySelector(".habilidades")


const misHabilidades = [
    {
        title: "Ux Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quas "
        +" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quas.",
        icon: ''
    },
    {
        title: "Product Designer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quas "
        +" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quas.",
        icon: ''
    },
    {
        title: "Interactive Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quas "
        +" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quas.",
        icon: ''
    }

]


let html_habilidades = ''

misHabilidades.forEach(hablilidad => {
    html_habilidades += `
    <div class="habilidad">
        <div class="subtitle bold black">
            <img src="" alt="">
            <p class="subsection black">${hablilidad.title}</p>
        </div>
        <p>${hablilidad.description}</p>
    </div>
    
    `
})

habilidades.innerHTML = html_habilidades


/////////////////////////// Experiencia ////////
const myexperiences = [
    {company: 'amazon', comp_icon: "./images/ant-design_amazon-outlined.svg", role: "UX Designer", duration: "2 anos", period: "2015 - 2017"},
    {company: 'Airbnb', comp_icon: "./images/cib_airbnb.svg", role: "Senior UX/UI", duration: "1 ano", period: "2017 - 2018"},
    {company: 'Google', comp_icon: "./images/akar-icons_google-fill.svg", role: "Product Designer", duration: "2 anos", period: "2018 - actualidad"},

]

const expeciences = document.querySelector(".experiences")

let html_experience = ''

myexperiences.forEach(expr => {
   const {company, comp_icon, role, duration, period } = expr
    
    html_experience += `
    <div class="experience">
        <div>
            <img class="company-icon" src="${comp_icon}" alt="amazon">
        </div>
        <div class="company">
            <p class="black subsection bold">${company}</p>
            <p>${role}</p>
            <p class="bold">${period}</p>
        </div>
        <div>
            <p class="black subsection bold">${duration}</p>
        </div>
    </div>
    `
})


expeciences.innerHTML = html_experience;

/////////////////// add event listenner to link

const enlace = document.querySelector('.navbar-item__link')

enlace.addEventListener('click' , ()=> {
    console.log('oops');
})