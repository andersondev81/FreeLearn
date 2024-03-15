/* eslint-disable react/no-unknown-property */

import { useEffect, useState } from "react"

const Portfolio = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch("projects.json")
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])
  return (
    <div className="lg:mx-12 mx-4 my-32" id="portfolio">
      <div className="mb-20 flex flex-col sm:flex-row md:items-center justify-between gap-5">
        <div>
          <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
            Cursos recomendados
          </h2>
        </div>
      </div>

      {/* project card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.id} className="shadow-xl rounded-lg">
            <img src={project.image} alt="" />
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-2 text-headingcolor">
                {project.name}
              </h3>
              <p className="text-body mb-4">{project.description}</p>
              <a href="/" className="underline underline-offset-8">
                Veja mais{" "}
                <img
                  src="/src/assets/arrow.png"
                  alt=""
                  className="w-3 inline-block ml-3"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
