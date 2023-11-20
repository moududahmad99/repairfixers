import React from 'react'
import image from '/public/service-bg-2.jpg';

import Image from 'next/image';
import { MdHomeRepairService, MdOutlineMiscellaneousServices, MdOutlineDesignServices, MdOutlineElectricalServices  } from "react-icons/md";

const servicesData = [
  {
    title: 'Transparency Pricing',
    description: 'Reliable Handyman Services at Your Door',
    icon: <MdHomeRepairService className="text-4xl mr-4" />
  },
  {
    title: 'Stress-Free Appliance',
    description: 'Hassle-Free Home Cleaning and Organizing',
    icon: <MdOutlineMiscellaneousServices className="text-4xl mr-4" />
  },
  {
    title: 'Budget-Friendly',
    description: 'Professional Remodeling and Renovation Services',
    icon: <MdOutlineDesignServices className="text-4xl mr-4" />
  },
  {
    title: 'One-Stop Shop',
    description: 'Eco-Friendly Home Cleaning and Maintenance',
    icon: <MdOutlineElectricalServices className="text-4xl mr-4" />
  }
];

const Service = () => {

  return (
    <div className='service container lg:mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 flex justify-between py-12'>
      <div className=''>
        <picture>
          <Image src={image} alt="image" height={550} width={550}/>
        </picture>
      </div>
      <div className='lg:pl-32 flex items-center flex-col'>
        <h3 className='mt-10 text-lg font-semibold'>Why RepairFixers?</h3>
        <div className='mt-10 '>
          {servicesData.map((service) => (
            <div key={service.title} className="flex bg-[#F5F5F5] p-4 rounded cursor-pointer hover:shadow my-4">
              {service.icon}
              <div>
                <h4 className="text-md">{service.title}</h4>
                <p className="text-sm text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Service