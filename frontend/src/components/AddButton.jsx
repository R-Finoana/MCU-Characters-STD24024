import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function AddButton ({ onPostClick }){
    return (
        <button
            onClick={onPostClick}
            className="add-button bg-[#E62429] flex items-center px-4 py-2 rounded-lg w-fit h-16
            cursor-pointer hover:duration-200 hover:scale-105 hover:font-bold"
        >
            <FontAwesomeIcon icon={faPlus} className="text-2xl"/>
            <p>Add Character</p>
        </button>
    )
}