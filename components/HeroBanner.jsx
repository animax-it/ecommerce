import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'> SMALL  </p>
            <h3> mid text</h3>
            <img src="" alt='headphones'
            className='hero-banner-image' />
            <div>
                <Link href='/product/ID'>
                    <button type='button'>button Text</button>
                </Link>

                <div className='desc'>
                    <h5>Description</h5>
                    <p> DESCRPTION..</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner