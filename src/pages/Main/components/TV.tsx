import { useContext } from 'react';

import { Antenna, TVLogo, TVLegs, LoadingSpinner } from 'components';
import { DataContext } from 'context';

const TV: React.FC = () => {
  const {
    bandDetails: { imagePath },
    isLoading,
  } = useContext(DataContext);

  const imageUrl = `${process.env.REACT_APP_API_BASE_URL}/${imagePath}`;

  return (
    <figure className='my-40 flex flex-col items-center relative drop-shadow-xl'>
      <Antenna />
      <div className='w-129 h-86 flex items-center justify-center border-[21px] border-black drop-shadow-main-tv bg-main-tv-screen bg-cover'>
        {isLoading ? (
          <LoadingSpinner className='scale-150' />
        ) : imagePath ? (
          <img
            src={imageUrl}
            className='max-w-full max-h-full'
            alt='Band'
            data-testid='main-band-image'
          />
        ) : (
          <p className='text-lg font-medium font-nino-mtavruli'>
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
