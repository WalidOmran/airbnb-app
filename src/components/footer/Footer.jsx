import React from 'react'
import FooterList from './FooterList'
import CopyRight from './CopyRight'

const Footer = () => {
  return (
    <footer className='bg-gray-100 shadow-md' role="contentinfo">
      <div className="container"> 
        <FooterList/>
        <CopyRight/>
      </div>
    </footer>
  )
}

export default Footer
