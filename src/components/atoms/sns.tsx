import { NextPage } from 'next';
import Image from 'next/legacy/image';

type Props = {
  theme: string;
};

export const Github: NextPage<Props> = ({ theme }) => {
  return (
    <Image
      src={`/snsIcon/${theme === 'dark' ? 'white_' : 'black_'}github.svg`}
      width={30}
      height={30}
      alt="GitGub Icon"
    />
  );
};

export const Linkedin: NextPage<Props> = ({ theme }) => {
  return (
    <Image
      src={`/snsIcon/${theme === 'dark' ? 'white_' : 'black_'}linkedIn.svg`}
      width={30}
      height={30}
      alt="LinkedIn Icon"
    />
  );
};
