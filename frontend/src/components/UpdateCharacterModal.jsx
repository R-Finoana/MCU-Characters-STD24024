import BaseModal from "./BaseModal.jsx";
import {useEffect, useState} from "react";

export default function UpdateCharacterModal({ open, onClose, onConfirm, onCancel, character }) {
    const [formData, setFormData] = useState({
        name: "",
        realName: "",
        universe: ""
    })

    useEffect(() => {
        if (character) {
            setFormData({
                name: character.name || "",
                realName: character.realName || "",
                universe: character.universe || ""
            });
        }
    }, [character]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("Sending update:", formData);

            const response = await fetch(`http://localhost:3000/character/${character.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    realName: formData.realName,
                    universe: formData.universe,
                })
            });
            console.log("Response status:", response.status);

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Backend error:", errorData);
                throw new Error(errorData.message || "Update failed");
            }

            const updatedCharacter = await response.json();
            console.log("Update successful:", updatedCharacter);

            onConfirm(updatedCharacter);
            onClose();
        } catch (error) {
            console.error("Error updating character details:", {
                error: error.message
            });
            alert(`Failed to update character : ${error.message}` );
        }
    }


    return (
        <BaseModal
            open={open}
            onClose={onClose}
            onCancel={onCancel || onClose}
        >
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Update {character?.name || "Character"}
                </h3>
                <div className="flex flex-col gap-1">
                    <p className="text-black">
                        Character Name
                    </p>
                    <input
                        id="name"
                        name="name"
                        type="text"
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
                        id="realName"
                        name="realName"
                        type="text"
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
                        id="universe"
                        name="universe"
                        type="text"
                        value={formData.universe}
                        onChange={handleChange}
                        className="border-1 border-gray-300 rounded-lg p-2 w-full focus:outline-none"
                        required
                    />
                </div>
                <div className="flex justify-center gap-4">
                    <button
                        type="button"
                        onClick={onCancel || onClose}
                        className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 w-4/12 cursor-pointer hover:duration-300"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 cursor-pointer w-4/12 hover:duration-300"
                    >
                        Update
                    </button>
                </div>
            </form>
        </BaseModal>
    )
}