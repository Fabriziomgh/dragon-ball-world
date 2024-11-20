import { Characters, Race } from '@/types';

import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
interface Props {
   character: Characters;
}

export const backgrounds: Record<Race, string> = {
   Saiyan: 'bg-yellow-400',
   Namekian: 'bg-green-400',
   Human: 'bg-blue-400',
   'Frieza Race': 'bg-purple-400',
   Android: 'bg-gray-400',
   Majin: 'bg-pink-400',
   God: 'bg-red-400',
   'Jiren Race': 'bg-orange-400',
   'Mestizo Saiyajin-Humano': 'bg-indigo-400',
   'Nucleico benigno': 'bg-teal-400',
   Evil: 'bg-black-400',
   Nucleico: 'bg-sky-600',
};

const CharactersItem = ({ character }: Props) => {
   return (
      <Link href={`/characthers/${character.id}`}>
         <Card className="shadow-2xl border-none text-dragon-950">
            <CardHeader>
               <CardTitle className="font-semibold">{character.name}</CardTitle>
            </CardHeader>
            <CardContent>
               <Image
                  className="w-[140] h-60 drop-shadow-xl mx-auto hover:scale-105 transition-transform"
                  src={character.image}
                  width={150}
                  height={150}
                  alt={character.name}
               />
            </CardContent>
            <CardFooter className="flex flex-col text-start">
               <span
                  className={`block px-2 rounded ${
                     backgrounds[character.race]
                  }`}
               >
                  <strong>Raza: </strong>
                  {character.race}
               </span>
               <span className="block">
                  <strong>Afiliación: </strong>
                  {character.affiliation}
               </span>
               <span className="block">
                  <strong>Género: </strong>
                  {character.gender}
               </span>
            </CardFooter>
         </Card>
      </Link>
   );
};

export default CharactersItem;
