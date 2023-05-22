import Container from "./Container"
import port1 from "../assets/ngwf.jpg";
import port2 from "../assets/asr.jpg";
import port3 from "../assets/protrade.jpg";
import port4 from "../assets/weatherforcast.jpg";
import port5 from "../assets/blog.jpg";
import port6 from "../assets/react.svg";


const portfolioData = [
  {
    id:1,
    title:"Nigeria Weather Forcast",
    github:"https://github.com/kenCodict/whether-forcast",
    demo:"https://magnificent-naiad-4fe599.netlify.app/",
    image:port1,
  },
  {
    id:2,
    title:"Investment Website",
    github:"https://github.com/kenCodict",
    demo:"https://asr-capital.com",
    image:port2,
  },
  {
    id:3,
    title:"ASR Capital Investment",
    github:"https://github.com/kenCodict",
    demo:"https://protrades.live",
    image:port3,
  },
  {
    id:4,
    title:"Weather Forcast App",
    github:"https://github.com/kenCodict",
    demo:"https://kencodict.netlify.app/",
    image:port4,
  },
  {
    id:5,
    title:"Blogging App",
    github:"https://github.com/kenCodict",
    demo:"https://ken-codict-blog.vercel.app/",
    image:port5,
  },

]
 interface SinglePortFolioprops {
  portifolioData : {
    id: number;
    title: string;
    github: string;
    demo: string;
    image: string;
}
 }

const SinglePortFolio = ({portifolioData}: SinglePortFolioprops) => {
  const {id, title, github, demo, image} = portifolioData
  return (
    <article className="portfolio_item color-bg-variant p-2 md:p-[1.3rem] rounded-3xl border-solid border border-transparent duration-500 hover:bg-transparent hover:border-[rgba(77,181,255,0.4)] h-fit"  key={id}>
    <div className="portfolio_item_image rounded-3xl h-2/3">
   <img src={image} alt={title} className="rounded-3xl h-full" />
    </div>
    <h3 className="mt-5 mx-0 mb-8">{title}</h3>
      <div className="flex items-center justify-between w-4/5 mx-auto my-4">
        <a href={github} className="btn" target="_blank">Github</a>
        <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
      </div>
  </article>
  )
}

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="">My Recent Work</h5>
      <h2>Portfolio</h2>
      <Container className="services_container grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:gap-[50px] gap-x-[20px] gap-y-[20px]">
      {portfolioData.map(item => (
        <SinglePortFolio portifolioData={item} />
      ))}
        </Container>
    </section>
  )
}

export default Portfolio