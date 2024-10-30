
//load

window.onload = function() {
    setTimeout(function() {
        $('#preload').fadeOut();
        //$('body').removeClass('hidden');
    }, 850); // 5000 milisegundos = 5 segundos
};





//icon menu


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

//Navbar scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () =>{

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height) {
            //active navbar links 

            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
            //active sections for animatios on scroll

            sec.classList.add('show-animate');
        }
        
        else{
            sec.classList.remove('show-animate');
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar links
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active')


}

//email js

const contactForm = document.getElementById('contact-form');
const ContactMessage = document.getElementById('message');

const senEmail = (e) => {
    e.preventDefault();

    // service ID - templateId #form - publicKey
    emailjs.sendForm('service_ikuri9y', 'template_wtg4dho', '#contact-form', 'Eco9R2XgyaAHHKdC9')
        .then(
            (response) => {
                if (response.status === 200) { // Verifica si la respuesta fue exitosa
                    Swal.fire({
                        icon: "success",
                        title: "En breve te respondo!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        ).catch(
            (error) => {
                Swal.fire({
                    icon: "error",
                    title: "Upps, algo no anda bien",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.error("EmailJS error:", error); // Para verificar el error en consola si algo falla
            }
        );
}

contactForm.addEventListener('submit', senEmail);


//lenguage

// const check = document.querySelector(".check");

// check.addEventListener("click", lenguage);

// function lenguage(){
//     let id = check.checked;
//     if(id==true){
//         location.href = "../index_sp.html"; 
//     } else{
//         location.href = "../index.html"; 
//     }
// }
