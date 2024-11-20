import { getAllCharacters } from '@/api/requests';
import { Characters, Race } from '@/types';
import { createStore } from 'zustand/vanilla';

export type RaceFilter = Race | 'todos';
export type CharacterStore = CharacterState & CharacterActions;

export interface CharacterState {
   allCharacters: Characters[];
   filter: RaceFilter;
   filteredCharacters: Characters[];
}

export interface CharacterActions {
   getAllCharacters: () => void;
   filterCharacter: (raza: Race | 'todos') => void;
}

export const defaultInitState: CharacterState = {
   allCharacters: [],
   filteredCharacters: [],
   filter: 'todos',
};

export const createCharacterStore = (
   initState: CharacterState = defaultInitState
) => {
   return createStore<CharacterStore>()((set, get) => ({
      ...initState,
      getAllCharacters: async () => {
         const allCharacters = await getAllCharacters();
         const { items: characters } = allCharacters;
         set({ allCharacters: characters });
      },
      filterCharacter: (raza: RaceFilter) => {
         const { allCharacters } = get();
         if (raza === 'todos') {
            return set({ filter: raza });
         }
         const filterCharacters = allCharacters.filter(
            (character) => character.race === raza
         );
         set({ filter: raza, filteredCharacters: filterCharacters });
      },
   }));
};
