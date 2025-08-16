'use client';

import Header from './_components/header';
import SplitText from './_components/TextAnimations/SplitText/SplitText';

export default function Home() {
  return (
    <div className="mx-auto h-screen max-w-7xl px-4 antialiased sm:px-6 lg:px-8">
      <Header />
      <div className="relative mx-auto flex h-full items-center justify-center">
        <div className="pointer-events-none absolute top-40 left-1/8 h-64 w-64 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-[0.6] blur-3xl"></div>
        <div className="pointer-events-none absolute top-60 right-1/8 h-80 w-80 rounded-full bg-gradient-to-r from-purple-700/20 to-purple-900/20 opacity-[0.6] blur-3xl"></div>
        <div className="space-y-4 text-center">
          <h1 className="text-6xl font-bold">
            O sistema de gestão completo para sua
            <SplitText
              text="barbearia decolar 🚀"
              className="text-center text-6xl font-semibold"
              delay={250}
              duration={2}
              ease="elastic.out(1, 0.3)"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.4}
              rootMargin="-100px"
              textAlign="center"
            />
          </h1>
          <p className="text-xl">
            Centralize agendamentos, finanças e clientes em um único sistema
            intuitivo.
          </p>
        </div>
      </div>
    </div>
  );
}
