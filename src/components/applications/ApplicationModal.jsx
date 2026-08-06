import { useState, useEffect } from "react";
import { IoCloseCircle } from "react-icons/io5";
import Button from "../ui/Button";

const AddApplicationModal = ({ isOpen, onClose, onSaveApplication, application }) => {
    console.log(application);
    const initialFormData = {
        company: "",
        role: "",
        status: "Applied",
        jobType: "",
        location: "",
        appliedDate: "",
        deadline: "",
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

        onSaveApplication(formData);

        setFormData(initialFormData);

        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

            <div className="bg-slate-900 rounded-2xl w-full max-w-3xl p-8 border border-slate-800">

                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-white"> Add New Application </h2>

                    <button onClick={onClose} className="text-slate-400 hover:text-white text-3xl" >
                        <IoCloseCircle />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-slate-300 mb-2"> Company Name </label>
                            <input type="text" name="company" value={formData.company} onChange={handleChange}
                                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white outline-none focus:border-blue-500" />
                        </div>

                        <div>
                            <label className="block text-slate-300 mb-2"> Job Role </label>
                            <input type="text" name="role" value={formData.role} onChange={handleChange}
                                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white outline-none focus:border-blue-500" />
                        </div>

                        <div>
                            <label className="block text-slate-300 mb-2"> Status </label>
                            <select name="status" value={formData.status} onChange={handleChange}
                                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white" >
                                <option>Applied</option>
                                <option>Assessment</option>
                                <option>Interview</option>
                                <option>Offer</option>
                                <option>Rejected</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-slate-300 mb-2"> Job Type </label>
                            <select name="jobType" value={formData.jobType} onChange={handleChange}
                                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white" >
                                <option value="">Select</option>
                                <option>Full Time</option>
                                <option>Internship</option>
                                <option>Apprenticeship</option>
                                <option>Contract</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-slate-300 mb-2"> Location </label>
                            <input type="text" name="location" value={formData.location} onChange={handleChange}
                                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white outline-none focus:border-blue-500" />
                        </div>

                        <div>
                            <label className="block text-slate-300 mb-2"> Applied Date </label>
                            <input type="date" name="appliedDate" value={formData.appliedDate} onChange={handleChange}
                                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white outline-none focus:border-blue-500" />
                        </div>

                        <div>
                            <label className="block text-slate-300 mb-2"> Deadline </label>
                            <input type="date" name="deadline" value={formData.deadline} onChange={handleChange}
                                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white outline-none focus:border-blue-500" />
                        </div>

                        <div>
                            <label className="block text-slate-300 mb-2"> Resume Used </label>
                            <input type="text" name="resumeUsed" value={formData.resumeUsed} onChange={handleChange}
                                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white outline-none focus:border-blue-500" />
                        </div>

                    </div>

                    <div className="mt-6">
                        <label className="block text-slate-300 mb-2"> Job URL </label>
                        <input type="url" name="jobUrl" value={formData.jobUrl} onChange={handleChange}
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white outline-none focus:border-blue-500" />
                    </div>

                    <div className="mt-6">
                        <label className="block text-slate-300 mb-2"> Notes </label>
                        <textarea rows="4" name="notes" value={formData.notes} onChange={handleChange}
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white outline-none focus:border-blue-500 resize-none" />
                    </div>

                    <div className="flex justify-end gap-4 mt-8">
                        <Button type="button" onClick={onClose} className="bg-slate-700 hover:bg-slate-600"> Cancel </Button>
                        <Button type="submit"> Save Application </Button>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default AddApplicationModal;