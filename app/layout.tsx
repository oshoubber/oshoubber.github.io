import ParticleBackground from './components/ParticleBackground';
import './globals.css';
import { Providers } from './providers.';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Osama Shoubber - Portfolio',
  description: 'Welcome to my personal website.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="vbjmjHTBehnlJ5KwipXJL_m2wx8wtz29cbGcpBbOI5Q"
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
