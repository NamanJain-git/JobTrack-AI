import AiToolHeader from "../../components/aitools/AiToolsHeader";

import AiAssistant from "../../components/aitools/AiAssistant";
import ResumeAnalyzer from "../../components/aitools/ResumeAnalyzer";
import JobMatchAnalyzer from "../../components/aitools/JobMatchAnalyzer";
import CoverLetterGenerator from "../../components/aitools/CoverLetterGenerator";
import InterviewPrep from "../../components/aitools/InterviewPrep";
import ApplicationEmail from "../../components/aitools/ApplicationEmail";

const AITools = () => {

  return (
    <div className="max-w-6xl mx-auto">

      <AiToolHeader />

      <AiAssistant />

      <section className="mt-10">

        <h2 className="text-2xl font-semibold text-white">
          AI Tools
        </h2>

        <p className="text-slate-400 mt-1 mb-5">
          Specialized tools for your job search.
        </p>

        <div className="space-y-4">

          <ResumeAnalyzer />

          <JobMatchAnalyzer />

          <CoverLetterGenerator />

          <InterviewPrep />

          <ApplicationEmail />

        </div>

      </section>

    </div>
  );
};

export default AITools;
