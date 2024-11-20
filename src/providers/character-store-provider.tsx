'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';

import {
   type CharacterStore,
   createCharacterStore,
} from '@/store/character-store';

export type CharacterStoreApi = ReturnType<typeof createCharacterStore>;

export const CharacterStoreContext = createContext<
   CharacterStoreApi | undefined
>(undefined);

export interface CharacterStoreProvider {
   children: ReactNode;
}

export const CharacterStoreProvider = ({
   children,
}: CharacterStoreProvider) => {
   const storeRef = useRef<CharacterStoreApi>();
   if (!storeRef.current) {
      storeRef.current = createCharacterStore();
   }

   return (
      <CharacterStoreContext.Provider value={storeRef.current}>
         {children}
      </CharacterStoreContext.Provider>
   );
};

export const useCharacterStore = <T,>(
   selector: (store: CharacterStore) => T
): T => {
   const characterStoreContext = useContext(CharacterStoreContext);

   if (!characterStoreContext) {
      throw new Error(
         `usecharacterStore must be used within characterStoreProvider`
      );
   }

   return useStore(characterStoreContext, selector);
};
