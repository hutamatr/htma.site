import baffle from 'baffle';

export default function useBaffle(classNameSelector: string) {
  const newBaffle = () => {
    const target = baffle(classNameSelector);
    target.set({
      // characters: '█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█<░▒ ▓/░>',
      characters: 'xxxxxxxxxxxx',
      speed: 100,
    });
    target.start();
    target.reveal(1000, 100);
    target.stop();
  };

  return { newBaffle };
}
