import Container from "./Container"
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TestimonialData = [
  {
    id:1,
    image:p1,
    Name: "The CEO Afitrain Tech",
    review: "The experience working with Ezeora Kenechukwu Johnbosco has been fantastic. He always want to ensure he give plenty of value to any customer that he works with, and in that regard he really excels. I enjoyed working with a really responsive team, and when I threw curve balls or suggested unique functionality, He quickly went to work to make it a reality.",
  },
  {
    id:2,
    image:p2,
    Name: "Digital Dreams Academy Manager",
    review: "From the start of the project, through to completion, Ezeora Kenechukwu Johnbosco supported us and exceeded our expectations in every way. Not only was our experience personal and friendly, his ability to identify and present our key messages in an imaginative and creative way gave us a huge amount of confidence in him. In many ways Ezeora Kenechukwu Johnbosco understood our client's website needs better than we did and he complimented our vision perfectly. He's reliable, professional and easy to work with. I can’t recommend him highly enough and we look forward to continuing our working relationship together.",
  },
  {
    id:3,
    image:p3,
    Name: "Promise",
    review: "Very helpful when building my website, I now have my ecommerce store built from scratch",
  },
  {
    id:4,
    image:p4,
    Name: "Chidera",
    review: "Without doubt one of the most talented programmers out there.  I always go back to Ezeora Kenechukwu when I'm out of my depth and he's never failed to deliver what I ask for.   Smart, trustworthy and professional.   You won't be disappointed.",
  },
  {
    id:5,
    image:p4,
    Name: "Emeka Ibe",
    review: "Ezeora Kenechukwu is awesome, delivers exactly what you want and is a great guy as well, thanks for all your hard work on my website",
  },
  {
    id:7,
    image:p4,
    Name: "Emeka Ibe",
    review: "Fantastic service and great guy. We recommend to anyone who needs a website or web services.",
  },
]

interface SingleTestimonialProps {
   item: {
    id: number;
    image: string;
    Name: string;
    review: string;
   }
}


const Testimonials = () => {

  return (
    <div id="testimonials" className="max-h-fit mb-10 mt-[8rem]">
      <h5 className="text-center text-[rgba(255,255,255, 0.6)]">Reviews From Clients</h5>
      <h2 className="text-center text-[#4db5ff] mb-[3rem]">Testimonials</h2>
      <Swiper
      // install Swiper modules
      modules={[ Pagination,  ]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className=" mx-auto w-[70%] sm:w-[60%] lg:w-[40%]"
    >

 {
          TestimonialData.map(({id, image, Name, review}) => (
            <SwiperSlide className="testimonial color-bg-variant text-center p-8 rounded-3xl select-none pb-16" key={id}>
      <div className="client_avatar w-16 aspect-square overflow-hidden rounded-full mt-0 mx-auto mb-4 border-[0.4rem] border-solid border-[rgba(77,181,255,0.4)] ">
        <img src={image} alt="" className="w-full h-full object-cover object-center" />
      </div>
      <h5 className="">{Name}</h5>
      <small className="client_review .color-light font-medium block mt-[0.8rem] mx-auto mb-0">{review}</small>
    </SwiperSlide>
          ))
        }
    </Swiper>



    </div>
  )
}

export default Testimonials