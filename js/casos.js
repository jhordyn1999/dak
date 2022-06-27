var app = new Vue({

    el: "#app",
    data: {
        idCaso: '',
        descrip: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.",
        listado_caso: [
                            {id:1, idopinan:1 , nombre: "Jackeline Pimentel", cargo:"Jefe de RRHH Urbnova Latam", desprincipal: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." , 
                            desprinsec1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                            desprinsec2:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
                            desprinsec3:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English." ,
                            desprinsec4: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.",
                             imgprincipal:"img/juego-principal.jpg", imgsec1:"img/juego-secundario1.jpg",imgsec2:"img/juego-secundario2.jpg",imgsec3:"img/juego-secundario3.jpg", 
                            desc1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",  desc2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",  desc3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                            },

                            {id:2, idopinan:3 , nombre: "Fiorella Urbina", cargo:"Jefe de RRHH Marcobre Latam", desprincipal: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." , 
                            desprinsec1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                            desprinsec2:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
                            desprinsec3:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English." ,
                            desprinsec4: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.",
                             imgprincipal:"img/juego-principal2.jpg", imgsec1:"img/juego-secundario2-1.jpg",imgsec2:"img/juego-secundario2-2.jpg",imgsec3:"img/juego-secundario2-3.jpg", 
                            desc1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",  desc2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",  desc3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                            },

                            {id:1, idopinan:2 , nombre: "Angela Gallardo", cargo:"Jefe de RRHH TASA Latam", desprincipal: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." , 
                            desprinsec1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                            desprinsec2:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
                            desprinsec3:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English." ,
                            desprinsec4: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.",
                             imgprincipal:"img/juego-principal.jpg", imgsec1:"img/juego-secundario1.jpg",imgsec2:"img/juego-secundario2.jpg",imgsec3:"img/juego-secundario3.jpg", 
                            desc1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",  desc2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",  desc3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                            },
                        ]

    },
    created() {
       // this.verCaso();
    },
    mounted() {
        this.verCaso();
    },
    methods: {
        verCaso() {
            var paramstr = window.location.search.substr(1);
            var paramarr = paramstr.split("&");
            var params = {};

            paramarr.forEach((element,i) => {
                    var tmparr = paramarr[i].split("=");
                    params[tmparr[0]] = tmparr[1];
                });
       
            if (params['clt']) {
                this.idCaso = params['clt'];
                this.mostrarMas(this.idCaso);
                var container = document.getElementById(this.idCaso);
                var getPos = container.getBoundingClientRect().top-100;
                document.documentElement.scrollTop=getPos; 
             
               
            } 
        },

        //   Caso() {
        //     var registros = this.listado_caso;
        //     nvacio = [];
        //     for (let index = 0; index < registros.length; index++) {
        //          console.log(registros[index].textoprincipal.length)
        //         var id = registros[index].id;
        //         var text1 = registros[index].descripcion.substring(0, 95);
        //         var text2 = registros[index].descripcion.substring(95, 10000000);
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

        mostrarMas(id) {
            const divimagen = document.getElementById("divimagen"+id )
            const divdescripcion = document.getElementById("divdescripcion"+id )
            const btnMenos = document.getElementById("btnMenos"+id )
            const btnMas = document.getElementById("btnMas"+id )
            divimagen.classList.remove("nonediv" );
            divdescripcion.classList.remove("nonediv" );
            btnMenos.classList.remove("nonediv" );
            btnMas.classList.add("nonediv" );
       

        },
        mostrarMenos(id) {
            const divimagen = document.getElementById("divimagen"+id)
            const divdescripcion = document.getElementById("divdescripcion"+id)
            const btnMas = document.getElementById("btnMas"+id)
            const btnMenos = document.getElementById("btnMenos"+id)
            divimagen.classList.add("nonediv");
            divdescripcion.classList.add("nonediv");
            btnMas.classList.remove("nonediv");
            btnMenos.classList.add("nonediv");

        }

    },
});