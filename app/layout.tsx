import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './_components/theme-provider';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Easy Barber',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='h-screen'>
      <body className={`${roboto.className} h-screen antialiased mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
