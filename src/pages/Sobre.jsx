import React from "react"
import Accordion from "../components/Accordion"
import banner from "../assets/Sobre.svg"

const Sobre = () => {
  return (
    <>
      <div div class="bg-sky-300 mx-8 rounded-2xl">
        <img src={banner} class="object-none h-48 w-96 ..." />
        <h1>Sobre</h1>
      </div>
      <div>
        <h1 className="text-2xl text-body leading-9 m-8 ">
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

      <div className="p-4 mx-80 my-40 shadow-xl rounded-lg">
        <Accordion
          title="O que é a FreeLearn?"
          answer="É uma comunidade criativa gratuita, onde os melhores especialistas compartilham seus conhecimentospor meio de cursos online. "
        />
        <Accordion
          title="O que os cursos da FreeLearn incluem?"
          answer="A base de cada curso são as aulas, que podem incluir vídeos, slides e texto. Cada curso da é criado, administrado e de propriedade dos instrutores. Além disso, os instrutores podem adicionar recursos e diversos tipos de atividades práticas para melhorar a experiência de aprendizado dos alunos. "
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
