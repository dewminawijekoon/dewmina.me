"use client"

export default function CVDownload() {
  return (
    <section className="mb-16 text-center">
      <div className="card flex flex-col items-center justify-center py-8">
        <h2 className="section-title">Resume</h2>
        <p className="mb-6 max-w-md">
          Want to learn more about my qualifications and experience? Download my complete CV below.
        </p>
        <a href="https://drive.google.com/file/d/1E8gOyZQd3Oy103deXWDfUMqNN03ioLf_/view?usp=drive_link" download="Dewmina_Wijekoon_CV.pdf" className="btn-primary btn-lg">
          
          <span className="font-medium">Download CV</span>
        </a>
      </div>
    </section>
  )
}

