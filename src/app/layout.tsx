import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
   title: {
      template: '%s | Dragon Ball Word',
      default: 'Inicio | Dragon Ball World',
   },

   description:
      'La página web oficial de Dragon Ball es un portal lleno de información exclusiva sobre la saga, desde los personajes más icónicos hasta las últimas novedades de la serie. Encontrarás imágenes de alta calidad, avances de episodios, juegos en línea, y una tienda virtual con productos oficiales.',
};

import '@fontsource/comic-mono';
import '@fontsource/comic-neue';
import Header from '@/components/customs/Header';
import Footer from '@/components/customs/Footer';

import { CharacterStoreProvider } from '@/providers/character-store-provider';

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="es">
         <body className="font-Comic-Neue antialiased max-w-7xl mx-auto bg-dragon-50 text-dragon-950">
            <Header />
            <CharacterStoreProvider>{children}</CharacterStoreProvider>
            <Footer />
         </body>
      </html>
   );
}
