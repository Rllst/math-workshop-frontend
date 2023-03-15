import api from "./api";

const post = (folder) => api.post('/gallery',folder);
const postImages=(images,id)=>{
    [...images].forEach(image=>{
        const fd = new FormData();
        fd.append('image', image);
        api.post('/gallery/'+id, fd,{headers: {'Content-Type':'multipart/form-data'}});
    });
}
const getAll = ()=> api.get('/gallery');
const get = (id)=> api.get('/gallery/'+id);
const patch = (id, folder)=> api.patch('/gallery/'+id,folder);
const remove = (id)=> api.delete('/gallery/'+id);
const removeImage = (id) => api.delete('/gallery/image/'+id);

const GalleryService = {
    post,
    postImages,
    getAll,
    get,
    patch,
    remove,
    removeImage
}

export default GalleryService;