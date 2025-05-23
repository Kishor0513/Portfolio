import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'
import GlowCard from '../components/GlowCard'


const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader title="What People Say About Me?"
            sub="🌟Client Feedback Highlights"
            />

            <div className="lg:colomns-4 md:columns-3 columns-1 mt-16">
                {testimonials.map((testimonials,index)=>(
                    <GlowCard card={testimonials} key={index} index={index}>
                        <div className="flex item-center gap-3">
                            <div>
                                <img src={testimonials.imgPath} alt="" />
                            </div>
                            <div>
                                <p className="font-bold">{testimonials.name}</p>
                                <p className="text-white-50">{testimonials.mentions}</p>
                            </div>
                        </div>
                    </GlowCard>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials