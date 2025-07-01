export const dynamic = 'force-dynamic';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Dashboards from './components/Dashboards';
import Certifications from './components/Certifications';
import Courses from './components/Courses';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[17vh] md:pt-[17vh]">
        <Profile />
        <About />
        <Experience />
        <Projects />
        <Dashboards />
        <Certifications />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
