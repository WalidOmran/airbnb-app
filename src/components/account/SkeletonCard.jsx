import React from 'react'


const Card = () => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm animate-pulse">
     
      <div className="aspect-[4/3] bg-gray-200" />
      
      <div className="p-4 space-y-3">
       
        <div className="h-4 bg-gray-200 rounded-full w-3/4" />
        
     
        <div className="h-3 bg-gray-100 rounded-full w-1/2" />
        
        <div className="pt-3 border-t border-gray-100 flex justify-between">
          <div className="h-4 bg-gray-200 rounded-full w-1/4" />
          <div className="h-4 bg-gray-200 rounded-full w-1/4" />
        </div>
        
      
        <div className="h-10 bg-gray-100 rounded-xl w-full mt-2" />
      </div>
    </div>
  )
}

const SkeletonCard = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {Array.from({ length: count }).map((_, i) => <Card key={i} />)}
     </div>
  );
};

export default SkeletonCard;


