import api from "./api";

const post = (post)=> api.post('/post', post);
const getPage = (query, categories, page) => api.get('/posts/'+page, {params: {query: query, categories: JSON.stringify(categories.map(category=>category.id))}});
const get = (id)=> api.get('/post/'+id);
const getAll = () => api.get("/posts");
const patch = (id, post)=> api.patch('/post/'+id, post);
const patchImage = (id, image)=>{
    const formData = new FormData();
    formData.append('image', image);
    return api.post('/post/image/'+id, formData, {headers: {'Content-Type':'multipart/form-data'}});
}
const remove = (id) => api.delete('/post/'+id);

const PostService = {
    post,
    getPage,
    get,
    getAll,
    patch,
    patchImage,
    remove
}

export default PostService;