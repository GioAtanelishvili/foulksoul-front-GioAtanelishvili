import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import { DashboardHeader, LoadingSpinner } from 'components';
import { BandImage, EditIcon } from './components';
import { DataContext } from 'context';

const Band: React.FC = () => {
  const { bandDetails, isLoading } = useContext(DataContext);
  const { info, imagePath } = bandDetails;

  let content;

  if (info === '') {
    content = 'ბენდის შესახებ ინფორმაცია დამატებული არ არის.';
  } else {
    content = info;
  }

  return (
    <Fragment>
      <DashboardHeader>ბენდის შესახებ</DashboardHeader>
      <section
        id='band-about-page-section'
        className='h-140 mt-8 mx-20 pl-24 pr-20 overflow-auto'
      >
        {isLoading ? (
          <LoadingSpinner className='mt-60 scale-150' />
        ) : (
          <Fragment>
            <BandImage path={imagePath} />
            <article className='mt-12 text-base text-justify font-arial'>
              {content?.split('\n').map((paragraph, index) => (
                <p key={index} className='mb-7'>
                  {paragraph}
                </p>
              ))}
            </article>
          </Fragment>
        )}
        <Link to='../edit' className='absolute left-14 bottom-52'>
          <EditIcon />
        </Link>
      </section>
    </Fragment>
  );
};

export default Band;
