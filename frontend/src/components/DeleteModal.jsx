import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

export default function DeleteModal({ open, onClose, children}) {
    if(!open) {
        return null
    }

    return (
        <div
            onClick={onClose}
            className={`
            fixed inset-0 flex justify-center items-center transition-colors
            ${open ? "visible bg-black/20 backdrop-blur-sm"  : "invisible"}`}
        >
            <div
                onClick={e => e.stopPropagation()}
                className={`bg-white rounded-xl shadow p-6 w-full max-w-md mx-4 relative
            `}>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 p-1 rounded-lg text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-600 transition-colors">
                    <button onClick={onClose}>
                        <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
                    </button>
                </button>
                {children}
            </div>
        </div>
    )
}