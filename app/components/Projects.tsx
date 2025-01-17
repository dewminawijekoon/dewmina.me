export default function Projects() {
  const projects = [
    {
      title: 'Human Resource Management System',
      description: 'A full-stack application for managing employee records, built with Vite.js for the frontend and FastAPI for the backend, and MySQL for the database.',
      link: 'https://github.com/dewminawijekoon/HRMS_DataBase_Project'
    },
    {
      title: '4-bit Nanoprocessor',
      description: 'A custom-designed 4-bit nanoprocessor, capable of executing basic arithmetic and logical operations, developed as part of a digital systems project.',
      link: 'https://github.com/dewminawijekoon/4_bit_NanoProcessor'
    }
  ];

  return (
    <section id="projects" className="mb-16">
      <h2 className="section-title">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h3 className="text-xl font-semibold mb-2 text-secondary">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} className="text-accent hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
