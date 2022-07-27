import { Link } from 'react-router-dom';
import { useState } from 'react';

import { LandingCardSubject } from 'types';
import { Layout } from 'components';
import {
  SocialMediaFooter,
  SunnoteSystem,
  LandingCard,
  BandLogo,
} from './components';

const Landing: React.FC = () => {
  const [cardSubject, setCardSubject] = useState<LandingCardSubject>({
    subject: 'band',
  });

  const changeCardSubject = (subject: LandingCardSubject) => {
    setCardSubject(subject);
  };

  return (
    <Layout>
      <header className='mt-6 mx-24 flex justify-between items-center'>
        <BandLogo />
        <Link
          to='/login'
          className='text-content-white text-base font-nino-mtavruli'
        >
          შესვლა
        </Link>
      </header>
      <main className='border flex'>
        <SunnoteSystem
          handleMemberClick={changeCardSubject}
          handleSunnoteClick={changeCardSubject}
        />
        <section className='w-[45%] px-23 flex flex-col items-center'>
          <LandingCard subject={cardSubject} />
          <SocialMediaFooter />
        </section>
      </main>
    </Layout>
  );
};

export default Landing;
