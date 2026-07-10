
// ==========================================
// Typewriter Effect
// ==========================================

const jobs = [

    "FREELANCER",

    "WEB DEVELOPER",

    "FULLSTACK DEVELOPER",
    
    "FRONTEND DEVELOPER",

    "UI DESIGNER",

    "JAVASCRIPT DEVELOPER",

    

];

const job = document.getElementById("job");

let jobIndex = 0;

function changeJob(){

    job.textContent = jobs[jobIndex];

    jobIndex++;

    if(jobIndex >= jobs.length){

        jobIndex = 0;

    }

}

setInterval(changeJob,2000);

// ==========================================
// Theme Toggle
// ==========================================

const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light");

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        localStorage.setItem("theme","light");

    }

    else{

        localStorage.setItem("theme","dark");

    }

});

// ==========================================
// Project Filter
// ==========================================

const filterButtons = document.querySelectorAll(".filter-btn");

const cards = document.querySelectorAll(".project-card");

filterButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        filterButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card=>{

            if(filter==="all"){

                card.style.display="block";

            }

            else if(card.dataset.category===filter){

                card.style.display="block";

            }

            else{

                card.style.display="none";

            }

        });

    });

});

// ==========================================
// Statistics Counter
// ==========================================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

    const target = Number(counter.dataset.target);

    let count = 0;

    const speed = target / 100;

    const update = ()=>{

        count += speed;

        if(count < target){

            counter.textContent = Math.floor(count);

            requestAnimationFrame(update);

        }

        else{

            counter.textContent = target;

        }

    }

    update();

});

// ==========================================
// Back To Top Button
// ==========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
// ==========================================
// Project Modal
// ==========================================

const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalGithub = document.getElementById("modalGithub");

const viewButtons = document.querySelectorAll(".view-project");

viewButtons.forEach(button => {

    button.addEventListener("click", () => {

        modal.classList.add("show");

        modalImage.src = button.dataset.image;

        modalTitle.textContent = button.dataset.title;

        modalDescription.textContent = button.dataset.description;

        modalGithub.href = "https://github.com/jayakanish";

    });

});

document.querySelector(".close-modal").addEventListener("click", () => {

    modal.classList.remove("show");

});

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("show");

    }

});

// ==========================================
// Scroll Reveal Animation
// ==========================================

const revealElements = document.querySelectorAll(
    "section,.project-card,.service-card,.stat-box"
);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(50px)";

    element.style.transition = ".8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ==========================================
// Contact Form
// ==========================================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Please fill all required fields.");

        return;

    }

    alert("✅ Message sent successfully!");

    form.reset();

});

// ==========================================
// Active Navigation
// ==========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================================
// Smooth Hover Effect
// ==========================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background = `radial-gradient(circle at ${x}px ${y}px,
        rgba(0,217,255,.20),
        rgba(255,255,255,.05))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.05)";

    });

});
// ==========================================
// Welcome Message
// ==========================================

console.log("🚀 Portfolio Loaded Successfully!");

console.log("Designed by Lucifer");

