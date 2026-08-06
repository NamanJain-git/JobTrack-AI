import Button from "../ui/Button";

const DeleteConfirmationModal = ({
    isOpen,
    onClose,
    onConfirm,
    application,
}) => {

    if (!isOpen || !application) return null;

    return (

        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">

            <div className="bg-slate-900 w-full max-w-md rounded-2xl border border-slate-800 p-8">

                <h2 className="text-2xl font-bold text-white">
                    Delete Application
                </h2>

                <p className="text-slate-400 mt-4">
                    Are you sure you want to delete this application?
                </p>

                <div className="mt-6 bg-slate-800 rounded-xl p-4">

                    <h3 className="text-white font-semibold">
                        {application.company}
                    </h3>

                    <p className="text-slate-400">
                        {application.role}
                    </p>

                </div>

                <div className="flex justify-end gap-4 mt-8">

                    <Button
                        onClick={onClose}
                        className="bg-slate-700 hover:bg-slate-600"
                    >
                        Cancel
                    </Button>

                    <Button
                        onClick={onConfirm}
                        className="bg-red-600 hover:bg-red-700"
                    >
                        Delete
                    </Button>

                </div>

            </div>

        </div>

    );

};

export default DeleteConfirmationModal;