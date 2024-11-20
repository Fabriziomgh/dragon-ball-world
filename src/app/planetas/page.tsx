import { GetAllPlanets } from '@/api/requests';
import PlanetsGrid from '@/components/customs/PlanetsGrid';

export const metadata = {
   title: 'Planetas',
   description: 'Listado de planetas del mundo Dragon Ball',
};

export default async function () {
   const { items: planets } = await GetAllPlanets();
   return <PlanetsGrid planets={planets} />;
}
