import SelectReservationDate from './SelectReservationDate'
import NumOfGuestsInput from './NumOfGuestsInput'
import ReservationFooter from './ReservationFooter'

const ReservationCard = ({ property, setOpenReservationCard, openAuthModal }) => {
  return (
    <section
      onClick={(e) => e.stopPropagation()}
    
      className='relative bg-white md:border md:border-gray-200 md:shadow-xl md:rounded-2xl overflow-hidden transition-all duration-300 md:min-w-[420px]'
    >
      <div className='p-2 md:py-6 md:px-4 space-y-6'>
        
   
        <div className="w-full">
           <SelectReservationDate property={property} />
        </div>
        <hr className="hidden md:block border-gray-100" />
        <div className="w-full">
           <NumOfGuestsInput property={property} />
        </div>

       
        <div className="pt-2">
          <ReservationFooter 
            property={property}
            setOpenReservationCard={setOpenReservationCard}
            openAuthModal={openAuthModal}
          />
        </div>
      </div>
    </section>
  )
}

export default ReservationCard