/* 
Descrizione:
Stampare a schermo un messaggio all’interno di un h1,
utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

var app = new Vue (
    {
        el: "#container",
        data: {
            message: "Hello Vue!",
            miaClasse: "red",
            immaggine: "https://traterraecieloblog.files.wordpress.com/2020/06/sudato.jpg"
        },

        methods: {

            changeColor: function() {
    
                    this.miaClasse = "blue"
    
                }
        }
    }
);