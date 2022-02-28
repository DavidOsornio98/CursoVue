const app = Vue.createApp({
    // template : `<h1>Hola Mundo</h1>
    // <p> Desde App.js </p>
    // `
    data(){
        return {
            quote : "Soy Batman",
            author: "Bruce Wayne"
        }
    },

    methods : {
        changeQuote(  ){
            console.log('Hola Mundo de Nuevo', )
            this.author = "David Osornio"

            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }

})

app.mount('#myApp')