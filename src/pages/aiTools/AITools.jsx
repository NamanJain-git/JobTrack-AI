import { useState } from "react";

import AiToolHeader from "../../components/aitools/AiToolsHeader";
import AiAssistant from "../../components/aitools/AiAssistant";
import ResumeAnalyzer from "../../components/aitools/ResumeAnalyzer";
import JobMatchAnalyzer from "../../components/aitools/JobMatchAnalyzer";
import CoverLetterGenerator from "../../components/aitools/CoverLetterGenerator";
import InterviewPrep from "../../components/aitools/InterviewPrep";
import ApplicationEmail from "../../components/aitools/ApplicationEmail";
import { FaFileAlt, FaBullseye, FaComments, FaPen, FaEnvelope } from "react-icons/fa";

const AITools = () => {

  const [isChatStarted, setIsChatStarted] = useState(false);

  return (
    <div className="w-full">

      {!isChatStarted && <AiToolHeader />}

      <AiAssistant onChatStart={() => setIsChatStarted(true)} />


      {!isChatStarted ? (
        <section className="mt-10">

          <h2 className="text-2xl font-semibold text-white"> AI Tools </h2>
          <p className="text-slate-400 mt-1 mb-5"> Specialized tools for your job search. </p>

          <div className="space-y-4">
            <ResumeAnalyzer />
            <JobMatchAnalyzer />
            <CoverLetterGenerator />
            <InterviewPrep />
            <ApplicationEmail />
          </div>
        </section>

      ) : (

        <div className="flex flex-wrap gap-3 mt-4">
          <button title="Resume Analyzer" className="px-5 py-5 rounded-full bg-slate-800 border border-slate-700 text-slate-300"> < FaFileAlt className="text-purple-400 " /></button>
          <button title="Job Match Analyzer" className="px-5 py-5 rounded-full bg-slate-800 border border-slate-700 text-slate-300"> < FaBullseye className="text-green-400" /></button>
          <button title="Cover Letter Generator" className="px-5 py-5 rounded-full bg-slate-800 border border-slate-700 text-slate-300"> < FaPen className="text-purple-400" /></button>
          <button title="Interview Prep" className="px-5 py-5 rounded-full bg-slate-800 border border-slate-700 text-slate-300"> < FaComments className="text-green-400" /></button>
          <button title="Application Email" className="px-5 py-5 rounded-full bg-slate-800 border border-slate-700 text-slate-300"> < FaEnvelope className="text-purple-400" /></button>
        </div>
      )}

    </div>
  );
};

export default AITools;
