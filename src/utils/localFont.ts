import localFont from 'next/font/local';

export const kataGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/KataGrotesk-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/KataGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/KataGrotesk-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/KataGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const neutral = localFont({
  src: [
    {
      path: '../../public/fonts/NeutralFace.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeutralFace-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});
