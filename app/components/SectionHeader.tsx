// app/components/SectionHeader.tsx
import React from 'react';

interface SectionHeaderProps {
  p1: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ p1, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-8">
      <p className="text-text2 font-semibold text-lg">{p1}</p>
      <h1 className="text-5xl font-bold text-text1 mt-2 mb-4">{title}</h1>
      {description && <p className="text-text2 max-w-3xl mx-auto">{description}</p>}
    </div>
  );
}
