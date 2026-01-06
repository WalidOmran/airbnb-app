import { apiUrl } from "@/utils/utils";
import { useAuthApi } from "./useAuthApi";
import bcrypt from 'bcryptjs';

const useResetPassword = () => {

    const {validateToken, updateUserPassword, deleteResetToken , fetchWithError} = useAuthApi();

    const handleResetPassword = async (token, newPassword, setErrors,setLoading) => {

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Validaate the rest token
        const tokenData = await validateToken(token);
        if(!tokenData) {
            setErrors({ general: 'Invalid or expired token. Please request a new password reset.' });
            setLoading(false);
            return false;
        }

        // Fetch user associated with the token
        const allUsers = await fetchWithError(`${apiUrl}/users`);
        const userData = allUsers.find( user => user.email === tokenData.email);
        if(!userData) {
            setErrors({ general: 'User not found. Please sign up.' });
            setLoading(false);
            return false;   
        }

        // Update user password
        await updateUserPassword(userData.id , hashedPassword);

        // Delete the used reset token 

        await deleteResetToken(tokenData.id);

        return true;
    }

    return { handleResetPassword};

}

export default useResetPassword
