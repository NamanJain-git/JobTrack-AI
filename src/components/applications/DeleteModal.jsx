import Button from "../ui/Button";

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, application,}) => {

    if (!isOpen || !application) return null;

    return (
        <div className=" fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 " >
            <div className=" bg-slate-900 w-full max-w-md rounded-2xl border border-slate-800 p-5 sm:p-8 " >
                <h2 className="text-xl sm:text-2xl font-bold text-white"> Delete Application </h2>
                <p className="text-slate-400 mt-3 sm:mt-4 text-sm sm:text-base">
                    Are you sure you want to delete this application?
                    This action cannot be undone.
                </p>

                <div className=" flex items-center gap-4 mt-5 bg-slate-800 rounded-xl p-4 ">
                    <div className=" w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0 ">
                        {application.logo}
                    </div>

                    <div className="min-w-0">
                        <h3 className=" text-white font-semibold truncate ">
                            {application.company}
                        </h3>
                        <p className=" text-slate-400 text-sm truncate">
                            {application.role}
                        </p>
                    </div>
                </div>

                <div className=" flex flex-col-reverse sm:flex-row justify-end gap-3 mt-6 sm:mt-8 ">
                    <Button onClick={onClose} className=" w-full sm:w-auto bg-slate-700 hover:bg-slate-600 " >
                        Cancel
                    </Button>
                    <Button onClick={onConfirm} className=" w-full sm:w-auto bg-red-600 hover:bg-red-700 " >
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;