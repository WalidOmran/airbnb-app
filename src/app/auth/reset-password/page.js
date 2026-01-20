"use client";
import { Suspense } from 'react'; 
import { resetPasswordSchema } from "@/app/lib/schemas/resetPasswordSchema";
import { useSearchParams } from "next/navigation"
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "@/components/auth/AuthLayout";
import useResetPassword from "@/customHooks/Auth/useResetPassword";

// =================== MAIN PAGE (Server Component) ===================
export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  )
}

// =================== CLIENT COMPONENT (All hooks here) ===============
function ResetPasswordContent() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [successMsg, setSuccessMsg] = useState('');
    
    const searchParams = useSearchParams();
    const token = searchParams.get('token'); 

    const router = useRouter();
    const {handleResetPassword} = useResetPassword();

    const fields = [
        { id: 'password', type: 'password', text: 'Password', value: password, setValue: setPassword, placeholder: '********', error: errors.password, autoComplete: 'current-password' },
        { id: 'confirmPassword', type: 'password', text: 'Confirm Password', value: confirmPassword, setValue: setConfirmPassword, placeholder: '********', error: errors.confirmPassword, autoComplete: 'new-password' },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);
        try {
            const validatedData = resetPasswordSchema.parse({
                password,
                confirmPassword
            });

            if(!token) {
                setErrors({ general: 'Invalid or missing token. Please try again.' });
                setLoading(false);
                return;
            }

            const resetPasswordSuccess = await handleResetPassword(token, validatedData.password, setErrors, setLoading);

            if(!resetPasswordSuccess) {
                logger.warn('Failed to reset password');
                setErrors({ general: 'Failed to reset password. Please try again. 9' });
                setLoading(false);
                return;
            }

            setSuccessMsg('Password has been reset successfully. You can now sign in with your new password.');
            setLoading(false);
            
            setTimeout(() => {
                router.push('/auth/signin');
            }, 1500);
            
        } catch(err) {
            setErrors({ general: 'Failed to reset password. Please try again later.88' });
            setLoading(false);
            logger.error('Error resetting password: ', err);
        }
    }

    return (
        <>
            <AuthLayout
                title="Reset Password"
                fields={fields}
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
