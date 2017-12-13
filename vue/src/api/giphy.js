// Public bata key.
// https://github.com/dreamingechoes/giphy_ex#usage
const apiKey = 'dc6zaTOxFJmzC'

export default {

    fetchGifs(query) {
        const params = encodeURIComponent(query).replace(/%20/g, '+')
        return fetch(`https://api.giphy.com/v1/gifs/search?q=` + params + `&api_key=${apiKey}`)
            .then(res => res.json())
    }
}