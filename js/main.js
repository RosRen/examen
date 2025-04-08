const btnDatos = document.querySelector("#btn-datos");

btnDatos.addEventListener("click", () => {
    const nombre = prompt("¿Cuál es tu nombre?");
    const anio = parseInt(prompt("¿Cuál es tu año de nacimiento?"));
    const ciudad = prompt("¿En qué ciudad vives?");
    const interes = prompt("¿Te interesa JavaScript? (Sí/No)");

    document.querySelector('#nombre').innerHTML = "Nombre: " + nombre;
    document.querySelector('#edad').innerHTML = "Edad: " + (2025 - anio);
    document.querySelector('#ciudad').innerHTML = "Ciudad: " + ciudad;
    document.querySelector('#interes').innerHTML = "Interés en JavaScript: " + interes;
});

const btnMaterias = document.querySelector("#btn-materias");

btnMaterias.addEventListener("click", () => {
    document.querySelector("#materias").style.display = "flex";
});

const btnTema = document.querySelector("#btn-tema");

btnTema.addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelectorAll("h2").forEach((h2) => {
        h2.style.color = "white";  
    });
    document.querySelector("#titulo").style.color = "white"; 
    document.querySelectorAll("hr").forEach((hr) => {
        hr.style.color = "white"; 
    });
    document.querySelectorAll("p").forEach((p) => {
        p.style.color = "white";  
    });
});


document.addEventListener("keydown", (event) => {
    if (event.key === "f" || event.key === "F") {
        const informacionDiv = document.querySelector("#texto")
        informacionDiv.innerHTML = '"Soy una persona apasionada por las áreas de tecnología y matemáticas. Me gusta explorar nuevas formas de aprender y desarrollar habilidades en programación, mientras disfruto de leer libros que me ayudan a crecer y mejorar tanto a nivel personal como profesional. Siempre estoy en busca de nuevos desafíos que me permitan expandir mis horizontes y aplicar lo aprendido de manera práctica."'
        ;
    }
});


