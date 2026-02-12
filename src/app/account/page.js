
import Header from '@/components/header/Header'
import AccountLayout from '@/components/account/AccountLayout';

import { reservationService } from '@/services/reservationService';
import { Suspense } from 'react';

const AccountPage = () => {

  

  return (
    <>
    <Header />
    <div  className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      <h1 className='text-3xl front-bold mb-8 text-gray-800' >Account Dashboard</h1>
    
     <Suspense fallback={<div>Loading Account...</div>}>
       <AccountLayout  />
    </Suspense>
    </div>
    
    </>
  )
}

export default AccountPage