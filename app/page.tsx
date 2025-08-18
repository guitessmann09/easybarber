'use client';

import Image from 'next/image';
import Header from './_components/header';
import SplitText from './_components/TextAnimations/SplitText/SplitText';
import { Button } from './_components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import ProblemsCard from './_components/problems-card';
import SolutionsCard from './_components/solutions-card';
import FunctionalityCard from './_components/functionality-card';

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
              className="ml-4 text-center text-6xl font-semibold"
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
          <Button
            asChild
            className="p-5 transition-all duration-500 ease-out hover:p-6"
          >
            <Link href={' '} className="flex items-center text-lg">
              Saiba mais
              <ChevronRight />
            </Link>
          </Button>
        </div>
        <Image
          src="/iPhone-14-Plus-dandys-den.vercel.app.png"
          alt="Phone Preview"
          height={310}
          width={310}
          className="hidden lg:inline-block"
        />
      </div>
      <div className="mb-16 space-y-6">
        <div className="space-y-2 text-center">
          <h2 className="from-primary to-primary-foreground bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent">
            Chega de complicações
          </h2>
          <p className="text-lg text-slate-300">
            Otimize seu tempo e diminua suas dores de cabeça!
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-8">
          <ProblemsCard />
          <SolutionsCard />
        </div>
      </div>
      <div className="space-y-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="from-primary to-primary-foreground bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent">
            Funcionalidades
          </h2>
          <p className="mb-8 text-lg text-slate-300">
            O sistema completo para gerenciar sua barbearia com estilo e
            profissionalismo
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FunctionalityCard />
        </div>
      </div>
    </div>
  );
}
