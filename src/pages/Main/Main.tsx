import { Fragment, useEffect } from 'react';

import { TV } from './components';

const Main: React.FC = () => {
  useEffect(() => {
    document.title = 'FolkSoul';
  }, []);

  return (
    <Fragment>
      <header
        className='mt-28 text-5xl text-center font-nino-mtavruli tracking-[0.12em]'
        data-testid='greeting'
      >
        დილამშვიდობისა!
      </header>
      <TV />
    </Fragment>
  );
};

export default Main;
