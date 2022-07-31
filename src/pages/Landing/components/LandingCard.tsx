import { useContext } from 'react';

import { CardPhotoFrame, BandLogo } from '../components';
import { LoadingSpinner } from 'components';
import { LandingCardProps } from 'types';
import { DataContext } from 'context';

const LandingCard: React.FC<LandingCardProps> = (props) => {
  const {
    bandDetails: { info },
    members,
    isLoading,
  } = useContext(DataContext);

  const { subject } = props.subject;
  let content;

  if (subject === 'band') {
    if (info === '') {
      content = 'ბენდის შესახებ ინფორმაცია დამატებული არ არის.';
    } else {
      content = info;
    }
  } else if (subject === 'member') {
    const member = members.find(
      (member) => member._id === props.subject.memberId
    );

    content = member!.biography;
  }

  return (
    <section className='bg-secondary-gold w-full mt-36 pt-35 relative rounded-[20px]'>
      <div className='absolute w-3.75 h-3.75 top-3.75 left-4 rounded-full bg-gradient-radial-purple' />
      <div className='absolute w-3.75 h-3.75 top-3.75 right-4 rounded-full bg-gradient-radial-purple' />
      <CardPhotoFrame>
        <BandLogo className='scale-150' />
      </CardPhotoFrame>
      <div
        id='landing-card-div'
        className='h-92 mt-9 mb-10 mr-8 ml-4 px-12 overflow-y-auto'
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <article className='text-justify text-lg font-arial'>
            {content?.split('\n').map((paragraph, index) => (
              <p key={index} className='mb-8'>
                {paragraph}
              </p>
            ))}
          </article>
        )}
      </div>
    </section>
  );
};

export default LandingCard;
