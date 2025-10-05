const SearchFilters = () => {
    const filters = [
        'Cancellation Flexibility',
        'Type of Place',
        'Price',
        'Rooms and Beds',
        'More filters',
    ];
  return (
    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
        {filters.map((filter) => (
        <button type='button' className='filter-btn border-1 border-gray-200 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-200 ' key={filter}>
            {filter}
        </button>
        ))}
    </div>
  )
}

export default SearchFilters
