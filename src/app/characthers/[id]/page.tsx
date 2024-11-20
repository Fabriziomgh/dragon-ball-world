import Image from 'next/image';
import { getSingleCharacter } from '@/api/requests';
import CharacterDetails from '@/components/customs/CharacterDetails';
import CharacterTransformations from '@/components/customs/CharacterTransformations';
import { Metadata } from 'next';

interface Params {
   params: {
      id: string;
   };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
   const { id } = await params;
   const character = await getSingleCharacter(id);

   return {
      title: character.name,
      description: character.description,
   };
}

export default async function ({ params }: Params) {
   const { id } = await params;

   const character = await getSingleCharacter(id);

   const isThereATransformation = character?.transformations?.length !== 0;
   return (
      <section className="phone:my-0 phone:py-2 phone:px-2 max-w-5xl mx-auto py-10 my-10">
         <div className="phone:grid-cols-1 phone:gap-0 grid grid-cols-4 gap-x-8">
            <div className="phone:mx-auto">
               <Image
                  className="h-[410px] w-80 drop-shadow-xl"
                  src={character.image}
                  alt={character.name}
                  height={150}
                  width={150}
               />
            </div>
            <div className="col-span-3">
               <CharacterDetails character={character} />
               <div>
                  {isThereATransformation && (
                     <span className="phone:text-center block  font-Comic-Neue antialiased text-2xl tracking-widest font-semibold my-4 py-6">
                        Transformaciones
                     </span>
                  )}
                  {isThereATransformation && (
                     <div className="phone:grid-cols-1 phone:gap-x-0 grid grid-cols-4 gap-6">
                        {character.transformations.map((t) => (
                           <div key={t.id} className="col-span-2 ">
                              <CharacterTransformations transformation={t} />
                           </div>
                        ))}
                     </div>
                  )}
               </div>
            </div>
         </div>
      </section>
   );
}
