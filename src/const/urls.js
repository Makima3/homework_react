const baseURL = 'https://jsonplaceholder.typicode.com'
const users = '/users'
const posts = '/posts'
const comments = '/comments'

const urls = {
    users: {
        base: users,
        byId: (id) => `${users}/${id}`
    },
    posts: {
        base: posts,
        byUserId: (userId) => `${posts}/${userId}`
    },
    comments: {
        base: comments,
        byPostId: (postId) => `${posts}/${postId}`
    }
}

export {
    baseURL,
    urls
}

