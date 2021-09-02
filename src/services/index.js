import Get from './Get';

// Get
const getPost = () => Get('posts');
const getPostId = (id) => Get(`posts/${id}`);

const API = {
    getPost,
    getPostId
}

export default API;