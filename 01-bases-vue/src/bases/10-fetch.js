const apiKey = 'bX3MGfZmo98kHJ9AV2mfeQ9Ab8s3AOFw'
//https://api.giphy.com/v1/gifs/random?api_key=bX3MGfZmo98kHJ9AV2mfeQ9Ab8s3AOFw

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }` )
.then ( resp => resp.json())
.then (({data}) => {
    const {url} = data.images.original
    // console.log(url)


    const img = document.createElement('img')
    img.src = url

    document.body.append(img)
})
