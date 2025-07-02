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
    <section id="skills" className="mb-16">
      <h2 className="section-title">Technical Skills</h2>
      <div className="card">
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <li key={index} className="bg-primary bg-opacity-20 px-4 py-2 rounded text-center shadow-sm hover:bg-primary hover:text-white transition">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
