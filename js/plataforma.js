var app = new Vue({
    el: "#app",
    data: {
   
    },
    created() {
     
    },
    methods: {
       
        rutaFormulario(){
            window.location.href = "../formulario.html";
        },
        changueMenu() {
            const btnMenu = document.getElementById("btnMenu");
            const btnSalir = document.getElementById("btnSalir");
            const divMenu = document.getElementById("divMenu");


            if (divMenu.style.display = "none") {
                divMenu.style.display = "block"
                btnSalir.style.display = "block"
                btnMenu.style.display = "none"

            }
        },
        changueMenuSalir() {
            const btnMenu = document.getElementById("btnMenu");
            const btnSalir = document.getElementById("btnSalir");
            const divMenu = document.getElementById("divMenu");


            if (divMenu.style.display = "block") {
                divMenu.style.display = "none"
                btnSalir.style.display = "none"
                btnMenu.style.display = "block"

            }
        },
    },
});