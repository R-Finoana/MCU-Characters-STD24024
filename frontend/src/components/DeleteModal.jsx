import BaseModal from "./BaseModal.jsx";

export default function DeleteModal({ open, onClose, onConfirm, onCancel }) {

    return (
        <BaseModal
            open={open}
            onClose={onClose}
            onCancel={onCancel || onClose}
        >
            <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Confirm deletion
                </h3>
                <p className="text-gray-500 mb-6">
                    Are you sure you want to delete this character? This action is irreversible
                </p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={onCancel || onClose}
                        className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            onConfirm();
                            onClose();
                        }}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </BaseModal>
    )
}