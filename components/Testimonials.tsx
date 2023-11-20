'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import avatar from '../public/repair-logo.png'

const Testimonials = () => {

  const testimonials = [
    {
        name: "Martin escobar",
        title: "Founder of meta",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et."
    },
    {
        name: "Angela stian",
        title: "Product designer",
        quote: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, that the point of using Lorem Ipsum."
    },
    {
        name: "Karim ahmed",
        title: "DevOp engineer",
        quote: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati "
    },
]

const [currentTestimonial, setCurrentTestimonial] = useState(0)

return (
    <section className="container mx-auto my-4">
        <div className="px-4 md:px-8 bg-[#EFEFEF] py-10">
            <div className="max-w-3xl mx-auto">
                <h3 className="text-gray-600 font-semibold pb-6">Our Happy Clients</h3>
                <ul>

                    {
                        testimonials.map((item, idx) => (
                            currentTestimonial == idx ? (
                                <li key={idx}>
                                    <figure>
                                        <blockquote>
                                            <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                                                “{item.quote}“
                                            </p>
                                        </blockquote>
                                        <div className="mt-6">
                                            <Image src={avatar} width={45} height={45} alt='image' className="w-16 h-16 rounded-full" />
                                            <div className="mt-3">
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>

                                                <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                    </figure>
                                </li>
                            ) : ""
                        ))
                    }
                </ul>
            </div>
            <div className="mt-6">
                <ul className="flex gap-x-3 justify-center">
                    {
                        testimonials.map((item, idx) => (
                            <li key={idx}>
                                <button className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${currentTestimonial == idx ? "bg-gray-600" : "bg-gray-300"}`}
                                    onClick={() => setCurrentTestimonial(idx)}
                                ></button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </section>
)
}

export default Testimonials