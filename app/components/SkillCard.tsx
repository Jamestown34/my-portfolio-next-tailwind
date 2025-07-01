// app/components/SkillCard.tsx
"use client";


import Image from 'next/image';
import React from 'react'; // Import React for React.ReactNode

interface SkillCardProps {
  title: string;
  level: string;
}

export default function SkillCard({ title, level }: SkillCardProps) {
  return (
    <article className="flex items-center w-40 justify-start gap-2"> {/* Adjusted width and alignment */}
      <Image src="/images/checkmarkgood.jpg" alt="Experience icon" className="icon w-8 h-8" width={32} height={32} />
      <div>
        <h3 className="text-text1 font-medium">{title}</h3>
        <p className="text-text2 text-sm">{level}</p>
      </div>
    </article>
  );
}
