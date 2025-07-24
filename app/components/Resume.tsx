export default function Resume() {
  return (
    <section id="resume" className="mb-16 text-center scroll-mt-24">
      <div className="card flex flex-col items-center justify-center py-6 md:py-8">
        <h2 className="section-title">Resume</h2>
        <p className="mb-6 max-w-md text-sm md:text-base leading-relaxed text-foreground/90 px-4">
          Want to learn more about my qualifications and experience? Download my complete CV below.
        </p>
        <a
          href="https://drive.google.com/file/d/1Vjff9p9nQHcH51UKmfQWv_fn3418rj8v/view?usp=drive_link" 
          className="bg-primary hover:bg-primary/80 text-white font-medium py-3 px-6 md:px-8 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex items-center gap-2">
            Download CV
          </span>
        </a>
      </div>
    </section>
  )
}

