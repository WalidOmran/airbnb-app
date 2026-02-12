const Loading = () => {
  return (
    <div className="container py-12 animate-pulse">
      
      <div className="w-full h-[300 md:h-[500px] bg-gray-200 rounded-2xl mb-8"></div>

      <div className="flex justify-between items-center mb-6">
      
        <div className="h-10 bg-gray-200 rounded-lg w-1/3"></div>
        
        <div className="h-10 bg-gray-200 rounded-full w-10"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-12 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
        </div>

    
        <div className="h-[400px] bg-gray-100 rounded-3xl border border-gray-200"></div>
      </div>
    </div>
  );
};

export default Loading;