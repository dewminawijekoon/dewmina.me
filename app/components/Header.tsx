'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.position = 'unset'
      document.body.style.width = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.position = 'unset'
      document.body.style.width = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}>
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary z-30 relative">
            Dewmina.
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            <li><Link href="https://dewmina.bearblog.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-200">Blog</Link></li>
            <li><Link href="#about" className="hover:text-secondary transition-colors duration-200">About</Link></li>
            <li><Link href="#skills" className="hover:text-secondary transition-colors duration-200">Skills</Link></li>
            <li><Link href="#projects" className="hover:text-secondary transition-colors duration-200">Projects</Link></li>
            <li><Link href="#resume" className="hover:text-secondary transition-colors duration-200">Resume</Link></li>
            <li><Link href="#contact" className="hover:text-secondary transition-colors duration-200">Contact</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-30 relative p-2 text-foreground hover:text-secondary transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-150 ease-in-out ${
                isMenuOpen ? 'rotate-45 top-3' : 'top-1'
              }`}></span>
              <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-150 ease-in-out ${
                isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100 top-3'
              }`}></span>
              <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-150 ease-in-out ${
                isMenuOpen ? '-rotate-45 top-3' : 'top-5'
              }`}></span>
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-150 ease-in-out ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background/95 backdrop-blur-md"
          onClick={closeMenu}
        />
        
        {/* Menu Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-screen w-full">
          <div className="flex flex-col items-center space-y-8 text-xl">
            <Link 
              href="https://dewmina.bearblog.dev/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors duration-200 py-2"
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link 
              href="#about" 
              className="hover:text-secondary transition-colors duration-200 py-2"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              href="#skills" 
              className="hover:text-secondary transition-colors duration-200 py-2"
              onClick={closeMenu}
            >
              Skills
            </Link>
            <Link 
              href="#projects" 
              className="hover:text-secondary transition-colors duration-200 py-2"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link 
              href="#resume" 
              className="hover:text-secondary transition-colors duration-200 py-2"
              onClick={closeMenu}
            >
              Resume
            </Link>
            <Link 
              href="#contact" 
              className="hover:text-secondary transition-colors duration-200 py-2"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}