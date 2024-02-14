const baseURL = 'https://jsonplaceholder.typicode.com/'

const users = '/users'
const comments = '/comments'
const posts = '/posts'

const urls = {

    users: {
        base: users,
        byId: (id) => `${users}/${id}`
    },

    posts: {
        byUserId: (userId) => `${users}/${userId}/${posts}`
    },

    comments: {

        byPostId: (postId) => `${posts}/${postId}/${comments}`
    },
}

export {
    baseURL,
    urls
}