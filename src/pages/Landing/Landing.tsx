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
      <main className='mt-5 flex' data-testid='landing-page-main-content'>
        <div className='w-[55%] flex justify-center items-center'>
          <SunnoteSystem
            handleMemberClick={changeCardSubject}
            handleSunnoteClick={changeCardSubject}
            cardSubject={cardSubject}
          />
        </div>
        <section className='w-[45%] px-23 flex flex-col items-center'>
          <LandingCard subject={cardSubject} />
          <SocialMediaFooter />
        </section>
      </main>
    </Layout>
  );
};

export default Landing;
