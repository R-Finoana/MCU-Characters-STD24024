import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function AddButton (){
    return (
        <button className="add-button bg-amber-100 flex items-center px-4 py-2 rounded-lg w-fit h-16 cursor-pointer hover:duration-200 hover:scale-105 hover:font-bold">
            <FontAwesomeIcon icon={faPlus} className="text-2xl"/>
            <p>Add Character</p>
        </button>
    )
}