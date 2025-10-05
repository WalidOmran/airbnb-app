const LoadingItem = ({ className }) => {
  return (
    <div className={className} role="status" aria-live="polite" aria-busy="true">
      <div className="relative h-70 w-[100%] mb-3 rounded-lg bg-gray-200"></div>
      <div className="flex-1 space-y-6 py-1">
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-2 rounded bg-gray-200"></div>
            <div className="col-span-1 h-2 rounded bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 h-2 rounded bg-gray-200"></div>
            <div className="col-span-2 h-2 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CitiesLoading = () => {
  return (
    
    <div className="flex container w-full p-4 gap-5">
         <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8 my-8">
            <LoadingItem className="relative w-80 h-48 bg-gray-200 overflow-hidden" />
            <LoadingItem className="relative w-full h-48 bg-gray-200 overflow-hidden " />
            <LoadingItem className="relative w-full h-48 bg-gray-200 overflow-hidden" />
            <LoadingItem className="relative w-full h-48 bg-gray-200 overflow-hidden" />
        </div>
       </div>
  )
}

export default CitiesLoading
