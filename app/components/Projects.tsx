// app/components/Projects.tsx
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      imageSrc: "/images/Screenshot (41).png",
      title: "Movie Recommendation System",
      description: "Built a recommendation engine that leverages genre and plot overview data to generate personalized movie suggestions—addressing a real-world need for smarter, user-focused content discovery.",
      languages: ["Python", "TMBD API", "Pandas", "Scikit-learn", "Gradio Web interface"],
      githubLink: "https://github.com/Jamestown34/Movie-Recommendation/blob/main/TMBD%20MOVIES%20.ipynb",
      readLink: "https://github.com/Jamestown34/Movie-Recommendation/blob/main/README.md"
    },
    {
      imageSrc: "/images/amazon_ads.png",
      title: "Ad Spend Performance Optimization: Maximizing ROI with Data",
      description: "Analyzed ad campaign data to assess ROAS, ACOS, and conversions. Identified underperforming keywords and spending inefficiencies to improve targeting, boost returns, and support smarter digital ad strategies.",
      languages: ["Python", "Excel", "Pandas", "Pivot Tables"],
      githubLink: "https://github.com/Jamestown34/Amazon_ads_Analysis/blob/main/README.md",
      readLink: "https://github.com/Jamestown34/Amazon_ads_Analysis/blob/main/README.md"
    },
    {
      imageSrc: "/images/project_1.jpg",
      title: "Pneumonia Prediction Using X-ray Images",
      description: "Developed a deep learning model in Python to analyze chest X-ray images and accurately detect pneumonia—supporting faster, more reliable medical diagnosis using AI-powered image classification.",
      languages: ["Python", "Machine Learning", "TensorFlow", "CNN"],
      githubLink: "https://github.com/Jamestown34/Pneumonia-X-ray-prediction",
      readLink: "https://github.com/Jamestown34/Pneumonia-X-ray-prediction/blob/main/README.md"
    },
    {
      imageSrc: "/images/return_anlysis.png",
      title: "Returns Analysis: Reducing Product Returns with Data",
      description: "Analyzed fashion return data to uncover key drivers of product returns. Identified high-return items and offered actionable insights to reduce return rates and boost customer satisfaction.",
      languages: ["Python", "Excel", "Pandas", "Pivot Tables"],
      githubLink: "https://github.com/Jamestown34/Amazon-_return_analysis/blob/main/README.md",
      readLink: "https://github.com/Jamestown34/Amazon-_return_analysis/blob/main/README.md"
    },
    {
      imageSrc: "/images/tradding.png",
      title: "Nigeria's Trade-Intelligence-from-2019-2023 (HS85)",
      description: "Explored five years of Nigeria’s import data to uncover trade patterns and dependencies, offering insights for business strategy, supply chain planning, and policy decisions.",
      languages: ["Python", "Excel", "Pandas", "Pivot Tables"],
      githubLink: "https://github.com/Jamestown34/Trade-Intelligence-from-2019-2023/blob/main/vertopal.com_Analysis.pdf",
      readLink: "https://github.com/Jamestown34/Trade-Intelligence-from-2019-2023/blob/main/README.md"
    },
    {
      imageSrc: "/images/project_3.jpg",
      title: "Breast Cancer Prediction & Analysis",
      description: "Applied clustering algorithms to breast cancer datasets to uncover patterns supporting early detection. The project enhanced data-driven insights for classification and encouraged better diagnostic decisions in healthcare systems.",
      languages: ["Python", "Scikit-learn", "Clustering"],
      githubLink: "https://github.com/Jamestown34/Breast-Cancer-Unsupervised-learning-Prediction",
      readLink: "https://github.com/Jamestown34/Breast-Cancer-Unsupervised-learning-Prediction/blob/main/README.md"
    },
    {
      imageSrc: "/images/project_4.jpg",
      title: "Credit Card Fraud Detection",
      description: "Built a Random Forest model to detect fraudulent transactions using features like transaction amount, location, and user demographics—aiming to enhance financial security through intelligent classification.",
      languages: ["Python", "Anomaly Detection", "Scikit-learn"],
      githubLink: "https://github.com/Jamestown34/Credit-Card-Fraud-Detection-Supervised-Machine-Learning-/blob/main/credit%20card%20fraud%20detection%20(supervised%20learning).ipynb",
      readLink: "https://github.com/Jamestown34/Credit-Card-Fraud-Detection-Supervised-Machine-Learning-/blob/main/README.md"
    },
    {
      imageSrc: "/images/project_9.jpg",
      title: "Product Performance Analysis: Optimizing Production Costs in 2024",
      description: "Evaluated product performance across Q1–Q3 2024 to identify items meeting sales targets. Recommended discontinuation of underperformers to reduce production costs and improve business efficiency.",
      languages: ["Python", "(EDA)", "Scikit-learn"],
      githubLink: "https://github.com/Jamestown34/Optimizing-Production-Costs-with-Data-Driven-Product-Analysis/blob/main/project-main.pdf",
      readLink: "https://github.com/Jamestown34/Optimizing-Production-Costs-with-Data-Driven-Product-Analysis/blob/main/README.md"
    },
    {
      imageSrc: "/images/project_5.png",
      title: "Customer Retention and Attrition Analysis",
      description: "Analyzed customer data to uncover patterns in retention and churn. Identified demographic and behavioral traits of loyal versus lost customers, offering insights to enhance retention strategies and reduce churn.",
      languages: ["Python", "Excel"],
      githubLink: "https://github.com/Jamestown34/Customer-Retention-and-Attrition/blob/main/Customer%20Engagement%20Analysis.ipynb",
      readLink: "https://github.com/Jamestown34/Customer-Retention-and-Attrition/blob/main/README.md"
    },
    {
      imageSrc: "/images/project_11.jpg",
      title: "Supply Chain Analysis",
      description: "Analyzed supply chain data to pinpoint inefficiencies and optimize logistics. Implemented data-driven strategies that improved operational efficiency and reduced costs, enhancing overall supply chain performance.",
      languages: ["Python", "Power BI"],
      githubLink: "https://github.com/Jamestown34/Supply-Chain-Analytics-Project/blob/main/Business%20Supply%20Chain%20Analytics.ipynb",
      readLink: "https://github.com/Jamestown34/Supply-Chain-Analytics-Project/blob/main/Journey%20Through%20the%20Supply%20Chain.pdf"
    }
  ];

  return (
    <section id="projects" className="py-16 px-8 text-center">
      <SectionHeader
        p1="Browse Through My"
        title="Projects"
        description="Here are some of the projects I've worked on, showcasing my skills in data science, Machine Learning and AI"
      />
      <div className="details_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
