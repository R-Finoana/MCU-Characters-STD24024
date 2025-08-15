import BaseModal from "./BaseModal.jsx";

export default function PostCharacterModal({ open, onClose, onConfirm, onCancel }) {

    return (
        <BaseModal
            open={open}
            onClose={onClose}
            onCancel={onCancel || onClose}
        >
            <form className="flex flex-col gap-5">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Create new Character
                </h3>
                <div className="flex flex-col gap-1">
                    <p className="text-black">
                        Character Name
                    </p>
                    <input
                        type="text"
                        placeholder="e.g. Spider-Man"
                        className="border-1 border-gray-300 rounded-lg p-2 w-full focus:outline-none"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-black">
                        Real Name
                    </p>
                    <input
                        type="text"
                        placeholder="e.g. Peter Parker"
                        className="border-1 border-gray-300 rounded-lg p-2 w-full focus:outline-none"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-black">
                        Universe
                    </p>
                    <input
                        type="text"
                        placeholder="e.g. Earth-616"
                        className="border-1 border-gray-300 rounded-lg p-2 w-full focus:outline-none"
                    />
                </div>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={onCancel || onClose}
                        className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 w-4/12 cursor-pointer hover:duration-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            onConfirm();
                            onClose();
                        }}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 cursor-pointer w-4/12 hover:duration-300"
                    >
                        Create
                    </button>
                </div>
            </form>
        </BaseModal>
    )
}