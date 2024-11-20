import { OriginPlanet } from '@/types';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import clsx from 'clsx';

interface Props {
   planet: OriginPlanet;
}
const PlanetItem = ({ planet }: Props) => {
   const isDestroyed = planet.isDestroyed;
   return (
      <div className=" overflow-hidden">
         <div className="relative h-[350px]  ">
            <Image
               src={planet.image}
               alt={planet.name}
               height={100}
               width={100}
               className="absolute rounded inset-0 h-full w-full object-cover opacity-100 "
            />
         </div>

         <div className="relative bg-white pt-3">
            <h3 className="text-lg font-semibold text-dragon-950 ">
               {planet.name}
            </h3>

            <p className="mb-4 ">{planet.description}</p>

            <Badge
               className={clsx('', {
                  'bg-green-500 hover:bg-green-400': !isDestroyed,
               })}
               variant={`${isDestroyed ? 'destructive' : 'secondary'}`}
            >
               {`${isDestroyed ? 'Destruido' : 'Vivo'}`}
            </Badge>
         </div>
      </div>
   );
};

export default PlanetItem;
