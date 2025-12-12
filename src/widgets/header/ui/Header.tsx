import Logo from '@/shared/ui/logo/Logo';

export default function Header() {
  return (
    <header className='flex h-[60px] w-full items-center border-b border-slate-200 bg-white px-[16px]'>
      <div className='mx-auto w-full max-w-[1200px]'>
        <Logo />
      </div>
    </header>
  );
}
