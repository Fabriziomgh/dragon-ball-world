import { Transformation } from '@/types';
import Image from 'next/image';

interface Props {
   transformation: Transformation;
}

const CharacterTransformations = ({ transformation }: Props) => {
   return (
      <div className="relative overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8">
         <div className="">
            <div className="phone:text-center">
               <h3 className="text-lg font-bold text-dragon-900 sm:text-xl">
                  {transformation.name}
               </h3>

               <p className="mt-1 text-xs font-semibold text-dragon-600">
                  Ki: {transformation.ki}
               </p>
            </div>

            <div className=" sm:shrink-0">
               <Image
                  alt={transformation.name}
                  src={transformation.image}
                  width={100}
                  height={100}
                  className="phone:h-[150px] phone:w-[110px] h-[120px] w-[80px] phone:mx-auto "
               />
            </div>
         </div>
      </div>
   );
};

export default CharacterTransformations;
