import HeaderElement from "../../HeaderElement";
import {Box, Button, Form, FormField, Text, TextInput} from "grommet";
import {useState} from "react";
import axios from "axios";
import {ToastContainer} from "react-toastify";
import {api} from "../../../Constansts";

const LoginPage = ()=>{
    const [credential, setCredential] = useState({});
    const handleChange = (event)=>{
        setCredential({...credential, [event.target.name]: event.target.value});
    }
    const submit = ()=>{
        axios.post('http://localhost:8000/api/login',credential).then((res)=>{
            localStorage.setItem('access_token', res.data.access_token);
            localStorage.setItem('refresh_token', res.data.refresh_token);
            window.location.href='/admin';
        });
    }
    return(
        <>
            <HeaderElement/>
            <ToastContainer/>
            <Box align='center'>
                <Box pad='medium'>
                    <Text size='3xl' color='brand'>Якщо ви це бачите, ви адміністратор сайту, або лізете не у свої справи</Text>
                </Box>
                <Box align='center' pad='medium' margin='small' width='large' round='medium' background='light-3'>
                    <Form>
                        <FormField label='Email'>
                            <TextInput name ='email' onChange={handleChange}/>
                        </FormField>
                        <FormField label='Password'>
                            <TextInput name='password' onChange={handleChange}/>
                        </FormField>
                    </Form>
                    <Button primary label='LogIn' onClick={submit}/>
                </Box>
            </Box>
        </>
    )
}

export default LoginPage;