import { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { BandImage, EditIcon, ImageUploadButton } from './components';
import { DashboardHeader, LoadingSpinner } from 'components';
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

  useEffect(() => {
    document.title = 'About';
  }, []);

  return (
    <Fragment>
      <DashboardHeader>ბენდის შესახებ</DashboardHeader>
      <section
        id='band-about-page-section'
        className='w-[85%] h-140 mt-8 px-20 pb-3 overflow-auto'
        data-test-id='band-about-page-section'
      >
        {isLoading ? (
          <LoadingSpinner className='mt-60 scale-150' />
        ) : (
          <Fragment>
            <div className='w-52 h-52 m-auto relative'>
              <BandImage path={imagePath} />
              <ImageUploadButton _id='' />
            </div>
            <article
              className='mt-12 text-base text-justify font-arial whitespace-pre-wrap break-words'
              data-test-id='band-info-article'
            >
              {content}
            </article>
          </Fragment>
        )}
        <Link
          to='edit'
          className='absolute left-14 bottom-52'
          data-test-id='link-to-band-edit'
        >
          <EditIcon />
        </Link>
      </section>
    </Fragment>
  );
};

export default Band;
