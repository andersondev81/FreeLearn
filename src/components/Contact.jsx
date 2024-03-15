const Contact = () => {
  return (
    <div className="lg:px-12 px-4">
      <div className="mb-20 text-center">
        <p className="text-xl text-headingcolor font-semibold mb-5">Enviar</p>
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
          Fale conosco
        </h2>
        <p className="mt-5">
          Tire duvidas ou envie sugestões! Esperamos seu contato!{" "}
        </p>
      </div>
      <div className="md:w-2/3 mx-auto mb-20">
        <form>
          <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
            <div className="sm:w-1/2 w-full">
              <label
                htmlFor="firstname"
                className="text-base text-headingcolor w-full"
              >
                Primeiro nome
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="block border border-primary rounded-lg py-2 mt-2 w-full"
              />
            </div>
            <div className="sm:w-1/2 w-full">
              <label
                htmlFor="lastname"
                className="text-base text-headingcolor w-full"
              >
                Sobre nome
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="block border border-primary rounded-lg py-2 mt-2 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
            <div className="sm:w-1/2 w-full">
              <label
                htmlFor="firstname"
                className="text-base text-headingcolor w-full"
              >
                E-mail
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="block border border-primary rounded-lg py-2 mt-2 w-full"
              />
            </div>
            <div className="sm:w-1/2 w-full">
              <label
                htmlFor="lastname"
                className="text-base text-headingcolor w-full"
              >
                Telefone
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="block border border-primary rounded-lg py-2 mt-2 w-full"
              />
            </div>
          </div>
          <div className="w-full mb-8">
            <label
              htmlFor="Primeiro nome"
              className="text-base text-headingcolor w-full"
            >
              Choose a topic
            </label>
            <select
              name="topic"
              id="topic"
              className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full"
            >
              <option value="1">Selecione uma opção...</option>
              <option value="2">UX/UI Design</option>
              <option value="3">Research e documentação</option>
              <option value="4">Front end</option>
              <option value="5">Brack end</option>
            </select>
          </div>
          <div className="w-full mb-8">
            <label
              htmlFor="message"
              className="text-base text-headingcolor w-full"
            >
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full"
            >
              Digite sua mensagem...
            </textarea>
          </div>
          <div className="w-full mb-8">
            <input type="checkbox" name="agree" id="agree" />
            <label
              htmlFor="message"
              className="text-base text-headingcolor w-full ml-3"
            >
              Eu aceito os termos!
            </label>
          </div>
          <div className="w-36 mx-auto border rounded-lg">
            <input
              type="submit"
              value="Enviar"
              className="btn-primary py-3 bg-primary px-8 text-white font-medium rounded-b-md cursor-pointer inline-block w-full "
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
