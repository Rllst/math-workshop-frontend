import api from "./api";

const post = (category) => api.post('/categories', category);
const getAll = () => api.get('/categories');
const get = (id) => api.get('/categories/'+id);
const patch = (id, category) => api.patch('/categories/'+id, category);
const remove = (id) => api.delete('/categories/'+id);

const CategoryService = {
    post,
    get,
    getAll,
    patch,
    remove
}
export default CategoryService;