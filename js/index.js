// Vue.component("carta-opinion", {
//     props: ["value", "num_caracteres"],
//     data() {
//         return {
//             showMore: false,
//         }
//     },methods: {
//         verCaso(id){
//          //   console.log('pagina.php?Variable='+id+'')
//             window.location.href = 'casos.html?clt='+id+''
//          },
//     },

    
//     template: 
    
    
//             `
//         <div class="cardopinan-index-daktico">
//             <div class="cuerpo-cardopinan">
//                 <p v-if="!showMore">{{ value.textoprincipal.substring(0, num_caracteres) }} 
//                     <span v-if="value.textoprincipal.length > num_caracteres && !showMore">...</span>
//                 </p>
//                 <p v-if="showMore">{{ value.textoprincipal }}</p>

//                 <div class="leermas-index-daktico Roboto_medium">
//                     <span v-if="!showMore && value.textoprincipal.length !== num_caracteres" @click="showMore = true">Leer más</span>
//                     <span v-if="showMore && value.textoprincipal.length !== num_caracteres" @click="showMore = false">Leer menos</span>
//                     <img v-if="value.textoprincipal.length > num_caracteres || value.textoprincipal.length < num_caracteres"
//                         src="img/Trazado 79332.svg" alt="">
//                 </div>
//                 <div class="btnMasInformacion" @click="verCaso(value.id)"><span>Más información</span></div>
//             </div>
//         </div>
//         `
// });

Vue.component("carta-opinion", {
    props: ["value", "num_caracteres"],
    data() {
        return {
            showMore: false,
        }
    },methods: {
        verCaso(id){
         //   console.log('pagina.php?Variable='+id+'')
            window.location.href = 'casos.html?clt='+id+''
         },
    },  
    template: 

            `
        <div class="cardopinan-index-daktico">
            <div class="cuerpo-cardopinan">
            <p v-if="!showMore">{{ value.textoprincipal.substring(0, num_caracteres) }} </p>
        <div class="leermas-index-daktico Roboto_medium">
                               <span  @click="verCaso(value.id)">Conoce más sobre este caso</span>
                            
                               <img  src="img/Trazado 79332.svg" alt="">
                           </div>
            </div>
        </div>
        `
});
var app = new Vue({
    el: "#app",
    data: {
        num_caracteres: 95,
        listado_opinanfinal: [],
        listado_opinan: [{
            id: 1,
            textoprincipal: "En el siguiente ejemplo, recuperamos la posición de la subcadena SQLSHACK.COM usando CHARINDEX.",
            logo: "../img/logo Urbanova.svg", nombre: "Jackeline Pimentel", empresa: "Urbnova"
        },
        {
            id: 2,
            textoprincipal: "Lorem Ipsum s is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when  an unknown printer took a galley of type.",
            logo: "../img/logo TASA.svg", nombre: "Angela Gallardo", empresa: "TASA"
        },
        {
            id: 3,
            textoprincipal: "En este argumento, especificamos la expresión de carácter que queremos buscar en la cadena especificada. Podríamos incluir los caracteres salvajes también en este argumento",
            logo: "../img/logo MARCOBRE.svg", nombre: "Fiorella Urbina", empresa: "Marcobre"
        },

        ]
    }, created() {

    }, mounted() {
        // this.caracterOpinan();
    }

    ,


    methods: {
        // caracterOpinan() {
        //     var registros = this.listado_opinan;
        //     nvacio = [];
        //     for (let index = 0; index < registros.length; index++) {
        //          console.log(registros[index].textoprincipal.length)
        //         var id = registros[index].id;
        //         var text1 = registros[index].textoprincipal.substring(0, 95);
        //         var text2 = registros[index].textoprincipal.substring(95, 10000000);
        //         var img = registros[index].logo;
        //         var nom = registros[index].nombre;
        //         var emp = registros[index].empresa;
        //         this.listado_opinanfinal.push({ id: id, textoprincipal: text1, textooculto: text2, logo: img, nombre: nom, empresa: emp })

        //         if (text2.length == 0) {
        //             nvacio.push({ item: id });
        //             console.log()
        //         }
        //          console.log(this.listado_opinanfinal);
        //     }

        //     for (let index = 0; index < nvacio.length; index++) {
        //         var id = nvacio[index].item;
        //         console.log(id)
        //         this.btnLeerNone(id);
        //     }

        // },

        // btnLeerNone(id) {
        //     var points = document.getElementById("points" + id);
        //     var btnopinan = document.getElementById("btnleermasopinan" + id);
        //     console.log(points, btnopinan)
        //     points.style.display = "none";
        //     btnopinan.style.display = "none";

        // },
        toggleOpinan(id) {
            const textoculto = document.getElementById("textopinanoculto" + id)
            const btnopinan = document.getElementById("btnleermasopinan" + id)
            const points = document.getElementById("points" + id)

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
        },
        


    },

});