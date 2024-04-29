import React from "react"
import banner from "../assets/HeroImage.svg"
const HeroSec = () => {
  return (
    <div className=" bg-bgShade" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
        <div className="md:w-1/2 w-full">
          <img src={banner} alt="" className="w-full" />
        </div>
        {/* left side */}
        <div className="md:w-1/2 w-full mt-5">
          <p className="text-xl text-headingcolor font-semibold mb-5">
            Olá Dev!
          </p>
          <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
            Desfrute do melhores{" "}
            <span className="text-primary">Cursos de TI gratuitos</span> para
            alavancar sua carreira.
          </h1>
          <p className="text-2xl text-body leading-9 mb-8">
            Acesse os melhores cursos online para desenvolvedores. Interaja com
            os melhores profissionais e descubra todos os segredos do setor.
          </p>
          <button className="btn-primary">Começe agora</button>
        </div>
        {/* rigth side */}
      </div>
    </div>
  )
}

export default HeroSec
