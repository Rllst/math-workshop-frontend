import api from "./api";

const post = (event) => api.post('/events',event);
const get = (id) => api.get('/events/'+id);
const getAll = ()=> api.get('/events')
const patch = (id,event) => api.patch('/events/'+id, event);
const remove = (id) => api.delete('/events'+id);

const EventService = {
    post,
    get,
    getAll,
    patch,
    remove
}

export default EventService;