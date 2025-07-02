export default function Resume() {
  return (
    <section id="resume" className="mb-16 text-center">
      <div className="card flex flex-col items-center justify-center py-8">
        <h2 className="section-title">Resume</h2>
        <p className="mb-6 max-w-md">
          Want to learn more about my qualifications and experience? Download my complete CV below.
        </p>
        <a
          href="https://drive.google.com/file/d/1E8gOyZQd3Oy103deXWDfUMqNN03ioLf_/view?usp=drive_link" 
          className="btn-primary btn-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-medium">Download CV</span>
        </a>
      </div>
    </section>
  )
}

