import Image from 'next/image';

const Footer = () => {
   return (
      <footer className="bg-gray-50">
         <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
               <div className="flex justify-center text-teal-600 sm:justify-start">
                  <Image
                     src="/images/shenlong.webp"
                     alt="Logo"
                     width={100}
                     height={100}
                  />
               </div>

               <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                  Copyright &copy; 2024. Todos los derechos reservados.
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
