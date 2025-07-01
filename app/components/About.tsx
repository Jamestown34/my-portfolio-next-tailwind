// app/components/About.tsx
import SectionHeader from './SectionHeader';
import AboutContent from './AboutContent'; // Import the new AboutContent component

export default function About() {
  return (
    <section id="about" className="relative py-16 px-8 md:px-20">
      <SectionHeader
        p1="Take a Quick Look"
        title="About Atumonye James"
      />
      <div className="flex justify-center flex-col items-center"> {/* Added flex-col and items-center for mobile stacking */}
        <AboutContent />
      </div>
    </section>
  );
}
