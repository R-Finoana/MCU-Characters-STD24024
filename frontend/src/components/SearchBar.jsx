import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

library.add(faMagnifyingGlass);


export default function SearchBar({onSearchChange}) {
    const [search, setSearch] = useState("");
    const handleChange = (e) => {
        const value = e.target.value.toLowerCase();
        setSearch(value);
        if (onSearchChange) {
            onSearchChange(value)
        }
    }

    return (
        <div className="h-22 w-fit top-0 fixed z-50 ">
            <div className="search-bar flex gap-1 items-center max-w-10/12 mx-auto p-2 rounded-xl border-2 border-gray-400">
                <FontAwesomeIcon icon="magnifying-glass" className="text-2xl"/>
                <input
                    type="search"
                    placeholder="Search a Marvel character..."
                    value={search}
                    onChange={handleChange}
                    className="w-[80vw] pr-10 h-15 focus:outline-none font-bold"
                />
            </div>
        </div>
    )
}