'use client';

import CharactersItem from './CharactersItem';
import { useCharacterStore } from '@/providers/character-store-provider';
import { useEffect } from 'react';

const CharactersGrid = () => {
   const { getAllCharacters, allCharacters, filteredCharacters, filter } =
      useCharacterStore((state) => state);
   const characters = filter === 'todos' ? allCharacters : filteredCharacters;

   useEffect(() => {
      getAllCharacters();
   }, []);
   return (
      <div className="phone:grid-cols-1 phone:gap-x-0 grid grid-cols-3 gap-x-6 gap-y-4  col-span-2">
         {characters.map((character) => {
            return <CharactersItem character={character} key={character.id} />;
         })}
      </div>
   );
};

export default CharactersGrid;
