import CharactersGrid from '@/components/customs/CharactersGrid';
import FilterSelected from '@/components/customs/FilterSelected';

export default async function Home() {
   return (
      <section className="phone:grid-cols-1 phone:px-2 phone:gap-0 grid grid-cols-3 py-10 gap-x-10">
         <div className="col-span-1 phone:py-2 phone:mb-2">
            <FilterSelected />
         </div>
         <CharactersGrid />
      </section>
   );
}
