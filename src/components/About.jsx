import proPic from "../assets/Sobre.svg"
const About = () => {
  return (
    <div className="lg:mx-12 mx-4" id="about">
      <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between">
        <div className="sm:w-1/2">
          <img src={proPic} alt="" className="w-full sm:w-12/12" />
        </div>
        <div className="sm:w-1/2">
          <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
            Sobre
          </h2>
          <p className="mt-8 md:pr-8 mb-8">
            FreeLearn é a comunidade educativa que mais cresce, onde os melhores
            especialistas compartilham seus conhecimentos gratuitamente por meio
            de cursos online produzidos profissionalmente.
            <br /> <br />
            Hoje, a Freelearn é o lar de milhões de pessoas de todo o mundo que
            estão curiosas e apaixonadas por aprender novas habilidades como
            desenvolvedores.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
