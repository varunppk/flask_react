import React from 'react'
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {Form, Button, Alert} from 'react-bootstrap'
import { login } from '../auth';


const LoginPage=()=>{
    const {register,handleSubmit,watch,formState:{errors}}=useForm();
    console.log(watch('username'));

    const loginUser=(data)=>{
        console.log(data);
        const requestOptions={
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        }

        fetch('/auth/login',requestOptions).then(res=>res.json()).then(data=>{console.log(data)})
    }
    return(
        <div className="container-comp">
            <h1>Login Page</h1>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder='Your Username' {...register("username",{required: true, maxLength:25})}/>
            </Form.Group>
            {errors.username && <span>"Username is required"</span>}
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control placeholder='Password' type='password' {...register("password",{required: true, minLength:8})}/>
            </Form.Group>
            <Form.Group>
                <Button as='sub' variant="primary" onClick={handleSubmit(loginUser)}>Signup</Button>
            </Form.Group>
        </div>
    )
}

export default LoginPage;