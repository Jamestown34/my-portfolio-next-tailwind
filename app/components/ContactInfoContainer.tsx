// app/components/ContactInfoContainer.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'; // Import React for React.ReactNode

interface ContactInfoContainerProps {
  iconSrc: string;
  altText: string;
  href: string;
  displayText: string;
}

export default function ContactInfoContainer({ iconSrc, altText, href, displayText }: ContactInfoContainerProps) {
  return (
    <div className="contact-info-container flex items-center justify-center gap-2 mt-4 mx-4">
      <Image
        src={iconSrc}
        alt={altText}
        className="icon contact-icon h-10 w-10" // Adjusted size for email icon
        width={40}
        height={40}
      />
      <p className="text-xl">
        <Link href={href} target="_blank" rel="noopener noreferrer" className="text-text1 hover:text-accent hover:underline hover:underline-offset-4">
          {displayText}
        </Link>
      </p>
    </div>
  );
}
