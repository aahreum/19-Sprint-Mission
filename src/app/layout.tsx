import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/widgets/header/ui/Header';

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
      <head>
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css'
        />
      </head>
      <body>
        <Header />
        <main className='mt-[24px] px-[16px]'>
          <div className='container'>{children}</div>
        </main>
      </body>
    </html>
  );
}
