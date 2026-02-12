"use client";
import { useState } from 'react'
import CardButton from './CardButton'
import { useProperties } from '@/context/PropertyContext';
import PropertyActionModal from './Properties/modals/PropertyActionModal';

const ManagePropertyCard = ({property}) => {
    const { setSelectedId ,isLoading } = useProperties();
    const [isOpen, setIsOpen] = useState(false);
    
    
  return (
       <>
       <div className="px-4 pb-4 mt-auto">
          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
            
          
            <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">
              Manage Card
            </span>

          
            <div className="flex items-center gap-2 ml-1">
          
              <CardButton
                  onClick={()=> setIsOpen(true)}  
                  buttonText=""
                  type='edit'
              />

              <CardButton
                  onClick={() => setSelectedId(property.id)}  
                  buttonText=""
                  type='delete'
              />
            

            </div>
          </div>
        </div>

        <PropertyActionModal 
            isOpen={isOpen}
            onClose={()=> setIsOpen(false)}
            loading={isLoading}
            property={property}
            mode='edit'  
          />
       
       </>
        
  )
}

export default ManagePropertyCard
