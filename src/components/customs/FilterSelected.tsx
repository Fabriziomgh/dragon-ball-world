'use client';

import { Race } from '@/types';
import { useCharacterStore } from '@/providers/character-store-provider';

interface Razas {
   id: string;
   raza: Race;
}

const razas: Razas[] = [
   { id: '1', raza: 'Saiyan' },
   { id: '2', raza: 'Namekian' },
   { id: '3', raza: 'Human' },
   { id: '4', raza: 'Frieza Race' },
   { id: '5', raza: 'Android' },
   { id: '6', raza: 'Majin' },
   { id: '7', raza: 'God' },
   { id: '8', raza: 'Jiren Race' },
   { id: '9', raza: 'Mestizo Saiyajin-Humano' },
   { id: '10', raza: 'Nucleico benigno' },
   { id: '11', raza: 'Evil' },
   { id: '12', raza: 'Nucleico' },
];

const FilterSelected = () => {
   const { filterCharacter, filter } = useCharacterStore((state) => state);

   return (
      <div>
         <label className="block text-sm text-dragon-900 font-bold">
            Filtrar por raza
         </label>

         <select
            value={filter}
            onChange={(e) => {
               filterCharacter(e.target.value as 'todos' | Race);
            }}
            className="mt-1.5 p-4 w-full rounded-lg border-gray-300 text-dragon-700 "
         >
            <option value="todos">Todos</option>
            {razas.map((r) => (
               <option value={r.raza} key={r.id}>
                  {r.raza}
               </option>
            ))}
         </select>
      </div>
   );
};

export default FilterSelected;
