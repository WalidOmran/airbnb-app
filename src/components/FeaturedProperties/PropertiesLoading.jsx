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


const PropertiesLoading = () => {
  return (
    <div className="flex container w-full p-4 gap-5">
      <LoadingItem className="animate-pulse space-x-4 w-full sm:w-70 md:w-60" />
      <LoadingItem className="animate-pulse space-x-4 w-70 md:w-60 hidden sm:inline-block" />
      <LoadingItem className="animate-pulse space-x-4 w-60 hidden md:inline-block" />
      <LoadingItem className="animate-pulse space-x-4 w-60 hidden lg:inline-block" />
      <LoadingItem className="animate-pulse space-x-4 w-60 hidden lg:inline-block" />
    </div>
  );
};

export default PropertiesLoading;
