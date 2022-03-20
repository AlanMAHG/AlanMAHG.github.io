'use strict'

//Boton Profile
function profileInfo() {
    let contenido = document.getElementById("contenido");
    while (contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }
    /* let imagen = document.getElementById("animation");
    contenido.removeChild(imagen); */
    let contentProfile = document.createElement("div");
    contenido.appendChild(contentProfile);
    let parrafo = document.createElement("p");
    parrafo.innerText = `Proactive front-end student, always willing to learn and develop skills within the software development field.
    My previous experience in various fields of work, has helped me in increasing my ability to adapt quickly to a challenging environment and deliver excellent results.
    Concerning myself, I am serious but with the ability to integrate easily into a group. I also enjoy learning and sharing what I have learned, traveling, playing chess and practicing juggling.`;
    contentProfile.appendChild(parrafo);
    contentProfile.style.animation = "movimientoProfile 2.5s linear"
}
let profile = document.getElementById("profile");
profile.addEventListener('click',profileInfo);
// fin Boton Profile


//Boton Skills

function skillsInfo() {
    let contenido = document.getElementById("contenido");
    while (contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }
    /* let imagen = document.getElementById("animation");
    contenido.removeChild(imagen); */
    let contentSkills = document.createElement("div");
    contentSkills.style.display = 'flex';
    contentSkills.style.justifyContent = "row";
    contentSkills.style.alignItems = "center";
    contentSkills.style.justifyContent = "space-around";
    contenido.appendChild(contentSkills);
    let icon1 = document.createElement("article");
    icon1.innerHTML =
    `<svg style="width:5.5rem;height:5.5rem" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7,19.24 7.44,19.24C8.84,19.24 9.65,18.39 9.65,16.91V8.44C9.65,8.32 9.55,8.22 9.43,8.22H8.5C8.37,8.22 8.27,8.32 8.27,8.44V16.91C8.27,17.57 7.59,18.22 6.5,17.67L4.45,16.5C4.38,16.45 4.34,16.37 4.34,16.29V7.71C4.34,7.62 4.38,7.54 4.45,7.5L11.89,3.21C11.95,3.17 12.05,3.17 12.11,3.21L19.55,7.5C19.62,7.54 19.66,7.62 19.66,7.71V16.29C19.66,16.37 19.62,16.45 19.55,16.5L12.11,20.79C12.05,20.83 11.95,20.83 11.88,20.79L10,19.65C9.92,19.62 9.84,19.61 9.79,19.64C9.26,19.94 9.16,20 8.67,20.15C8.55,20.19 8.36,20.26 8.74,20.47L11.22,21.94C11.46,22.08 11.72,22.15 12,22.15C12.28,22.15 12.54,22.08 12.78,21.94L20.22,17.65C20.7,17.37 21,16.85 21,16.29V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.28,1.85 12,1.85M14,8C11.88,8 10.61,8.89 10.61,10.39C10.61,12 11.87,12.47 13.91,12.67C16.34,12.91 16.53,13.27 16.53,13.75C16.53,14.58 15.86,14.93 14.3,14.93C12.32,14.93 11.9,14.44 11.75,13.46C11.73,13.36 11.64,13.28 11.53,13.28H10.57C10.45,13.28 10.36,13.37 10.36,13.5C10.36,14.74 11.04,16.24 14.3,16.24C16.65,16.24 18,15.31 18,13.69C18,12.08 16.92,11.66 14.63,11.35C12.32,11.05 12.09,10.89 12.09,10.35C12.09,9.9 12.29,9.3 14,9.3C15.5,9.3 16.09,9.63 16.32,10.66C16.34,10.76 16.43,10.83 16.53,10.83H17.5C17.55,10.83 17.61,10.81 17.65,10.76C17.69,10.72 17.72,10.66 17.7,10.6C17.56,8.82 16.38,8 14,8Z" />
</svg>`;
    let icon2 = document.createElement("article");
    icon2.innerHTML =
    `<svg style="width:5.5rem;height:5.5rem" viewBox="0 0 24 24">
        <path fill="currentColor" d="M5,3L4.35,6.34H17.94L17.5,8.5H3.92L3.26,11.83H16.85L16.09,15.64L10.61,17.45L5.86,15.64L6.19,14H2.85L2.06,18L9.91,21L18.96,18L20.16,11.97L20.4,10.76L21.94,3H5Z" />
    </svg>`;
    let icon3 = document.createElement("article");
    icon3.innerHTML =
    `<svg style="width:5.5rem;height:5.5rem" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z" />
    </svg>`;
    let icon4 = document.createElement("article");
    icon4.innerHTML =
    `<svg style="width:5.5rem;height:5.5rem" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
    </svg>`;
    contentSkills.appendChild(icon1);
    contentSkills.appendChild(icon2);
    contentSkills.appendChild(icon3);
    contentSkills.appendChild(icon4);
}

let skills = document.getElementById("skills");
skills.addEventListener('click',skillsInfo);
//fin boton skills



//Boton Profile
function proyectsInfo() {
    let contenido = document.getElementById("contenido");
    while (contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }
    let contentProyects = document.createElement("div");
    contenido.appendChild(contentProyects);
    let parrafo = document.createElement("p");
    parrafo.innerText = `Aqui van los links para mis proyectos`;
    contentProyects.appendChild(parrafo);
    contentProyects.style.animation = "movimientoProfile 2.5s linear"
}
let proyects = document.getElementById("proyects");
proyects.addEventListener('click',proyectsInfo);
// fin Boton Profile





