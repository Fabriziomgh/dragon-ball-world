import { OriginPlanet } from '@/types';
import PlanetItem from './PlanetItem';

interface Props {
   planets: OriginPlanet[];
}

const PlanetsGrid = ({ planets }: Props) => {
   return (
      <div className="phone:grid-cols-1  phone: px-4 grid grid-cols-3 py-20 gap-10">
         {planets.map((p) => (
            <PlanetItem key={p.id} planet={p} />
         ))}
      </div>
   );
};

export default PlanetsGrid;
