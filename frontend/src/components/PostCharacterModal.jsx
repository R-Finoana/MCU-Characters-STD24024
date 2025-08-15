import BaseModal from "./BaseModal.jsx";
import {useState} from "react";

export default function PostCharacterModal({ open, onClose, onConfirm, onCancel }) {
    const [formData, setFormData] = useState({
        name: "",
        realName: "",
        universe: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.realName || !formData.universe) {
            alert("Please fill all fields");
            return;
        }
        onConfirm(formData);
        onClose();
    }

    return (
        <BaseModal
            open={open}
            onClose={onClose}
            onCancel={() => {
                setFormData({name: "", realName: "", universe: ""});
                onCancel ? onCancel() : onClose();
            }}
        >
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Create new Character
                </h3>
                <div className="flex flex-col gap-1">
                    <p className="text-black">
                        Character Name
                    </p>
                    <input
                        name="name"
                        type="text"
                        placeholder="e.g. Spider-Man"
                        value={formData.name}
                        onChange={handleChange}
                        className="border-1 border-gray-300 rounded-lg p-2 w-full focus:outline-none"
                        required
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-black">
                        Real Name
                    </p>
                    <input
                        name="realName"
                        type="text"
                        placeholder="e.g. Peter Parker"
                        value={formData.realName}
                        onChange={handleChange}
                        className="border-1 border-gray-300 rounded-lg p-2 w-full focus:outline-none"
                        required
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-black">
                        Universe
                    </p>
                    <input
                        name="universe"
                        type="text"
                        placeholder="e.g. Earth-616"
                        value={formData.universe}
                        onChange={handleChange}
                        className="border-1 border-gray-300 rounded-lg p-2 w-full focus:outline-none"
                        required
                    />
                </div>
                <div className="flex justify-center gap-4">
                    <button
                        type="button"
                        onClick={() => {
                            setFormData({name: "", realName: "", universe: ""});
                            onCancel ? onCancel() : onClose();
                        }}
                        className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 w-4/12 cursor-pointer hover:duration-300"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 cursor-pointer w-4/12 hover:duration-300"
                    >
                        Create
                    </button>
                </div>
            </form>
        </BaseModal>
    )
}