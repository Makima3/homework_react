const baseURL = 'https://rickandmortyapi.com/api'

const characters = '/character'
const episodes ='/episode'

const urls  = {
    episodes,
    characters:{
        base: characters,
        byIds:(ids) => `${charcters}/${ids}`
    }
}
export {
    urls,
    baseURL
}