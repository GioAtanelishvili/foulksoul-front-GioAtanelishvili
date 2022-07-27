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
    memberId: null,
  });

  const changeCardSubject = (subject: LandingCardSubject) => {
    setCardSubject(subject);
  };

  return (
    <Layout>
      <header
        className='mt-6 mx-24 flex justify-between items-center'
        data-testid='landing-page-header'
      >
        <BandLogo />
        <Link
          to='/login'
          className='text-content-white text-base font-nino-mtavruli'
          data-testid='login-button'
        >
          შესვლა
        </Link>
      </header>
      <main className='border flex' data-testid='landing-page-main-content'>
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
