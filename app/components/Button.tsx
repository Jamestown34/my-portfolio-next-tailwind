// app/components/Button.tsx

"use client";

import Link from 'next/link';
import React from 'react'; // Import React for React.ReactNode

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  download?: boolean; // For download attribute
  variant?: 'primary' | 'secondary';
  className?: string; // For additional custom classes if needed
}

export default function Button({ children, onClick, href, download, variant = 'primary', className = '' }: ButtonProps) {
  const baseClasses = "font-semibold py-4 px-8 rounded-full text-center transition-all duration-300 ease-in-out block md:inline-block w-40"; // Added block/inline-block and fixed width
  const primaryClasses = "border border-accent bg-bg-body2 text-text1 hover:bg-accent hover:text-white hover:no-underline";
  const secondaryClasses = "border border-accent bg-transparent text-text1 hover:bg-accent hover:text-white hover:no-underline"; // Changed background to transparent

  const classes = `${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} download={download}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
