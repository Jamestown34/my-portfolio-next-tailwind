// app/components/Profile.tsx
import Image from 'next/image';
import Button from './Button';
import Socials from './Socials';

export default function Profile() {
  return (
    <section id="profile" className="flex flex-col md:flex-row justify-center items-center gap-20 py-16 px-8 min-h-screen">
      <div className="section__pic-container flex justify-center items-center h-[400px] w-[400px] mx-auto overflow-hidden rounded-full md:rounded-3xl"> {/* Added responsive styling and rounded */}
        <Image
          src="/images/profilephoto.png"
          alt="Atumonye James profile picture"
          width={400}
          height={400}
          priority // Prioritize loading for LCP
          className="object-cover"
        />
      </div>
      <div className="section__text text-center self-center">
        <p className="text-text2 font-semibold text-lg">Hello, I'm</p>
        <h1 className="text-5xl md:text-6xl font-bold text-text1 mt-2">Atumonye James</h1>
        <p className="section__text__p2 text-3xl text-text2 mb-4">Data Scientist | AI Prompt Engineer | Funnel Engineer</p>
        <div className="btn-container flex flex-col md:flex-row justify-center gap-4 mt-4">
          <Button href="/CV.pdf" download={true} variant="secondary">
            Download CV
          </Button>
          <Button href="#contact" variant="primary">
            Contact Me
          </Button>
        </div>
        <Socials
          linkedin="https://linkedin.com/in/atumonye-james-a81147267/"
          github="https://github.com/Jamestown34/"
          twitter="https://twitter.com/AtumonyeJ1795/"
          email="chuksjames05@gmail.com"
        />
      </div>
    </section>
  );
}
