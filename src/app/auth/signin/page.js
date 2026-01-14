'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { z } from 'zod';
import { signInSchema } from '@/app/lib/schemas/signinSchema';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/components/auth/AuthLayout';
import SignInWithGoogle from '@/components/auth/SignInWithGoogle';


const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [successMsg, setSuccessMsg] = useState('');


    const fields = [
      { id: 'email', type: 'email', text: 'Email', value: email, setValue: setEmail, placeholder: 'Enter your email', error: errors.email, autoComplete: 'email' },
      { id: 'password', type: 'password', text: 'Password', value: password, setValue: setPassword, placeholder: '********', error: errors.password, autoComplete: 'current-password' },
   ];
   
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);

        try{
            signInSchema.parse({
                email,
                password
            });

        const result =   await signIn('credentials', {    
                redirect: false,  
                email,
                password,
                // callbackUrl: '/',
                // remember 
        });


       if(result?.error){
        setErrors({ general: "Invalid email or password" });
       }else if(result?.ok) {
            setSuccessMsg('Sign in successful! Redirecting...');
            router.refresh();
            setTimeout(() => {
                router.push('/');
            }, 1000);
            
        }


        }catch(error){

            if (error instanceof z.ZodError) {
                const rawIssues = Array.isArray(error.issues) ? error.issues : [];
                const fieldErrors = {};
                rawIssues.forEach((issue) => {
                    const field = issue.path[0];
                    fieldErrors[field] = issue.message;
                });

                setErrors(fieldErrors);
            } else {
                setErrors({ general: 'An unexpected error occurred. Please try again.' });
            }

        }finally {
            setLoading(false);
        }
        
        
       
    };
  return (
    <>
    
        <AuthLayout 
            title="Sign In"
            fields={fields}
            onSubmit={handleSubmit}
            loading={loading}
            errors={errors}
            successMsg={successMsg}
            linkText="Don't have an account? Sign Up"
            linkHref="/auth/signup"
            linkHrefForgotText="Forgot your password?"
            linkHrefForgot="/auth/forgot-password"

        >
             <SignInWithGoogle loading={loading}  />
        </AuthLayout>
        
    </>
  )
}

export default SignInPage
 
