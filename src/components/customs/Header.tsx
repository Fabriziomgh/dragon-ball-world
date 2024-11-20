import Image from 'next/image';
import Navbar from './Navbar';
const Header = () => {
   return (
      <header>
         <div className="phone:px-2">
            <div>
               <h1
                  className="phone:text-2xl
                font-Comic-Mono text-center py-6 text-4xl font-extrabold"
               >
                  Bienvenido al mundo Dragon Ball
               </h1>
               <Image
                  className="mx-auto w-72 h-40"
                  height={150}
                  width={150}
                  alt="Shen Long"
                  src="/images/shenlong.webp"
               />
            </div>
            <p className="max-w-xl text-center mx-auto">
               Dragon Ball Z es una épica saga animada que sigue las aventuras
               de Goku, un guerrero Saiyajin de corazón puro, y sus valientes
               amigos mientras defienden la Tierra de poderosos enemigos. Desde
               sus épicas batallas con los brutales Saiyajins, hasta la
               confrontación con el temible tirano galáctico Freezer, Dragon
               Ball Z lleva a los espectadores a través de un viaje lleno de
               adrenalina, transformaciones asombrosas, y amistades
               indestructibles.
            </p>
         </div>
         <Navbar />
      </header>
   );
};

export default Header;
