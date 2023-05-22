import CV from "../assets/Ezeora Kenechukwu Johnbosco Resume.pdf";
const CTA = (): JSX.Element => {
  return (
              <div className="flex gap-4 mt-10 justify-center">
                          <a href={CV} className="btn" download>Download CV</a>
                          <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA