import { useState, useEffect } from "react";
import { IoCloseCircle } from "react-icons/io5";
import Button from "../ui/Button";

const AddApplicationModal = ({ isOpen, onClose, onSaveApplication, application, }) => {

    const initialFormData = {
        company: "",
        role: "",
        status: "Applied",
        jobType: "",
        location: "",
        appliedDate: "",
        platform: "",
        resumeUsed: "",
        jobUrl: "",
        notes: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        if (application) {
            setFormData(application);
        } else {
            setFormData(initialFormData);
        }
    }, [application]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.company.trim() || !formData.role.trim() || !formData.appliedDate || !formData.platform.trim()) {
            alert("Please fill in Company Name, Job Role, Applied Date, and Platform.");
            return;
        }

        onSaveApplication(formData);
        setFormData(initialFormData);
        onClose();
    };

    if (!isOpen) return null;

    const inputClass = ` w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white outline-none focus:border-blue-500 `;

    return (
        <div className=" fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start sm:items-center justify-center z-50 p-3 sm:p-5 overflow-y-auto ">
            <div className=" bg-slate-900 rounded-2xl w-full max-w-3xl max-h-[95vh] overflow-y-auto p-5 sm:p-6 lg:p-8 border border-slate-800 my-3 sm:my-5 ">
                <div className=" flex items-center justify-between gap-4 mb-6 sm:mb-8 ">
                    <h2 className=" text-2xl sm:text-3xl font-bold text-white ">
                        {application ? "Edit Application" : "Add New Application"}
                    </h2>
                    <button type="button" onClick={onClose}
                        className=" text-slate-400 hover:text-white text-3xl shrink-0 " >
                        <IoCloseCircle />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 ">
                        <div>
                            <label className="block text-slate-300 mb-2"> Company Name <span className="font-bold text-red-700">*</span></label>
                            <input type="text" name="company" value={formData.company} onChange={handleChange} className={inputClass} />
                        </div>

                        <div>
                            <label className="block text-slate-300 mb-2"> Job Role <span className="font-bold text-red-700">*</span> </label>
                            <input type="text" name="role" value={formData.role} onChange={handleChange} className={inputClass} />
                        </div>

                        <div>
                            <label className="block text-slate-300 mb-2"> Status </label>
                            <select name="status" value={formData.status} onChange={handleChange} className={inputClass} >
                                <option>Applied</option>
                                <option>Assessment</option>
                                <option>Interview</option>
                                <option>Offer</option>
                                <option>Rejected</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-slate-300 mb-2"> Job Type </label>
                            <select name="jobType" value={formData.jobType} onChange={handleChange} className={inputClass} >
                                <option value="">Select</option>
                                <option>Full Time</option>
                                <option>Internship</option>
                                <option>Apprenticeship</option>
                                <option>Contract</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-slate-300 mb-2"> Location </label>
                            <input type="text" name="location" value={formData.location} onChange={handleChange} className={inputClass} />
                        </div>

                        <div>
                            <label className="block text-slate-300 mb-2"> Applied Date <span className="font-bold text-red-700">*</span> </label>
                            <input type="date" name="appliedDate" value={formData.appliedDate} onChange={handleChange} className={inputClass} />
                        </div>

                        <div>
                            <label className="block text-slate-300 mb-2"> Platform <span className="font-bold text-red-700">*</span></label>
                            <input type="text" name="platform" value={formData.platform} onChange={handleChange} className={inputClass} />
                        </div>

                        <div>
                            <label className="block text-slate-300 mb-2"> Resume Used </label>
                            <input type="text" name="resumeUsed" value={formData.resumeUsed} onChange={handleChange} className={inputClass} />
                        </div>
                    </div>

                    <div className="mt-5 sm:mt-6">
                        <label className="block text-slate-300 mb-2"> Job URL </label>
                        <input type="url" name="jobUrl" value={formData.jobUrl} onChange={handleChange} className={inputClass} />
                    </div>

                    <div className="mt-5 sm:mt-6">
                        <label className="block text-slate-300 mb-2"> Notes</label>
                        <textarea rows="4" name="notes" value={formData.notes} onChange={handleChange} className={`${inputClass} resize-none`} />
                    </div>

                    <div className=" flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 mt-6 sm:mt-8 ">
                        <Button type="button" onClick={onClose} className=" w-full sm:w-auto bg-slate-700 hover:bg-slate-600 " >
                            Cancel
                        </Button>
                        <Button type="submit" className="w-full sm:w-auto" >
                            {application ? "Save Changes" : "Save Application"}
                        </Button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default AddApplicationModal;