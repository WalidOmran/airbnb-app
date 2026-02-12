
const SaveButton = ({ loading }) => {
  
  return (
    <button
        type="submit"
        disabled={loading}
        className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-black transition-all active:scale-[0.98] disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg shadow-gray-200"
      >
        {loading ? "Creating Listing..." : "List Your Property"}
      </button>
  )
}

export default SaveButton
