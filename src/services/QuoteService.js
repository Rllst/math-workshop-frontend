import api from "./api";

const post = (quote)=> api.post('/quotes', quote);
const get = (id)=> api.get('/quotes/'+id);
const getAll = ()=> api.get('/quotes');
const getRand = ()=> api.get('/quote');
const patch = (id, quote)=> api.patch('/quotes/'+id, quote);
const remove = (id)=> api.delete('/quotes/'+id);

const QuoteService = {
    post,
    get,
    getAll,
    getRand,
    patch,
    remove
}

export default QuoteService;