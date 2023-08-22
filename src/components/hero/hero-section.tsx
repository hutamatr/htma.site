'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';

import Chubbs1SVG from '@components/ui/svg/Chubbs1SVG';
import Chubbs2SVG from '@components/ui/svg/Chubbs2SVG';
import GithubSVG from '@components/ui/svg/GithubSVG';
import TwitterSVG from '@components/ui/svg/TwitterSVG';

import useBaffle from '@hooks/useBaffle';
import { neutral } from '@utils/localFont';

const socials = [
  {
    id: '01',
    title: 'Github',
    href: 'https://github.com/hutamatr',
    image: GithubSVG,
  },
  {
    id: '02',
    title: 'Twitter',
    href: 'https://twitter.com/huutamatr',
    image: TwitterSVG,
  },
];

export default function Hero() {
  const { newBaffle } = useBaffle('.nameBaffle');

  useEffect(() => {
    const timer = setTimeout(() => {
      newBaffle();
    }, 2700);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className={clsx(
        'sticky top-0 z-[1080] col-start-1 col-end-3 flex h-screen flex-col items-center',
        'lg:col-start-2 lg:col-end-4'
      )}
    >
      <div
        className={clsx(
          'flex h-full flex-col-reverse justify-between pb-24 pt-44',
          'md:pb-36 md:pt-52',
          'lg:flex-col lg:justify-center lg:gap-y-4 lg:pb-0 lg:pt-20',
          '2xl:gap-y-6'
        )}
      >
        <div className={clsx('w-full -rotate-90', 'lg:rotate-0')}>
          <motion.h1
            className={clsx(
              'text-sm font-normal text-custom-black',
              'md:text-base',
              'lg:text-lg',
              'dark:text-custom-green'
            )}
            initial={{ opacity: 0, x: -24 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.3,
                duration: 0.6,
              },
            }}
            exit={{ opacity: 0, x: -24 }}
          >
            hello, I'm
          </motion.h1>

          <div
            className={clsx(
              'flex flex-row items-center gap-x-1',
              'lg:flex-col lg:items-start'
            )}
          >
            <motion.h1
              className={clsx(
                neutral.className,
                'nameBaffle relative z-[1200] whitespace-nowrap text-base font-bold text-custom-black',
                'md:text-2xl',
                'lg:whitespace-normal lg:text-4xl',
                'dark:text-custom-green'
              )}
              initial={{ opacity: 0, x: -24 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.5, duration: 0.7 },
              }}
              exit={{ opacity: 0, x: -24 }}
            >
              hutama
            </motion.h1>
            <motion.h1
              className={clsx(
                neutral.className,
                'nameBaffle relative z-[1200] whitespace-nowrap text-base font-bold text-custom-black',
                'md:text-2xl',
                'lg:whitespace-normal lg:text-4xl',
                'dark:text-custom-green'
              )}
              initial={{ opacity: 0, x: -24 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.7, duration: 0.7 },
              }}
              exit={{ opacity: 0, x: -24 }}
            >
              trirahmaиto.
            </motion.h1>
          </div>
          <motion.h3
            className={clsx(
              'w-fit whitespace-nowrap rounded bg-custom-black px-1 text-base font-light text-custom-green',
              'md:text-lg',
              'lg:whitespace-normal lg:bg-transparent lg:text-2xl lg:font-thin lg:text-custom-black',
              'dark:text-custom-white-2'
            )}
            initial={{ opacity: 0, x: -24 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.9, duration: 0.7 },
            }}
            exit={{ opacity: 0, x: -24 }}
          >
            --frontend developer
          </motion.h3>
        </div>
        <section
          className={clsx(
            'relative hidden',
            'lg:mb-4 lg:flex lg:w-full lg:items-center lg:justify-evenly'
          )}
        >
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 1.2, duration: 0.7 },
            }}
            exit={{ opacity: 0, x: -24 }}
          >
            <Chubbs2SVG
              className={clsx(
                'w-20 text-custom-black',
                'dark:text-custom-green',
                '2xl:w-24'
              )}
              fill='currentColor'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.7 },
            }}
            exit={{ opacity: 0, x: 24 }}
          >
            <Chubbs1SVG
              className={clsx(
                'w-20 text-custom-black',
                'dark:text-custom-green',
                '2xl:w-24'
              )}
              fill='currentColor'
            />
          </motion.div>
        </section>
        <ul
          className={clsx(
            'flex w-full -rotate-90 items-center justify-evenly',
            'md:gap-x-1',
            'lg:rotate-0 lg:py-8'
          )}
        >
          {socials.map((item) => (
            <li key={item.id} className='flex items-center'>
              <Link
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className={clsx(
                  'group/link flex items-center gap-x-3 rounded-3xl p-2 text-sm text-custom-black duration-300',
                  'md:text-lg',
                  'lg:p-[clamp(0.875rem,_0.6544rem_+_0.2941vw,_1.125rem)_clamp(1.5rem,_1.0588rem_+_0.5882vw,_2rem)]',
                  'hover:bg-custom-green',
                  'dark:text-custom-green dark:hover:text-custom-black'
                )}
              >
                <item.image
                  className={clsx(
                    'mb-1 w-5 text-custom-black',
                    'group-hover/link:dark:text-custom-black',
                    'dark:text-custom-green'
                  )}
                  fill='currentColor'
                />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
