import Buttons from "./Buttons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import { faChevronRight, faEarthAmericas, faUser } from '@fortawesome/free-solid-svg-icons';
import SearchBar from "./SearchBar.jsx";
import {useState} from "react";

library.add(faChevronRight, faEarthAmericas, faUser);

export default function CharacterCard({characters}) {
    const [search, setSearch] = useState("");

    return (
        <>
            <SearchBar onSearchChange={setSearch}/>
            {characters.filter(c => c.name.toLowerCase().includes(search)).length > 0 ?
                (
            <div className="character-card max-w-11/12 mx-auto grid grid-cols-4 gap-10 pt-32">
                {characters
                    .filter(c => c.name.toLowerCase().includes(search))
                    .map((character) => (
                   <div key={character.id} className="grid grid-cols-1 bg-amber-100 shadow-2xs p-5 rounded-lg h-[20vh] items-center cursor-pointer hover:shadow-2xl hover:-translate-y-3 hover:duration-250">
                       <div className="flex justify-between">
                           <h1 className="font-bold">{character.name}</h1>
                           <div className="update-delete flex items-center gap-2">
                               <Buttons />
                           </div>
                       </div>
                       <div className="flex items-center gap-2">
                           <FontAwesomeIcon icon="user" />
                           <p>{character.realName}</p>
                       </div>
                       <div className="flex items-center gap-2">
                           <FontAwesomeIcon icon="earth-americas" />
                           <p>{character.universe}</p>
                       </div>
                   </div>
                ))}
            </div>
                ) :
                <div className="flex flex-col justify-center items-center gap-10 h-full w-full mt-20">
                    <p className="text-3xl font-marvel text-red-500">
                        No results found
                    </p>
                </div>
            }
        </>
    )
}