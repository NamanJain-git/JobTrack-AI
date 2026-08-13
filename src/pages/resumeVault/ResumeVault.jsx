import Header from "../../components/resume/ResumeHeader";
import ToolBar from "../../components/resume/ResumeToolbar";
import ResumeCard from "../../components/resume/ResumeCard";
import { resumeData } from "../../data/Resume";

const ResumeVault = () => {
  return (
    <>
      <Header />
      <ToolBar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumeData.map((resume) => (
          <ResumeCard
            key={resume.id}
            resume={resume}
          />
        ))}
      </div>

    </>
  );
};

export default ResumeVault;