import axios from 'axios'
import axious from 'axios'

const apiKey = 'bX3MGfZmo98kHJ9AV2mfeQ9Ab8s3AOFw'
//`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

export default giphyApi


// giphyApi.get('/random')
// .then(resp => {
//     const {data} = resp.data
//     const {url} = data.images.original

//     console.log(url);
//     //console.log(resp.data.data.images.original.url);

//     // const imagen = resp.data.data.images.original.url
//     // const img = document.createElement('img')
//     // img.src = imagen

//     // document.body.append(img)


//     const img = document.createElement('img')
//     img.src = url

//     document.body.append(img)

// })