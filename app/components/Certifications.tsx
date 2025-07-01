// app/components/Certifications.tsx
import SectionHeader from './SectionHeader';
import CertificationCard from './CertificationCard';
import Button from './Button'; // Import the Button component if you want to include CV download here

export default function Certifications() {
  const certifications = [
    {
      imageSrc: "/images/certificate1.png",
      title: "Complete Data Science Certificate",
      organization: "Udemy",
      date: "2023",
      verifyLink: "#" // Add actual verify link if available
    },
    {
      imageSrc: "/images/certificate2.png",
      title: "Internship Completion Certificate",
      organization: "Zidio Development",
      date: "2024",
      verifyLink: "#" // Add actual verify link if available
    },
    {
      imageSrc: "/images/certificate3.png",
      title: "Course Completion Certificate",
      organization: "Amdari",
      date: "2025",
      verifyLink: "#" // Add actual verify link if available
    }
  ];

  return (
    <section id="certifications" className="py-16 px-8 bg-bg-body text-center">
      <SectionHeader
        p1="Check Out My"
        title="Certifications"
        description="Here are some of my most significant certifications that demonstrate my skills and expertise in various domains."
      />
      <div className="details_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} {...cert} />
        ))}
      </div>

      <div className="mt-16 flex justify-center"> {/* Added margin top for spacing */}
        <h2 className="text-text1 text-3xl font-bold mb-8">Download My CV</h2>
        <Button href="/CV.pdf" download={true} variant="primary" className="mt-4">
          Download My CV
        </Button>
      </div>
    </section>
  );
}
