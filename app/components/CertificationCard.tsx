
// app/components/CertificationCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CertificationCardProps {
  imageSrc: string;
  title: string;
  organization: string;
  date: string;
  verifyLink?: string; // Optional link to verify certificate
}

export default function CertificationCard({ imageSrc, title, organization, date, verifyLink }: CertificationCardProps) {
  return (
    <div className="certification-card bg-white border border-gray-300 rounded-lg overflow-hidden relative transition-transform duration-300 ease-in-out hover:translate-y-[-10px] group">
      <div className="certification-image-content w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={400} // Set appropriate width
          height={200} // Set appropriate height
          className="certification-img w-full aspect-[2/1] object-cover"
        />
      </div>
      <div className="certification-content p-5 flex flex-col items-center text-center">
        <h2 className="certification-title text-lg font-medium text-secondary my-2.5">{title}</h2>
        {/* Placeholder for btn if original had it: <Link href={imageSrc} target="_blank" className="certification-btn hidden">View Certificate</Link> */}
      </div>
      <div className="certification-hover-content absolute top-0 left-0 h-full w-full bg-blue-100 bg-opacity-80 text-white flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out p-5 text-center group-hover:opacity-100">
        <p className="text-secondary text-base mb-2">Issuing Organization: {organization}</p>
        <p className="text-secondary text-base mb-2">Date of Issuance: {date}</p>
        {verifyLink && (
          <Link href={verifyLink} target="_blank" rel="noopener noreferrer" className="verify-btn mt-2.5 bg-secondary text-white py-2 px-4 rounded-md no-underline transition-colors duration-300 ease-in-out hover:bg-secondary-dark text-sm">
            Verify
          </Link>
        )}
      </div>
    </div>
  );
}
