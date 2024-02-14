const baseURL = 'https://jsonplaceholder.typicode.com/'

const users = '/users'
const comments = '/comments'
const posts = '/posts'

const urls = {
    comments,

    users: {
        base: users,
        byId: (id) => `${users}/${id}`
    },

    posts: {
        base: posts,
        byId: (id) => `${posts}/${id}`
    }
}

export {
    baseURL,
    urls
}