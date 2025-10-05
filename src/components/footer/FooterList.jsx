import Link from 'next/link';
import React from 'react'
import FooterListItem from './FooterListItem';

const FooterList = () => {

    const list = [
    {
      title: 'About',
      links: [
        { label: 'How Airbnb works', url: '/how-airbnb-works' },
        { label: 'Newsroom', url: '/newsroom' },
        { label: 'Investors', url: '/investors' },
        { label: 'Airbnb Plus', url: '/airbnb-plus' },
        { label: 'Airbnb Luxe', url: '/airbnb-luxe' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Accessibility', url: '/accessibility' },
        { label: 'This is not a real site', url: '/not-a-real-site' },
        { label: 'Its a pretty awesome clone', url: '/awesome-clone' },
        { label: 'Referrals accepted', url: '/referrals' },
        { label: 'Papafam', url: '/papafam' },
      ],
    },
    {
      title: 'Hosting',
      links: [
        { label: 'Airbnb your home', url: '/airbnb-your-home' },
        { label: 'Airbnb your experience', url: '/airbnb-your-experience' },
        { label: 'Airbnb your service', url: '/airbnb-your-service' },
        { label: 'AirCover for Hosts', url: '/aircover-for-hosts' },
        { label: 'Hosting responsibly', url: '/hosting-responsibly' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', url: '/help-center' },
        { label: 'Get help with booking', url: '/help-with-booking' },
        { label: 'AirCover', url: '/aircover' },
        { label: 'Cancellation options', url: '/cancellation-options' },
        { label: 'Disability support', url: '/disability-support' },
        { label: 'Report a neighborhood concern', url: '/report-neighborhood-concern' },
      ],
    },
  ];


  
  return (
    <section className='container md:flex  flex-wrap justify-between pt-8 pb-4'>

      {
        list.map((item)=> 
            <div key={item.title} className='w-12 md:w-1/2 lg:w-1/4  w-full mb-5 '>
                <h3 className='text-lg md:text-2xl'>{item.title}</h3>
                <FooterListItem links={item.links}/>
            </div>
            
        )
      }
    </section>
  )
}

export default FooterList
