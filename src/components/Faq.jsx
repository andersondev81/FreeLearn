import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    'Tem cursos gratuitos?',
    'Como faço para me inscrever?',
    'Os cursos são online ou presenciais?',

  ];

  return (
    <>
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <Navbar />
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 overflow-auto gap-0 grid grid-cols-1 auto-rows-min rounded-lg opacity-100 self-center min-w-[280px] max-w-[1200px] min-h-[3px] h-auto flex-grow-0 flex-shrink-0 w-full m-0 z-10">
          <h1 className="text-2xl font-bold">Perguntas Frequentes</h1>
          <div className="divide-y divide-gray-200">
            {questions.map((question, index) => (
              <div key={index} className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <button onClick={() => setOpenIndex(index === openIndex ? null : index)}>
                  <p>{question}</p>
                  {index === openIndex && <p className="text-primary">Resposta para a pergunta.</p>}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
            }
export default Faq;