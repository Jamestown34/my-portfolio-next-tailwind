// app/components/DashboardItem.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'; // Import React for React.ReactNode

interface DashboardItemProps {
  imageSrc: string;
  title: string;
  link: string; // The link to the dashboard
}

export default function DashboardItem({ imageSrc, title, link }: DashboardItemProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="dashboard-item relative cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:scale-[1.05] block">
      <Image
        src={imageSrc}
        alt={title}
        width={400} // Set appropriate width
        height={250} // Set appropriate height
        className="dashboard-img w-full h-auto block object-cover rounded-lg"
      />
      <div className="dashboard-title absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-center p-2.5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        {title}
      </div>
    </Link>
  );
}
