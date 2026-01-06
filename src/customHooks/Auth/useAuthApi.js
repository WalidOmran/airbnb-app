import { apiUrl } from "@/utils/utils";

export const useAuthApi = () => {


  // Helper function to fetch with error handling
  const fetchWithError = async (url, options = {}) => {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error('API error');
    return res.json();
  };


 
  // Update user password
  const updateUserPassword = async (userId, hashedPassword) => {
    return fetchWithError(`${apiUrl}/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({password : hashedPassword })
    });
  };

  // Validate reset token
  const validateToken = async (token) => {
    const tokens = await fetch(`${apiUrl}/resetTokens`).then(r => r.json());
    return tokens.find(t => t.token === token && new Date(t.expires) > new Date());
  };
  // Delete reset token
  const deleteResetToken = async (tokenId) => {
    return fetch(`${apiUrl}/resetTokens/${tokenId}`, { method: 'DELETE' });
  };

  

  return { updateUserPassword, deleteResetToken, validateToken , fetchWithError };
};
