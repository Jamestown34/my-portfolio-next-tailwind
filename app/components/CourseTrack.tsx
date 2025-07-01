// app/components/CourseTrack.tsx
import React from 'react';

interface CourseTrackProps {
  title: string;
  courses: string[];
}

export default function CourseTrack({ title, courses }: CourseTrackProps) {
  return (
    <div className="skill-track bg-white rounded-lg shadow-md p-5 w-full max-w-sm">
      <h2 className="skill-track-title text-xl font-semibold text-text1 text-center mb-4">{title}</h2>
      <ul className="course-list list-disc pl-5 text-text2">
        {courses.map((course, index) => (
          <li key={index} className="mb-1 text-base">{course}</li>
        ))}
      </ul>
    </div>
  );
}
