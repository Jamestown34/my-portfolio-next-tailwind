// app/components/Courses.tsx
import SectionHeader from './SectionHeader';
import CourseTrack from './CourseTrack';

export default function Courses() {
  const courseTracks = [
    {
      title: "MS SQL Server Proficiency Track",
      courses: [
        "Introduction to SQL and Database Management",
        "Fundamentals of MS SQL Server",
        "Writing SQL Queries with SELECT, JOINs, and Subqueries",
        "Data Manipulation: INSERT, UPDATE, DELETE",
        "Data Modeling and Normalization Techniques",
        "Stored Procedures, Functions, and Triggers",
        "Working with Views and Indexes",
        "SQL Performance Tuning and Optimization",
        "Managing Transactions and Concurrency"
      ]
    },
    {
      title: "Data Analytics Proficiency Track",
      courses: [
        "Microsoft Excel: Data Cleaning, PivotTables, Advanced Formulas, Power Query, and Macros",
        "Power BI: Data Modeling, DAX Functions, Interactive Dashboards, and Report Automation",
        "Tableau: Data Visualization, Calculated Fields, Filters, Parameters, and Storytelling with Data",
        "Trend Analysis and Predictive Insights",
        "Capstone Project: Building an End-to-End Analytics Solution"
      ]
    },
    {
      title: "Complete Data Science Track",
      courses: [
        "Introduction to Data Science and Analytics",
        "Python for Data Science: Fundamentals and Advanced Concepts",
        "Data Wrangling and Cleaning with Pandas",
        "Exploratory Data Analysis (EDA) Techniques",
        "SQL for Data Extraction, Manipulation, and Analysis",
        "Machine Learning: Supervised and Unsupervised Algorithms",
        "Deep Learning with TensorFlow and Keras",
        "Capstone Project: End-to-End Data Science Solution"
      ]
    },
    {
      title: "Excel Fundamentals Track",
      courses: [
        "Introduction to Excel",
        "Data Visualization in Excel",
        "Data Analysis in Excel",
        "Case Study: Analyzing Customer Churn in Excel"
      ]
    }
  ];

  return (
    <section id="courses" className="py-16 px-8 bg-bg-body">
      <SectionHeader
        p1="Explore My"
        title="Courses"
        description="These are the individual courses I have completed to enhance my skills and knowledge in various areas."
      />
      <div className="courses_container flex flex-wrap justify-center gap-5 mt-8 max-w-6xl mx-auto">
        {courseTracks.map((track, index) => (
          <CourseTrack key={index} {...track} />
        ))}
      </div>
    </section>
  );
}
