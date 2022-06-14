import React from 'react';
import { useSignInWithEmailAndPassword,useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [SignInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if(loading || gLoading){
        return <Loading></Loading>
    }

    if(error || gError){
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    if(user || gUser){
        navigate(from, {replace: true});
    }

    const onSubmit = data => {
        console.log(data);
        SignInWithEmailAndPassword(data.email,data.password);
    }


    return (
        <div>
            
        </div>
    );
};

export default Login;