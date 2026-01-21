import SelectReservationDate from './SelectReservationDate'
import NumOfGuestsInput from './NumOfGuestsInput'
import ReservationButtons from './ReservationButtons'

const ReservationCard = ({property,setOpenReservationCard , openAuthModal}) => {
      return (
        <section
        className='relative top-30 md:top-0 max-w-100 bg-white md:shadow-sm md:rounded-xl transform transition duration-300 ease-out' onClick={(e) => e.stopPropagation()}>
            <div className='pb-8'>
                <SelectReservationDate property={property}  />
                <NumOfGuestsInput property={property} />
                <ReservationButtons  
                  property={property}
                 setOpenReservationCard={setOpenReservationCard}
                 openAuthModal={openAuthModal}
               />
              </div>
        </section>
      )
    }

export default ReservationCard
