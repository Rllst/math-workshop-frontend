import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const successMessage = (message)=>{
    toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    })
}

const errorMessage = (message)=>{
    toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    })
}

const warningMessage = (message)=>{
    toast.warning(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    })
}

export {successMessage, errorMessage, warningMessage}