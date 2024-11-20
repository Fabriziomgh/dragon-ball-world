import { SingleCharacter } from '@/types';

interface Props {
   character: SingleCharacter;
}

const CharacterDetails = ({ character }: Props) => {
   return (
      <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
         <dl className="phone:grid phone:grid-cols-3  -my-3 divide-y divide-gray-100 text-sm">
            <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
               <dt className="font-semibold text-dragon-900">Nombre</dt>
               <dd className="text-dragon-950 sm:col-span-2">
                  {character.name}
               </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
               <dt className="font-semibold text-dragon-900">Raza</dt>
               <dd className="text-dragon-950 sm:col-span-2">
                  {character.race}
               </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
               <dt className="font-semibold text-dragon-900">Planeta</dt>
               <dd className="text-dragon-950 sm:col-span-2">
                  {character.originPlanet?.name}
               </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
               <dt className="font-semibold text-dragon-900">Afiliación</dt>
               <dd className="text-dragon-950 sm:col-span-2">
                  {character.affiliation}
               </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
               <dt className="font-semibold text-dragon-900">Ki</dt>
               <dd className="text-dragon-950 sm:col-span-2">{character.ki}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
               <dt className="font-semibold text-dragon-900">Ki máximo</dt>
               <dd className="text-dragon-950 sm:col-span-2">
                  {character.maxKi}
               </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
               <dt className="font-semibold text-dragon-900">Género</dt>
               <dd className="text-dragon-950 sm:col-span-2">
                  {character.gender}
               </dd>
            </div>

            <div className="grid phone:col-span-3 grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
               <dt className="font-semibold text-dragon-900">Biografía</dt>
               <dd className="text-dragon-950 sm:col-span-2">
                  {character.description}
               </dd>
            </div>
         </dl>
      </div>
   );
};

export default CharacterDetails;
