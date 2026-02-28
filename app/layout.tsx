import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Atelier | Premium Furniture',
  description: 'Premium furniture designed to elevate your home with style, comfort, and durability.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-black selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
