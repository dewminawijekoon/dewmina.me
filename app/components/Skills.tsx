export default function Skills() {
  const skills = [
    'JavaScript', 'Python', 'Java', 'C++', 'React', 'Node.js', 'SQL', 'Git', 'TypeScript', 'FastAPI', 'Docker', 'REST APIs', 'MySQL'
  ];

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
