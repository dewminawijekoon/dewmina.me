export default function Skills() {
  const skills = [
  "Python",
  "Java",
  "C++",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "FastAPI",
  "REST APIs",
  "MySQL",
  "MongoDB",
  "PyTorch",
  "Pandas",
  "OpenCV",
  "LangFlow",
  "Docker",
  "Git" 
]

  return (
    <section id="skills" className="mb-16 scroll-mt-24">
      <h2 className="section-title">Technical Skills</h2>
      <div className="card">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {skills.map((skill, index) => (
            <li key={index} className="bg-primary bg-opacity-20 px-3 py-2 md:px-4 md:py-2 rounded text-center shadow-sm hover:bg-primary hover:text-white transition duration-200 text-sm md:text-base">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
