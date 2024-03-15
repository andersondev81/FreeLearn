import logo from "../assets/logo.svg"
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="bg-bgShade py-8 md:px-12 px-4">
      <div className="flex flex-row md:flex-row md:items-center justify-between gap-02 mb-4">
        <a href="/">
          <img src={logo} alt="" className="h-10" />
        </a>
        <div className="flex flex-col md:flex-row md:items-center gap-4 flex-wrap"></div>
        <div className="flex items-center gap-4 ml-4">
          <FaInstagram className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
          <FaTwitter className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
          <FaLinkedin className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
        </div>
      </div>
      <hr />
      <div className="mt-5 flex flex-col md:flex-row justify-between gap-2">
        <p>Criado pela Freelearn Dev team.</p>
        <div className="space-x-6">
          <a href="/" className="hover:text-slate-400">
            Politica de privacidade
          </a>
          <a href="/" className="hover:text-slate-400">
            Termos de serviço
          </a>
          <a href="/" className="hover:text-slate-400">
            Cookies Settings
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
