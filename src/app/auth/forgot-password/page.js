"use client";

import { sendResetEmail } from "@/app/lib/resend";
import AuthLayout from "@/components/auth/AuthLayout";
import FormItem from "@/components/form/FormItem";
import Header from "@/components/header/Header";
import { PostData } from "@/data/postData";
import { apiUrl } from "@/utils/utils";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);
     console.log("Submitting forgot password for email:", email);
    try {
     
      const allUsers = await fetch(`${apiUrl}/users`).then(res => res.json());
      const existingUser = allUsers.find(user => user.email === email);
      if(!existingUser) {
        setErrors({ general: 'No account found with that email address.' });
        return;
      }

    

        const  resetToken  = `reset-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;

        const res = await PostData(`${apiUrl}/resetTokens`, {
            email: existingUser.email,
            token: resetToken,
            expires: new Date(Date.now() + 3600000).toISOString() // 1 hour from now 
        });



        const emailRes = await fetch('/api/send-reset-email', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email: existingUser.email, token: resetToken })
                      });
         console.log(`🔗 Reset link: http://localhost:3000/auth/reset-password?token=${resetToken}`);

        if(emailRes.ok ){
            setSuccessMsg('✅ Reset link sent! Check your email (or console).');
            console.log('✅ Email API success');
          } else {
            console.log('📧 Demo mode - check console');
            setSuccessMsg('✅ Reset link ready (console)');
          }
         
      

    }catch (error) {
      setErrors({ general: 'An error occurred. Please try again later.' });
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
 
      <AuthLayout
        title="Forgot Password"
        fields={[
          {
            id: 'email',
            type: 'email',
            text: 'Email',
            value: email,
            setValue: setEmail,
            placeholder: 'Enter your email',
            error: errors.email,
            autoComplete: 'email',
          }
        ]}
        onSubmit={handleSubmit}
        loading={loading}
        errors={errors}
        successMsg={successMsg}
        linkText="Remember your password? Sign In"
        linkHref="/auth/signin" 

      
      />
    </>
  )
}

export default page
                                                                                                                              
  