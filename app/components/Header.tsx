import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-4 mb-8">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Dewmina.
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="#about" className="hover:text-secondary">About</Link></li>
          <li><Link href="#skills" className="hover:text-secondary">Skills</Link></li>
          <li><Link href="#projects" className="hover:text-secondary">Projects</Link></li>
          <li><Link href="#projects" className="hover:text-secondary">Resume</Link></li>
          <li><Link href="#contact" className="hover:text-secondary">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

