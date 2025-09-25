// MENU SHOW
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// SCROLL HOME
sr.reveal('.home-title', {})
sr.reveal('.home-scroll', {delay: 200})
sr.reveal('.home-img', {origin:'right', delay: 400})

// SCROLL ABOUT
sr.reveal('.about-img', {delay: 500})
sr.reveal('.about-subtitle', {delay: 300})
sr.reveal('.about-profession', {delay: 400})
sr.reveal('.about-text', {delay: 500})
sr.reveal('.about-social-icon', {delay: 600, interval: 200})

//SCROLL EDUCATION
sr.reveal('.education-container', {origin: 'bottom', delay:300})
sr.reveal('.item', {origin: 'bottom', delay:300})

// SCROLL SKILLS
sr.reveal('.skills-subtitle', {})
sr.reveal('.card-container', {origin: 'left', distance: '80px', delay: 100})
sr.reveal('.card', {origin: 'right', distance: '80px', delay: 200, interval: 100})

// SCROLL PORTFOLIO
sr.reveal('.portfolio-img', {interval: 200})

// SCROLL CONTACT
sr.reveal('.contact-card, .left', {origin: 'left', distance: '200px', delay: 100})
sr.reveal('.contact-form, .right', {origin: 'right', distance: '200px', delay: 100})

// TYPING EFFECT
var typing = new Typed("#auto-type", {
    strings: ["Darrel Fawwaz Agathon", "a Programmer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
});

// Email JS
(function(){
    emailjs.init('ohXYqRNmtbk0yOxaN');
})();

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_nko5j2o', 'template_5ox3z2b', this)
    .then(function() {
        alert("Message sent successfully!");
        document.getElementById('contactForm').reset();
    }, function(error) {
        alert("Failed to send message:\n" + JSON.stringify(error));
    });
});

// Open/Close Portfolio Modals
document.addEventListener("DOMContentLoaded", () => {
    const openBtns = document.querySelectorAll(".portfolio-link");
    const backdrops = document.querySelectorAll(".portfolio-modal-backdrop");

    openBtns.forEach((btn, index) => {
        const backdrop = backdrops[index];
        const modal = backdrop.querySelector(".portfolio-modal");
        const closeBtn = backdrop.querySelector(".modal-close-btn");

        // buka modal
        btn.addEventListener("click", (e) => {
        e.preventDefault();
        backdrop.classList.add("active");
        modal.classList.add("active");
        });

        // tutup modal
        closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        backdrop.classList.remove("active");
        modal.classList.remove("active");
        });

        // tutup modal kalau klik area backdrop
        backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) {
            backdrop.classList.remove("active");
            modal.classList.remove("active");
        }
        });

        // tutup modal dengan keyboard ESC
        document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && backdrop.classList.contains("active")) {
            backdrop.classList.remove("active");
            modal.classList.remove("active");
        }
        });
    });
});