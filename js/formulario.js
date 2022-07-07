var app = new Vue({
    el: "#app",
    data: {
        listado_pais: null,
    },
    created() {
        this.obtenerPais();
    },
    methods: {
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
        enviarDatos() {
            const txtnombre = document.getElementById("txtnombre").value;
            const txtapellido = document.getElementById("txtapellido").value;
            const txtempresa = document.getElementById("txtempresa").value;
            const txtcorreo = document.getElementById("txtcorreo").value;
            const txtcelular = document.getElementById("txtcelular").value;
            const txtpais = document.getElementById("txtpais").value;
            const txtinteres = document.getElementById("txtinteres").value;
            const txtlms = document.getElementById("txtlms").value;
            const txtdescripcion = document.getElementById("txtdescripcion").value;
            if (txtnombre == "") {
                alert("Por favor ingrese todos los campos nombre")

            } else if (txtapellido == "") {
                alert("Por favor ingrese todos los campos apellido")
            } else if (txtempresa == "") {
                alert("Por favor ingrese todos los campos empresa")
            } else if (txtcorreo == "") {
                alert("Por favor ingrese todos los campos correo")
            } else if (txtcelular == "") {
                alert("Por favor ingrese todos los campos celular")
            } else {
                alert("DATOS ENVIADOS CORRECTAMENTE"+"\n"+
                "Nombre:"+txtnombre+"\n"+
                "Apellido:"+txtapellido+"\n"+
                "Correo:"+txtcorreo+"\n"+
                "Celular:"+txtcelular+"\n"+
                "Empresa:"+txtempresa+"\n"+
                "Pais:"+txtpais+"\n"+
                "Interes:"+txtinteres+"\n"+
                "Lms:"+txtlms+"\n"+
                "Descripcion:"+txtdescripcion)


            }



        },

        obtenerPais() {
            fetch('../api/paises.json')
                .then(function (response) {
                    return response.json();
                })

                .then(response => {

                    this.listado_pais = response;
                    this.listado_pais.sort((a, b) => a.nombre.localeCompare(b.nombre));
                    console.log(this.listado_pais);
                    // console.log(this.listado_pais)


                })
                .catch(function (error) { console.log(error); });



        }


    },
});