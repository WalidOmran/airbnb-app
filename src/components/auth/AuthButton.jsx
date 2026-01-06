 const  AuthButton = ({ loading, children, ...props }) => {
  return (
    <button
      disabled={loading}
      className="w-full px-4 py-2 mt-5 bg-red-400 text-white rounded hover:bg-red-600 focus:ring-4 focus:ring-red-100 focus:outline-0 transition disabled:opacity-50"
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}

export default   AuthButton;