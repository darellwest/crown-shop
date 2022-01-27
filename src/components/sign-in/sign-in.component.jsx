import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import './sign-in.styles.scss';
import {auth, signInWithGoogle } from '../../firebase/firebase.utils';







class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit =  async event => {
        event.preventDefault();
        const {email, password} = this.state;
        
        try{
            await signInWithEmailAndPassword(auth, email, password);
            this.setState({ email: '', password: '' });
        }catch(error){
            console.log(error);
        }
        
        
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your username and password</span>

                <form onSubmit = {this.handleSubmit} novalidate="">
                    <FormInput 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        type="email" 
                        name="email" 
                        label="Email"
                        required
                    />
                    <FormInput 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        name="password" 
                        type="password" 
                        label="Password"
                        required
                    />
                    <div className="button">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}



export default SignIn;