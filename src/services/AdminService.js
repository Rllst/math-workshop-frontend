import api from "./api";

const post = (user)=> api.post('/admins', user);
const getAll = ()=> api.get('/admins');
const get = (id)=> api.get('/admins/'+id);
const patch = (id, user)=> api.patch('/admins/'+id,user);
const remove = (id)=> api.delete('/admins/'+id);

const AdminService = {
    post,
    get,
    getAll,
    patch,
    remove
}

export default AdminService;