import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../../store/authSlice';
import { Button, Input, Logo } from '../index.js';
import { useDispatch } from "react-redux";
import authService from '../../appwrite/auth.js';
import { useForm } from 'react-hook-form';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    // extract these two methods from react-hook-form
    // register linked each form field to form state
    // it registers input/select element and apply validation to it
    // handleSubmit handles form submission, it collects data from registered fields and executing callback if validated
    // here callback is login
    const [error,setError] = useState("");

    const login = async(data) => {
        setError("");
        try{
            const session = await authService.login(data);
            if(session) 
            {
                const userData = await authService.getCurrentUser();
                if(userData)
                {
                    dispatch(authLogin(userData));
                }
                navigate("/");
                // after user logged in, redirect user to home
            }
        } catch(error) {
            setError(error.message);
        }
    }

    return (
        <div className="flex items-center justify-center w-full">
            <div className="mx-auto w-full max-x-lg bg-gray-100 rounded-xl p-10 border border-black/10">
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-x-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don't have any account?
                    <Link
                    to='/signup'
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                {/* when form is submitted, we pass reference of our function (to handleSubmit) that must be executed after submit button */}
                {/* here in this case login is referred inside handleSubmit */}
                {/* we don't have to manage the state/values of input fields */}
                {/* handleSubmit automatically extracts values and passes them to the method specified */}
                <form onSubmit={handleSubmit(login)} className="mt-8">
                    <div className="space-y-5">
                        <Input
                        label= "Email: "
                        placeholder="Enter your email" // not mentioned in the component, but spreading rest of props will do it
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm.test(value) || 
                                "Email address must be a valid address",
                            }
                        })}
                        // spread operator used to apply all returned props from register to input field
                        // some are overwritten/self written like email, password and all
                        // rest validations are extracted as it is.
                        />
                        <Input
                        label= "Password: "
                        type="password"
                        placeHolder="Enter your password"
                        {...register("password", {
                            required: true,
                        })}
                        />
                        <Button
                        type="submit"
                        className="w-full"
                        >Sign In</Button>
                    </div>
                </form>
            </div>
        </div>  
    );
}

export default Login;