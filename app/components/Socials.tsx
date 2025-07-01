// app/components/Socials.tsx
import Image from 'next/image';
import Link from 'next/link';

interface SocialsProps {
  linkedin: string;
  github: string;
  twitter: string;
  email: string;
}

export default function Socials({ linkedin, github, twitter, email }: SocialsProps) {
  return (
    <div className="flex justify-center mt-4 gap-4">
      <Image
        src="/images/linkedin.png"
        alt="My LinkedIn profile"
        className="icon cursor-pointer"
        width={32}
        height={32}
        onClick={() => window.open(linkedin, '_blank')}
      />
      <Image
        src="/images/github.png"
        alt="My Github profile"
        className="icon cursor-pointer"
        width={32}
        height={32}
        onClick={() => window.open(github, '_blank')}
      />
      <Image
        src="/images/twitter.png"
        alt="My Twitter profile"
        className="icon cursor-pointer"
        width={32}
        height={32}
        onClick={() => window.open(twitter, '_blank')}
      />
      <Link href={`mailto:${email}`} className="block"> {/* Changed to Link with block display to ensure proper styling */}
        <Image
          src="/images/email.png"
          alt="Email"
          className="icon cursor-pointer"
          width={32}
          height={32}
        />
      </Link>
    </div>
  );
}
