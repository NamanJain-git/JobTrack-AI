import AIToolHeader from "../../components/aitools/AiToolsHeader";

import ResumeAnalyzer from "../../components/aitools/ResumeAnalyzer";
import JobMatchAnalyzer from "../../components/aitools/JobMatchAnalyzer";
import CoverLetterGenerator from "../../components/aitools/CoverLetterGenerator";
import InterviewPrep from "../../components/aitools/InterviewPrep";
import ApplicationEmail from "../../components/aitools/ApplicationEmail";

const AITools = () => {
  return (
    <div>

      <AIToolHeader />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <ResumeAnalyzer />

        <JobMatchAnalyzer />

        <CoverLetterGenerator />

        <InterviewPrep />

        <ApplicationEmail />

      </div>

    </div>
  );
};

export default AITools;