const LoadingItem = () => {
  return (
    <div className="col-span-1 min-w-[300px] h-[200px] bg-gray-200  overflow-hidden animate-pulse space-x-4 " role="status" aria-live="polite" aria-busy="true">
      <div className="relative  w-full h-full mb-3 rounded-lg "></div>
        
    </div>
  );
}; 


const CitiesLoading = () => {
  return (
    
    <div className=" container w-full p-4 ">
         
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-18 gap-y-6 ">

            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
        </div>
       </div>
  )
}

export default CitiesLoading
