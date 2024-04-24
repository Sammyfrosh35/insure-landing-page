
import { services } from '../Constants'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <section className="max-container flex  flex-wrap gap-9">
    <hr className='mb-9 w-20 border-[1px]'/>

    <p className='font-DM font- text-4xl text-Dark-Violet'>We're different</p>
   {services.map((service)=>{
    <ServiceCard key={service.label} {...service}/>
   })}

    </section>
  )
}

export default Services