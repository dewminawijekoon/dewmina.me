export default function Resume() {
    return (
      <section id="about" className="mb-16">
        <h2 className="section-title">About_Me</h2>
        <div className="card">
          <p>
          Want to learn more about my qualifications and experience? Download my complete CV below.
          </p>
          <a
          href="https://drive.google.com/file/d/1E8gOyZQd3Oy103deXWDfUMqNN03ioLf_/view?usp=drive_link"
          download="Dewmina_Wijekoon_CV.pdf"
          className="flex items-center gap-2 bg-primary bg-opacity-20 hover:bg-opacity-30 text-primary px-6 py-3 rounded-custom transition-all duration-200 hover:scale-105"
        >
          <span className="font-medium">Download CV</span>
        </a>
          <br/>
        </div>
      </section>
    )
  }
  
  