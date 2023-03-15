import api from "./api";

const post = (id, comment) => api.post('/comments/' + id, comment);
const approve = (id, comment, judgement) => api.post('/comments/approve/' + id, comment,{params: {judgement: judgement}});
const get = (id)=> api.get('/comments/'+id);
const getAll = ()=> api.get('/comments');
const remove = (id)=> api.delete('/comments/'+id);

const CommentService = {
    post,
    approve,
    get,
    getAll,
    remove
}

export default CommentService;