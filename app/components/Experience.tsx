// app/components/Experience.tsx
import SectionHeader from './SectionHeader';
import SkillCard from './SkillCard';

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 px-8 md:px-20">
      <SectionHeader
        p1="" {/* Your original HTML had this empty, keeping it consistent */}
        title="SkillSet"
        description="I have a well-rounded skill set in data analytics, covering programming, databases, BI tools, and spreadsheets. Through hands-on projects and certifications, I have continuously refined my expertise. Below is a glimpse of my capabilities."
      />
      <div className="experience-details-container flex flex-col justify-center items-center">
        <div className="about-containers grid grid-cols-1 md:grid-cols-2 gap-8 my-8 w-full max-w-4xl"> {/* Adjusted grid for responsiveness */}

          {/* Programming */}
          <div className="details-container bg-bg-body rounded-3xl border border-accent p-6 text-center">
            <h2 className="experience-sub-title text-text2 font-semibold text-2xl mb-8">Programming</h2>
            <div className="article-container flex flex-wrap justify-around gap-10">
              <SkillCard title="Python" level="Intermediate" />
              <SkillCard title="SQL" level="Intermediate" />
            </div>
          </div>

          {/* Databases */}
          <div className="details-container bg-bg-body rounded-3xl border border-accent p-6 text-center">
            <h2 className="experience-sub-title text-text2 font-semibold text-2xl mb-8">Databases</h2>
            <div className="article-container flex flex-wrap justify-around gap-10">
              <SkillCard title="BigQuery" level="Intermediate" />
              <SkillCard title="SQL Server" level="Intermediate" />
            </div>
          </div>

          {/* BI Tools */}
          <div className="details-container bg-bg-body rounded-3xl border border-accent p-6 text-center">
            <h2 className="experience-sub-title text-text2 font-semibold text-2xl mb-8">BI Tools</h2>
            <div className="article-container flex flex-wrap justify-around gap-10">
              <SkillCard title="Tableau" level="Intermediate" />
              <SkillCard title="Power BI" level="Experienced" />
            </div>
          </div>

          {/* Spreadsheets */}
          <div className="details-container bg-bg-body rounded-3xl border border-accent p-6 text-center">
            <h2 className="experience-sub-title text-text2 font-semibold text-2xl mb-8">Spreadsheets</h2>
            <div className="article-container flex flex-wrap justify-around gap-10">
              <SkillCard title="Excel" level="Experienced" />
              <SkillCard title="Google Sheets" level="Intermediate" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
