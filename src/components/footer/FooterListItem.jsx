import Link from 'next/link'
import { memo } from 'react'
const FooterListItem = memo(({links})=> {
    return(
        <ul className='mt-4'>
            {
                links.map(({ label, url },index)=> (
                        <li className='mb-1 text-base ' key={`${label}-${url}-${index}`}>
                            <Link href={url}  aria-label={label}>{label}</Link>
                        </li>
                    )
                )
            }
        </ul>
    )
  },[]);

export default FooterListItem
