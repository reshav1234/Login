import React from 'react';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import *as yup from 'yup';

const Form = () =>
{
    // Setting how our data should look like
    const schema = yup.object().shape({
        fullname: yup.string().email().required("Your full name is required."), 
        email: yup.string().positive().integer().min(18).required(),
        age: yup.number().required(),
        password: yup.string().min(4).max(20).required(),
        confirmpassword: yup.string().oneOf([yup.ref("password"), null],"Password do not match.").required()
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) =>
    {
        console.log(data);
    }

    return(
    <form onSubmit = {handleSubmit(onSubmit)}>
        <input type = "text" placeholder = "Full Name..." {...register("fullname")} />
        <p>{errors.fullname?.message}</p>
        <input type = "text" placeholder = "Email..." {...register("email")}/>
        <p>{errors.email?.message}</p> 
        <input type = "text" placeholder = "Age..." {...register("age")}/>
        <p>{errors.age?.message}</p>
        <input type = "password" placeholder = "Password..." {...register("password")}/>
        <p>{errors.password?.message}</p>
        <input type = "password" placeholder = "Confirn passoword..." {...register("confirmpassword")}/>
        <p>{errors.confirmpassword?.message}</p>
        <input type = "submit" />
    </form>
  )
}

export default Form