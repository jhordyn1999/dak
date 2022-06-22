var app = new Vue({
    el: "#app",
    data: {
        listado_opinanfinal:[{text1:"", text2:""}],
        listado_opinan: [{
            textoprincipal: "En el siguiente ejemplo, recuperamos la posición de la subcadena SQLSHACK.COM usando CHARINDEX.",
            textooculto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when  an unknown printer took a galley of type.",
            logo: "../img/logo Urbanova.svg", nombre: "Jackeline Pimentel", empresa: "Urbnova"
        },
        {
            textoprincipal: "Lorem Ipsum s is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when  an unknown printer took a galley of type.",
            textooculto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when  an unknown printer took a galley of type.",
            logo: "../img/logo TASA.svg", nombre: "Angela Gallardo", empresa: "TASA"
        },
        {
            textoprincipal: "En este argumento, especificamos la expresión de carácter que queremos buscar en la cadena especificada. Podríamos incluir los caracteres salvajes también en este argumento",
            textooculto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when  an unknown printer took a galley of type.",
            logo: "../img/logo MARCOBRE.svg", nombre: "Fiorella Urbina", empresa: "Marcobre"
        },

        ]
    }, created() {
        this.caracterOpinan();
    },


    methods: {

        caracterOpinan() {

            // const cuerpoDelDocumento = document.body;
            // cuerpoDelDocumento.onload = miFuncion;

            // function miFuncion() {
            //     alert('La página terminó de cargar');
            // }
            // console.log("entró")
            // const texto = document.getElementById("textopinan" + index);
            //  console.log("El tamaño del párrafo es de " + texto.length + " caracteres");
            // console.log("este es el texto: ",texto)

            // var registros = [{ sucursal: 1, idusers: 1, usuario: 'schw' }
            //     , { sucursal: 1, idusers: 2, usuario: 'schw2' }];
            var registros = this.listado_opinan;

            nregistros = [];
            for (let index = 0; index < registros.length; index++) {
                // nregistros.push(registros[index].textoprincipal);
                nregistros.push({ text: registros[index].textoprincipal });
                console.log(registros[index].textoprincipal.length)
              //  console.log(registros[index].textoprincipal.substring(0, 95));
                console.log(registros[index].textoprincipal.substring(95, 10000000));
                console.log(nregistros);
            }
            //             for (i in registros)
            //                 nregistros.push(registros[i].textoprincipal);


            // console.log(registros[i].textoprincipal.length)
            //             console.log(nregistros);
        },
        toggleOpinan(index) {
            const textoculto = document.getElementById("textopinanoculto" + index)
            const btnopinan = document.getElementById("btnleermasopinan" + index)
            const points = document.getElementById("points" + index)

            if (points.style.display === "none") {
                textoculto.style.display = "none";
                points.style.display = "inline";
                btnopinan.innerHTML = "Leer más"
            } else {
                textoculto.style.display = "inline";
                points.style.display = "none";
                btnopinan.innerHTML = "Leer menos"
            }
        },
        changueCaracteristica(id) {
            const imgflecha1 = document.getElementById("imgflecha1");
            const imgflecha2 = document.getElementById("imgflecha2");
            const imgflecha3 = document.getElementById("imgflecha3");
            const imgflecha4 = document.getElementById("imgflecha4");


            const carac1 = document.getElementById("carac1");
            const carac2 = document.getElementById("carac2");
            const carac3 = document.getElementById("carac3");
            const carac4 = document.getElementById("carac4");

            const divcarac1 = document.getElementById("divcarac1");
            const divcarac2 = document.getElementById("divcarac2");
            const divcarac3 = document.getElementById("divcarac3");
            const divcarac4 = document.getElementById("divcarac4");
            if (id === "carac1") {
                this.removeClassCaracteristica();
                carac1.classList.add("itemcaracteristicaseleccionado")
                divcarac1.classList.remove("nonecarac")
                imgflecha1.classList.remove("nonecarac")
            } else if (id === "carac2") {
                this.removeClassCaracteristica();
                carac2.classList.add("itemcaracteristicaseleccionado")
                divcarac2.classList.remove("nonecarac")
                imgflecha2.classList.remove("nonecarac")
            } else if (id === "carac3") {
                this.removeClassCaracteristica();
                carac3.classList.add("itemcaracteristicaseleccionado")
                divcarac3.classList.remove("nonecarac")
                imgflecha3.classList.remove("nonecarac")
            } else if (id === "carac4") {
                this.removeClassCaracteristica();
                carac4.classList.add("itemcaracteristicaseleccionado")
                divcarac4.classList.remove("nonecarac")
                imgflecha4.classList.remove("nonecarac")
            }


        },
        removeClassCaracteristica() {
            const imgflecha1 = document.getElementById("imgflecha1");
            const imgflecha2 = document.getElementById("imgflecha2");
            const imgflecha3 = document.getElementById("imgflecha3");
            const imgflecha4 = document.getElementById("imgflecha4");


            const carac1 = document.getElementById("carac1");
            const carac2 = document.getElementById("carac2");
            const carac3 = document.getElementById("carac3");
            const carac4 = document.getElementById("carac4");
            // 
            const divcarac1 = document.getElementById("divcarac1");
            const divcarac2 = document.getElementById("divcarac2");
            const divcarac3 = document.getElementById("divcarac3");
            const divcarac4 = document.getElementById("divcarac4");


            carac1.classList.remove("itemcaracteristicaseleccionado")
            carac2.classList.remove("itemcaracteristicaseleccionado")
            carac3.classList.remove("itemcaracteristicaseleccionado")
            carac4.classList.remove("itemcaracteristicaseleccionado")

            // 
            divcarac1.classList.add("nonecarac")
            divcarac2.classList.add("nonecarac")
            divcarac3.classList.add("nonecarac")
            divcarac4.classList.add("nonecarac")

            imgflecha1.classList.add("nonecarac")
            imgflecha2.classList.add("nonecarac")
            imgflecha3.classList.add("nonecarac")
            imgflecha4.classList.add("nonecarac")
        }


    },
});