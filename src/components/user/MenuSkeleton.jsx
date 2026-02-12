const MenuSkeleton = () => {
  return (
    <div className="flex flex-col w-full bg-white p-2">
  
      <div className="px-4 py-3 mb-2 border-b border-gray-50">
        <div className="h-4 w-24 bg-gray-200 rounded-md animate-pulse mb-2"></div>
        <div className="h-3 w-32 bg-gray-100 rounded-md animate-pulse"></div>
      </div>

     
      <div className="space-y-3 px-4 py-2">
        <div className="h-4 w-full bg-gray-100 rounded-md animate-pulse"></div>
        <div className="h-4 w-4/5 bg-gray-100 rounded-md animate-pulse"></div>
        <div className="h-4 w-full bg-gray-100 rounded-md animate-pulse"></div>
      </div>

     
      <div className="mt-4 pt-2 border-t border-gray-100 px-4">
        <div className="h-5 w-20 bg-red-50 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
};

export default MenuSkeleton