import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { LandingCardSubject } from 'types';
import { Layout } from 'components';
import {
  SocialMediaFooter,
  SunNoteSystem,
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

  useEffect(() => {
    document.title = 'FolkSoul';
  }, []);

  return (
    <Layout>
      <header
        className='mt-6 mx-24 flex justify-between items-center'
        data-test-id='landing-page-header'
      >
        <BandLogo />
        <Link
          to='/login'
          className='text-content-white text-base font-nino-mtavruli'
          data-test-id='login-button'
        >
          შესვლა
        </Link>
      </header>
      <main className='mt-5 flex' data-test-id='landing-page-main-content'>
        <div className='w-[55%] flex justify-center items-center'>
          <SunNoteSystem
            handleMemberClick={changeCardSubject}
            handleSunNoteClick={changeCardSubject}
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
