"use client";
import { useState } from "react";
import { signUpSchema } from "@/app/lib/schemas/signupSchema";
import { PostUserData } from "@/data/postUserData";
import { apiUrl } from "@/utils/utils";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';
import AuthLayout from "@/components/auth/AuthLayout";
import SignInWithGoogle from "@/components/auth/SignInWithGoogle";



const page = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [successMsg, setSuccessMsg] = useState('');
    const router = useRouter();

   


  
    const fields = [
      { id: 'userName', type: 'text', text: 'User name', value: userName, setValue: setUserName, placeholder: 'Enter your user name', error: errors.userName, autoComplete: 'userName' },
      { id: 'email', type: 'email', text: 'Email', value: email, setValue: setEmail, placeholder: 'Enter your email', error: errors.email, autoComplete: 'email' },
      { id: 'phone', type: 'tel', text: 'Phone', value: phone, setValue: setPhone, placeholder: 'Enter your phone', error: errors.phone, autoComplete: 'phone' },
      { id: 'password', type: 'password', text: 'Password', value: password, setValue: setPassword, placeholder: '********', error: errors.password, autoComplete: 'current-password' },
      { id: 'confirmPassword', type: 'password', text: 'Confirm Password', value: confirmPassword, setValue: setConfirmPassword, placeholder: '********', error: errors.confirmPassword, autoComplete: 'new-password' },
    ];



    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);

        try {
          
          const validatedData  = signUpSchema.parse({
            userName,
            phone,
            email,
            password,
            confirmPassword
          });
         
          const allUsers = await fetch(`${apiUrl}/users`).then(res => res.json());

          const existingUser = allUsers.find(user => user.email === validatedData.email);
          if(existingUser) {
            setErrors({ general: "A user with this email already exists. Please use a different email." });
            return;
          }else {

            const hashedPassword = await bcrypt.hash(validatedData.password, 12);
            const newUser = await PostUserData(`${apiUrl}/users`, {
                id: uuidv4(),
                name: validatedData.userName,
                email: validatedData.email,
                phone: validatedData.phone,
                password: hashedPassword,
                provider: 'credentials',

              });

              if(newUser) {
                setSuccessMsg("Signup successful! You can now sign in.");
                setTimeout(()=> {
                  router.push('/auth/signin');
                }, 1500);
              }else {
                 setErrors({ general: "Failed to create user. Please try again." });
                return;
              }
          }
          

          
          // setSuccessMsg("Signup successful! You can now sign in.");
          
        } catch (error) {
          if (error instanceof z.ZodError) {
            // console.log("ZodError full:", error);
            const rawIssues = Array.isArray(error.issues) ? error.issues : 
                              Array.isArray(error.errors) ? error.errors : [];

            const fieldErrors = {};
            rawIssues.forEach((err) => {
              const field = err.path[0];
              const message = err.message;
              fieldErrors[field] = message;

            });

            setErrors(fieldErrors);
            
          } else {
            console.error("Unexpected error:", error);
            setErrors({ general: "An unexpected error occurred. Please try again later." });
          }
        } finally {
          setLoading(false);
        }
    
          
        
     
    }
  return (
    <>
      <AuthLayout 
        title="Sign Up"
        fields={fields}
        onSubmit={handleSubmit}
        loading={loading}
        errors={errors}
        successMsg={successMsg}
        linkText="Already have an account? Sign In"
        linkHref="/auth/signin"
      >
        <SignInWithGoogle loading={loading}  />
      </AuthLayout>
    </>
  )
}

export default page
