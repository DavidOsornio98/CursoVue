const miPromesa = () =>{
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            // resolve('Tenemo un valor en la promesa')
            reject('Rekect en mi promesa')

        }, 1000)
    })
}


const medirTiempo = async() => {


    try {
        console.log('inicio');

        const respuesta = await miPromesa()

        console.log(respuesta);




        console.log('final');

        return 'fin de medir tiempo'

        // throw 'Error al medir tiempo'
        
    } catch (error) {
        return 'catch en medirTiempo'
        
    }
    

}

medirTiempo()
.then(valor => console.log('Then exito', valor))
.catch(err => console.log(err))