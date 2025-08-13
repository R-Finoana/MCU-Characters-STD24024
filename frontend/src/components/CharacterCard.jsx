import Buttons from "./Buttons";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import { faChevronRight, faEarthAmericas, faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronRight, faEarthAmericas, faUser);

export default function CharacterCard({characters}) {

    return (
        <>
            <div className="character-card max-w-11/12 mx-auto grid grid-cols-4 gap-10">
                {characters.map((character) => (
                   <div key={character.id} className="grid grid-cols-1 bg-amber-100 shadow-2xs p-5 rounded-lg h-[20vh] items-center cursor-pointer hover:shadow-2xl hover:scale-105 hover:duration-250">
                       <div className="flex justify-between">
                           <h1 className="font-bold">{character.name}</h1>
                           <div className="flex items-center gap-2">
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
        </>
    )
}