import React from 'react'
import {Form, Button, Alert} from 'react-bootstrap'
import {useForm} from 'react-hook-form';

const SignUpPage=()=>{
    const [username,setUsername]=React.useState('');
    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');
    const [confirmPassword,setConfirmPassword]=React.useState('');

    const {register,watch,handleSubmit,reset,formState:{errors}}=useForm();
    const SubmitForm=(data)=>{
        
    if(data.password==data.confirmPassword)
    {
        const datablock={
            username:data.username,
            email:data.email,
            password:data.password,
        }
        const requestOptions={
            method:"POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(datablock)

        }
        console.log(requestOptions);
        fetch('/auth/signup',requestOptions).then(response =>response.json()).then(data=>console.log(data)).catch(err=>console.log(err));
        reset();
    }
    else
    {
        alert("Passwords do not match");
    }
    }
    console.log(watch("username"));
    return(
        <div className="container-comp">
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder='Your Username' {...register("username",{required: true, maxLength:25})}/>
            </Form.Group>
            {errors.username && <span>"Username is required"</span>}
            <Form.Group>
                <Form.Label>EMail ID</Form.Label>
                <Form.Control placeholder='Your IITM Email' {...register("email",{required: true, maxLength:80})}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder='Password' type='password' {...register("password",{required: true, minLength:8})}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder='Confirm Password' type='password' {...register("confirmPassword",{required: true, minLength:8})}/>
            </Form.Group>
            <Form.Group>
                <Button as='sub' variant="primary" onClick={handleSubmit(SubmitForm)}>Signup</Button>
            </Form.Group>
        </div>
    )
}

export default SignUpPage;