import api from "./api";

const post = (member)=> api.post('/team', member);
const get = (id)=> api.get('/team/'+id);
const getAll = ()=> api.get('/team');
const patch = (id, member)=> api.patch('/team/'+id, member);
const patchImage = (id, image)=>{
    const formData = new FormData();
    formData.append('image', image);
    return api.post('/team/image/'+id, formData, {headers: {'Content-Type':'multipart/form-data'}});
}
const remove = (id)=> api.delete('/team/'+id);

const TeamService = {
    post,
    get,
    getAll,
    patch,
    patchImage,
    remove
}

export default TeamService;