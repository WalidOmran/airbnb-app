const ResultHeading = ({range,numOfGuests,location}) => {
    return(
            <div>   
            <p className='text-xm pt-6'>300+ Stays - {range} - for {numOfGuests} guests</p>
            <h1 className='text-3xl font-semibold mt-2 mb-6 '>Stays in {location} </h1>
        </div>
    )
}

export default ResultHeading;
