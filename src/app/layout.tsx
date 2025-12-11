import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Do it',
  description: 'do it - 할 일 관리를 위한 투두 리스트',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
