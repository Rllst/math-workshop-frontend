import api from "./api";

const post = (folder)=>api.post('/archive',folder);
const postFiles = (id, files)=>{
    [...files].forEach(file=>{
        const fd = new FormData();
        fd.append('file', file);
        return api.post('/archive/file/'+id,fd,{headers: {'Content-Type':'multipart/form-data'}});
    });
}
const getAll = ()=>api.get('/archive');
const get = (id)=>api.get('/archive/'+id);
const getFile = (id)=>api.get('/archive/file/'+id);
const patch = (id, folder)=>api.patch('/archive/'+id,folder);
const remove = (id)=>api.delete('/archive/'+id);
const removeFile = (id)=>api.delete('/archive/file/'+id);

const ArchiveService = {
    post,
    postFiles,
    getAll,
    get,
    getFile,
    patch,
    remove,
    removeFile,
}

export default ArchiveService;