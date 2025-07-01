// app/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8 px-4 text-center">
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links flex justify-center gap-8 list-none text-xl md:text-2xl mb-4">
            <li><Link href="#about" className="text-text1 hover:text-accent hover:underline hover:underline-offset-8">About</Link></li>
            <li><Link href="#experience" className="text-text1 hover:text-accent hover:underline hover:underline-offset-8">Skills</Link></li>
            <li><Link href="#projects" className="text-text1 hover:text-accent hover:underline hover:underline-offset-8">Projects</Link></li>
            <li><Link href="#contact" className="text-text1 hover:text-accent hover:underline hover:underline-offset-8">Contact</Link></li>
          </ul>
        </div>
      </nav>
      <p className="text-text2 text-sm mt-4">Copyright &#169; {new Date().getFullYear()} Atumonye James. All Rights Reserved.</p>
    </footer>
  );
}
