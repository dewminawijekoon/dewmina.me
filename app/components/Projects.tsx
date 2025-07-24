export default function Projects() {
  const projects = [
    {
      title: 'libfreenect Python Wrapper',
      description: 'Python wrapper for libfreenect (Kinect). Published on PyPI.',
      link: 'https://pypi.org/project/freenect/'
    },
    {
      title: 'Intelligent Investment Advisor (Group Project)',
      description: 'AI-powered finance tool for budgeting, stock forecasting, and portfolio analysis. Built with Next.js and FastAPI.',
      link: 'https://github.com/Intelligent-Advisor-Sem-4/'
    },
    {
      title: 'RouteMate (Ongoing)',
      description: 'Real-time public transport app using Flutter, Firebase, and Google Maps. Features live tracking, route planning, crowd-sourced alerts, and Material UI 3.',
      link: 'https://github.com/dewminawijekoon/RouteMate'
    },
    {
      title: 'Jeewaka (Ongoing)',
      description: 'Scalable healthcare app with doctor discovery, bookings, video consultations, and digital health records. Built with React Native, Node.js microservices.',
      link: 'https://github.com/dewminawijekoon/Jeewaka'
    },
    {
      title: 'Human Resource Management System',
      description: 'HRMS web app built with React, FastAPI, and MySQL.',
      link: 'https://github.com/dewminawijekoon/HRMS_DataBase_Project/'
    },
    {
      title: '4-bit NanoProcessor',
      description: 'VHDL implementation tested on Basys3 FPGA.',
      link: 'https://github.com/dewminawijekoon/4_bit_NanoProcessor'
    }
  ];

  return (
    <section id="projects" className="mb-16 scroll-mt-24">
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <div key={index} className="card group">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-secondary group-hover:text-primary transition-colors duration-200">{project.title}</h3>
            <p className="mb-4 text-sm md:text-base leading-relaxed text-foreground/90">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-secondary hover:underline transition-colors duration-200 text-sm md:text-base font-medium"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
