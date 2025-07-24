export default function Contact() {
    return (
      <section id="contact" className="mb-16 scroll-mt-24">
        <h2 className="section-title">Contact</h2>
        <div className="card">
          <p className="mb-6 text-base md:text-lg leading-relaxed">Feel free to reach out to me for collaborations or opportunities!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200">
              <div className="text-lg font-bold mb-2 text-primary">EMAIL</div>
              <a 
                href="mailto:dewmina.22@cse.mrt.ac.lk" 
                className="text-accent hover:text-secondary transition-colors duration-200 text-sm md:text-base text-center break-all"
              >
                dewmina.22@cse.mrt.ac.lk
              </a>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200">
              <div className="text-lg font-bold mb-2 text-primary">LINKEDIN</div>
              <a 
                href="https://www.linkedin.com/in/dewmina-wijekoon/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-accent hover:text-secondary transition-colors duration-200 text-sm md:text-base text-center"
              >
                dewmina-wijekoon
              </a>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200 sm:col-span-2 lg:col-span-1">
              <div className="text-lg font-bold mb-2 text-primary">GITHUB</div>
              <a 
                href="https://github.com/dewminawijekoon" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-accent hover:text-secondary transition-colors duration-200 text-sm md:text-base text-center"
              >
                dewminawijekoon
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  