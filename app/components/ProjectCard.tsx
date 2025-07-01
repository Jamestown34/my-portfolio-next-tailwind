// app/components/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'; // Import React for React.ReactNode

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  languages: string[];
  githubLink: string;
  readLink: string;
}

export default function ProjectCard({ imageSrc, title, description, languages, githubLink, readLink }: ProjectCardProps) {
  return (
    <div className="subdetail_container bg-bg-body border border-accent rounded-3xl p-4 relative shadow-md hover:scale-[1.02] hover:shadow-lg transition-transform duration-200 ease-in-out overflow-hidden group text-left"> {/* Added text-left */}
      <div className="article-container mb-4 flex justify-center items-center"> {/* Centering image container */}
        <Image
          src={imageSrc}
          alt={title}
          width={300} // Set appropriate width
          height={200} // Set appropriate height
          className="project-img rounded-2xl max-w-[90%] max-h-[90%] object-cover" // Ensure aspect ratio and rounding
        />
      </div>
      <h2 className="project-title mx-4 text-text1 text-center font-semibold text-2xl">{title}</h2>
      <p className="mx-4 text-text2 mb-4 text-center">{description}</p>
      <div className="lang flex justify-center gap-2 mt-2 mb-4 flex-wrap px-4">
        {languages.map((lang, index) => (
          <small key={index} className="text-text2 py-1 px-1.5 border border-accent-light rounded-md text-sm">
            {lang}
          </small>
        ))}
      </div>
      <div className="btn-container flex justify-center gap-4 font-semibold mt-4"> {/* Ensure this container is always visible if you remove hover opacity */}
        <Link
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-color-2 px-4 py-2 w-28 text-sm block md:inline-block" // Adjusted button size and display
        >
          GitHub
        </Link>
        <Link
          href={readLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-color-1 px-4 py-2 w-28 text-sm block md:inline-block" // Adjusted button size and display
        >
          Read
        </Link>
      </div>
    </div>
  );
}
