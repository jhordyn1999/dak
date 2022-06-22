var app = new Vue({
    el: "#app",
    data: {

    },
    created() {

    },
    methods: {
        mostrarMas() {
            const divimagen = document.getElementById("divimagen")
            const divdescripcion = document.getElementById("divdescripcion")
            const btnMenos = document.getElementById("btnMenos")
            const btnMas = document.getElementById("btnMas")
            divimagen.classList.remove("nonediv");
            divdescripcion.classList.remove("nonediv");
            btnMenos.classList.remove("nonediv");
            btnMas.classList.add("nonediv");
            console.log("ejejejej")

        },
        mostrarMenos() {
            const divimagen = document.getElementById("divimagen")
            const divdescripcion = document.getElementById("divdescripcion")
            const btnMas = document.getElementById("btnMas")
            const btnMenos = document.getElementById("btnMenos")
            divimagen.classList.add("nonediv");
            divdescripcion.classList.add("nonediv");
            btnMas.classList.remove("nonediv");
            btnMenos.classList.add("nonediv");

        }

    },
});