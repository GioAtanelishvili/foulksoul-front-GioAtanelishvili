import { useContext } from 'react';

import { Antenna, TVLogo, TVLegs } from './svgs';
import { LoadingSpinner } from 'components';
import { DataContext } from 'context';

const TV: React.FC = () => {
  const {
    bandDetails: { imagePath },
    isLoading,
  } = useContext(DataContext);

  const imageUrl = `${process.env.REACT_APP_API_BASE_URL}/${imagePath}`;

  return (
    <figure className='mt-40 flex flex-col items-center relative drop-shadow-xl'>
      <Antenna />
      <div className='w-129 h-86 flex items-center justify-center border-[21px] border-black drop-shadow-main-tv bg-main-tv-screen bg-cover overflow-hidden'>
        {isLoading ? (
          <LoadingSpinner className='scale-150' />
        ) : imagePath ? (
          <img
            src={imageUrl}
            className='w-full'
            alt='Band'
            data-test-id='main-band-image'
          />
        ) : (
          <p
            className='text-lg font-medium font-nino-mtavruli'
            date-testid='photo-not-uploaded-message'
          >
            ბენდის ფოტო ატვირთული არ არის!
          </p>
        )}
      </div>
      <TVLogo />
      <TVLegs />
    </figure>
  );
};

export default TV;
