import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CopyRight = () => {
  const linksList = [
    {
      text : 'Facebook',
      icon : "/social-media-icons/facebook.png",
      link : 'https://www.facebook.com/airbnb',
    },
    {
      text : 'Twitter',
      icon : "/social-media-icons/twitter.png",
      link : 'https://twitter.com/airbnb',
    },
    {
      text : 'Instagram',
      icon : "/social-media-icons/instagram.png",
      link : 'https://instagram.com/airbnb',
    }
  ]
  return (
    <section className='flex justify-between  pb-4 pt-8 border-t border-gray-300  bg-gray-100'>
      <p>CopyRight@ 2025</p>
      <ul className='flex space-x-4'>
        {
          linksList.map(({text,link,icon},index) => 
            <li key={`${text}-${link}-${index}`}>
              <Link href={link}  className='inline-block w-[32px] h-[32px] rounded-full hover:shadow-lg hover:scale-105 transition duration-150 ease-out' target='_blank' rel='noopener noreferrer' aria-label={`Visit our ${text} page`}>
                  <Image src={icon} alt={text} width={32} height={32} />
              </Link>
            </li>
          )
        }
        
      </ul>
    </section>
  )
}

export default CopyRight
