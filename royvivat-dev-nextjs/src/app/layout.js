import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html data-theme="cmyk" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
