import Image from 'next/image'
import svg1 from '../../../public/dental 1.svg'
import svg2 from '../../../public/dental-care 1.svg'
import svg3 from '../../../public/g1196.svg'
import svg4 from '../../../public/tooth 1.svg'
import svg5 from '../../../public/Vector.svg'
import svg6 from '../../../public/implant 1.svg'
import { BsArrowRightCircle } from 'react-icons/bs'
import Header from '../Header'
type Servies = {
  img: string,
  title: string,
  des: string
}
const services: Servies[] = [{
  img: svg1,
  title: 'Cosmetic Dentist',
  des: 'Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.',
},
{
  img: svg2,
  title: 'Dental Implantshv',
  des: 'A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.',
},
{
  img: svg3,
  title: 'Dental Implants',
  des: 'A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.',
},
{
  img: svg4,
  title: 'Teeth Whitening',
  des: 'It’s never been easier to brighten your smile at home. There are all kinds of products you can try.',
},
{
  img: svg5,
  title: 'Emergency Dentistry',
  des: 'In general, any dental problem that needs immediate treatment to stop bleeding, alleviate severe pain.',
},
{
  img: svg6,
  title: 'Prevention',
  des: 'Preventive dentistry is dental care that helps maintain good oral health. a combination of regular dental.',
}]
const Services = () => {
  return (
    <section className="flex flex-col items-center justify-center mx-2 md:mx-6 gap-14 my-14">
      <Header title="Services" des="We use only the best quality materials on the market in order to provide the best products to our patients." />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3  gap-8 md:gap-16 xl:gap-24 p-4">
        {services && services.map((service, i) => (
          <div key={i} className="flex flex-col items-center justify-center w-80 p-3 gap-5 hover:shadow-xl rounded-xl">
            <div className='size-20 rounded-full bg-skyBlue flex items-center justify-center'>
              <Image src={service.img} className='object-contain size-12' alt="icon" height={48} width={58} />
            </div>
            <h3 className='text-darkBlue text-xl'>{service.title}</h3>
            <p className='text-bodytext text-base text-center'>{service.des}</p>
            <div className='flex items-center gap-2'>
              <a className='text-darkBlue border-b border-darkBlue' href="#">Learn More</a>
              <BsArrowRightCircle />
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Services