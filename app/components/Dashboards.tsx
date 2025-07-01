// app/components/Dashboards.tsx
import SectionHeader from './SectionHeader';
import DashboardItem from './DashboardItem';

export default function Dashboards() {
  const dashboards = [
    {
      imageSrc: "/images/dashboard1.png",
      title: "Dashboard 1 Title",
      link: "#" // Replace with actual dashboard link
    },
    {
      imageSrc: "/images/dashboard2.png",
      title: "Dashboard 2 Title",
      link: "#" // Replace with actual dashboard link
    },
    {
      imageSrc: "/images/dashboard3.png",
      title: "Dashboard 3 Title",
      link: "#" // Replace with actual dashboard link
    }
  ];

  return (
    <section id="dashboards" className="py-16 px-8 text-center">
      <SectionHeader
        p1="View My Latest"
        title="Dashboards"
        description="Below are some of my most recent dashboard projects created with BI Tools. These dashboards provide comprehensive insights and visualizations for various datasets and scenarios."
      />
      <div className="details_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
        {dashboards.map((dashboard, index) => (
          <DashboardItem key={index} {...dashboard} />
        ))}
      </div>
    </section>
  );
}
