import Image from 'next/image'
import React from 'react'

import image from '../../public/service-banner.jpg'
import { FaRegStar, FaMinus, FaClipboardList } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const Products = () => {

  const products = [
    {
      id: 1,
      warranty: '2 years warranty',
      title: 'Product 1 Title',
      rating: '4.75 (6.9 M Booking)',
      price: '$390',
      description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, reiciendis accusamus.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, reiciendis accusamus.'],
      image: {
        src: '/product-1.jpg',
        width: 500,
        height: 500
      },
    },

    {
      id: 2,
      warranty: '2 years warranty',
      title: 'Product 2 Title',
      rating: '4.75 (6.9 M Booking)',
      price: '$390',
      description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, reiciendis accusamus.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, reiciendis accusamus.'],
      image: {
        src: '/service-banner.jpg',
        width: 500,
        height: 500
      },
    },

    {
      id: 3,
      warranty: '4 years warranty',
      title: 'Product 3 Title',
      rating: '4.75 (6.9 M Booking)',
      price: '$390',
      description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, reiciendis accusamus.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, reiciendis accusamus.'],
      image: {
        src: '/service-banner.jpg',
        width: 500,
        height: 500
      },
    },

  ];


  return (
    <>
      <div id="products" className="container mx-auto my-12">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-3 flex justify-between">
          <div className='col-span-2'>
            <picture>
              <Image src={image} alt='Products Banner' />
            </picture>
            {/* Products Title */}
            <div className='my-10 p-10 border rounded-lg'>
              <h3 className=' text-4xl font-semibold'>Service</h3>
              <hr className='mt-5 mb-10' />
              {/* Products Start */}
              <div>
                {products.map((product) => (
                  <div key={product.id} className='col-span-1 md:col-span-3 gap-4 flex'>
                    <div className='mb-8'>
                      <p className='capitalize bg-[#232D3F] text-center shadow text-white rounded-sm px-2 py-1'>{product.warranty}</p>
                      <p className='mb-3 mt-8 text-2xl font-semibold'>{product.title}</p>
                      <div className='flex items-center mb-4'>
                        <i className='p-1 rounded-full text-cyan-300 bg-[#333] mr-2 mb-1'><FaRegStar /></i>
                        <p className=''>{product.rating}</p>
                      </div>
                      <p className='text-xl my-4 font-semibold'>{product.price}</p>
                      <hr className='list-disc mt-4 mb-6' />
                      {/* Product Description */}
                      <p className='text-orange-900 mb-3'>Description</p>
                      <ul className='list-disc sm:px-5'>
                        {product.description.map((item, index) => (
                          <li key={index} className='mb-2'>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className='text-center'>
                      <Image
                        src={product.image.src}
                        alt={`product-${product.id}`}
                        width={product.image.width}
                        height={product.image.height}
                      />
                      <div className='mt-4 bg-[#232D3F] py-2 text-white rounded shadow w-full '>
                        <a href="javascript:void">Add Item</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Products End */}
            </div>
          </div>
          <div>
            <h3 className='text-3xl font-semibold'>Electronics Service and <br /> Repair</h3>
            <div className='flex my-5'>
              <i className='p-1 rounded-full text-cyan-300 bg-[#333] mr-2 mb-1'><FaRegStar /></i>
              <p className=''>4.75 (6.9 M Booking) </p>
            </div>
            {/* Cart */}
            <div className="sticky top-36 border shadow rounded-md p-4">
              <h3 className='my-2 text-2xl font-semibold'>Cart</h3>
              {/* Items Price */}
              <div className='flex items-center justify-between gap-3'>
                <p>Selected Product Title</p>
                <div className='items-center flex p-2 border rounded'>
                  <i className='mx-2 cursor-pointer'><FaPlus /></i>
                  <p className='mx-2'>1</p>
                  <i className='mx-2 cursor-pointer'><FaMinus /></i>
                </div>
                <div>
                  <p className='text-md font-semibold'>$390</p>
                </div>
              </div>
              {/* Discount */}
              <div className='flex py-2 text-center bg-[#232D3F] text-white my-4 rounded items-center'>
                <i className='mx-2'><FaClipboardList /></i>
                <p>Add 1 more service, Get 30% off 2nd one rewards</p>
              </div>
              {/* View Cart Button */}
              <div className='mt-4 flex items-center duration-150 justify-between bg-[#EEF5FF] hover:bg-[#9EB8D980] active:bg-[#F7EFE5] cursor-pointer p-3 rounded'>
                <p className='text-md font-semibold text-stone-600'>$890</p>
                <h5 className='font-medium text-stone-600'>View Cart</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products