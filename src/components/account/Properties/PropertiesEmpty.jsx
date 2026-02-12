import { HomeIcon } from 'lucide-react'
import React from 'react'

const PropertiesEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 px-4">
      <div className="bg-white p-4 rounded-full shadow-sm mb-4">
        <HomeIcon size={40} className="text-gray-300" />
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-2">No properties listed yet!</h3>
      <p className="text-gray-500 max-w-xs mb-8 text-sm">
        It looks like you haven't listed any properties yet. Start sharing your space and earn extra income!   
      </p>
      
    </div>
  )
}

export default PropertiesEmpty
