import Image from 'next/image'
import React from 'react'
import image from '../public/repair-logo.png'

import style from './ServiceItems.module.css'

import serviceOne from '../public/service-2.jpg'
import serviceTwo from '../public/service-1.jpg'
import serviceThree from '../public/service-4.jpg'
import serviceFour from '../public/service-3.jpg'

const ServiceItems = () => {

  return (
    <React.Fragment>
      <section className="container mx-auto bg-[#F5F5F5] my-4 py-10">
        <div className="grid sm:grid-cols-2 flex items-center justify-between gap-5 grid">

          {/* service-innerLeft */}
          <div className='service-innerLeft'>
            <h3 className='font-bold capitalize text-slate-700 text-2xl my-8'>Home Service at your doorstop</h3>
            <div className="border">
              <h4 className='px-4 pt-4 text-lg font-semibold capitalize'>What are you looking for?</h4>
              <div className='block p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='border p-3 bg-[#FFF]'>
                  <picture>
                    <Image width={200} src={image} alt='image' />
                  </picture>
                  <p>Women Saloon Spa & laser Cleaner</p>
                </div>
                <div className='border p-3 bg-[#FFF]'>
                  <picture>
                    <Image width={200} src={image} alt='image' />
                  </picture>
                  <p>Women Saloon Spa & laser Cleaner</p>
                </div>
                <div className='border p-3 bg-[#FFF]'>
                  <picture>
                    <Image width={200} src={image} alt='image' />
                  </picture>
                  <p>Women Saloon Spa & laser Cleaner</p>
                </div>
                <div className='border p-3 bg-[#FFF]'>
                  <picture>
                    <Image width={200} src={image} alt='image' />
                  </picture>
                  <p>Women Saloon Spa & laser Cleaner</p>
                </div>
                <div className='border p-3 bg-[#FFF]'>
                  <picture>
                    <Image width={200} src={image} alt='image' />
                  </picture>
                  <p>Women Saloon Spa & laser Cleaner</p>
                </div>
                <div className='border p-3 bg-[#FFF]'>
                  <picture>
                    <Image width={200} src={image} alt='image' />
                  </picture>
                  <p>Women Saloon Spa & laser Cleaner</p>
                </div>
                <div className='border p-3 bg-[#FFF]'>
                  <picture>
                    <Image width={200} src={image} alt='image' />
                  </picture>
                  <p>Women Saloon Spa & laser Cleaner</p>
                </div>
                <div className='border p-3 bg-[#FFF]'>
                  <picture>
                    <Image width={200} src={image} alt='image' />
                  </picture>
                  <p>Women Saloon Spa & laser Cleaner</p>
                </div>
                <div className='border p-3 bg-[#FFF]'>
                  <picture>
                    <Image width={200} src={image} alt='image' />
                  </picture>
                  <p>Women Saloon Spa & laser Cleaner</p>
                </div>
              </div>
              <div className='border m-4 p-4 rounded'>
                <h1 className='underline font-semibold text-lg mb-4'>New Launch</h1>
                <div className="flex justify-between rounded items-center bg-[#FFF] p-4 shadow">
                  <div>
                    <h2 className='font-semibold text-md'>Native RO Water Purifier</h2>
                    <p className='text-gray-700'>Our Best Selling Proudct. Only once a year </p>
                  </div>
                  <picture>
                    <Image width={200} src={image} alt='image' />
                  </picture>
                </div>
              </div>
            </div>
          </div>

          {/* service-innerRight */}
          <div className="service-innerRight flex flex-wrap gap-4 items-center justify-center">
            <div className="serviceInnerRightOne">
                <picture>
                  <Image className={style.serviceInnerRightOneImg1} src={serviceOne} alt='picture' />
                </picture>
                <picture>
                  <Image className={style.serviceInnerRightOneImg2} src={serviceTwo} alt='picture' />
                </picture>
            </div>
            <div className="serviceInnerRightTwo">
                <picture>
                  <Image className={style.serviceInnerRightOneImg3} src={serviceThree} alt='picture' />
                </picture>
                <picture>
                  <Image className={style.serviceInnerRightOneImg4} src={serviceFour} alt='picture' />
                </picture>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )

}

export default ServiceItems;