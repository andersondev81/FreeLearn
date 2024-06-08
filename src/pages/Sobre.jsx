import React from "react"
import Accordion from "../components/Accordion"
import banner from "../assets/Sobre.svg"

const Sobre = () => {
  return (
    <>
      <div className="bg-sky-300 mx-4 sm:mx-5 rounded-2xl">
        <img src={banner} className="object-contain h-48 w-full sm:w-96 mx-auto" alt="Banner" />
      </div>
      <div className="px-4 sm:px-5 py-5">
        <h1 className="text-base sm:text-2xl text-body leading-6 sm:leading-9 m-2 sm:m-5">
          <span className="text-primary font-black">
            COMPARTILHAR! APRENDER! ENSINAR!{" "}
          </span>
          Freelearn é a comunidade gratuita que mais cresce, onde os melhores
          especialistas compartilham seus conhecimentos e habilidades por meio
          de cursos online. Tudo começou como um fórum online e uma pequena mas
          dinâmica vitrine de estudantes de análise e desenvolvimento de
          sistemas, projetada para ajudá-los a se conectar e aprender uns com os
          outros. Inspirada por sua comunidade próspera, a FreeLearn produz
          cursos on-line para qualquer pessoa interessada em liberar seu
          potencial como desenvolvedor. A FreeLearn seleciona cuidadosamente a
          lista de professores para garantir uma experiência de aprendizagem
          online de alta qualidade para todos. Hoje, a comunidade online é o lar
          de milhões de pessoas de todo o mundo que estão curiosas e apaixonadas
          por aprender novas habilidades criativas. A FreeLearn tem sede em
          Fortaleza.
        </h1>
      </div>

      <div className="p-2 sm:p-4 mx-2 sm:mx-4 md:mx-10 lg:mx-20 xl:mx-80 my-10 sm:my-20 shadow-xl rounded-lg">
        <Accordion
          title="O que é a FreeLearn?"
          answer="É uma comunidade criativa gratuita, onde os melhores especialistas compartilham seus conhecimentos por meio de cursos online."
        />
        <Accordion
          title="O que os cursos da FreeLearn incluem?"
          answer="A base de cada curso são as aulas, que podem incluir vídeos, slides e texto. Cada curso é criado, administrado e de propriedade dos instrutores. Além disso, os instrutores podem adicionar recursos e diversos tipos de atividades práticas para melhorar a experiência de aprendizado dos alunos."
        />
        <Accordion
          title="Como posso ter acesso aos cursos da FreeLearn?"
          answer="Bastar clicar em cadastrar na barra de navegação, preencher o formulario, confirmar o cadastro e fazer seu login."
        />
      </div>
    </>
  )
}

export default Sobre
