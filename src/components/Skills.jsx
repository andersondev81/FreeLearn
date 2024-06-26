const skills = [
  {
    id: 1,
    name: "UI / UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "src/assets/Icon_ui-ux.svg",
  },
  {
    id: 2,
    name: "Research e documentação",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "src/assets/research.svg",
  },
  {
    id: 3,
    name: "Front-end",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "src/assets/front-end.svg",
  },
  {
    id: 4,
    name: "Back-end",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "/src/assets/backend.svg",
  },
]

const Skills = () => {
  return (
    <div className="lg:mx-12 mx-4 pt-16" id="formacoes">
      <div className="mb-20">
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
          Nossas formações
        </h2>
      </div>

      {/* skillis card */}
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {skills.map(skill => (
          <div
            key={skill.id}
            className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300"
          >
            <img
              src={skill.image}
              alt=""
              className="w-14 h-14 p-3 bg-white bg-white rounded-lg shadow-md mb-7"
            />
            <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
