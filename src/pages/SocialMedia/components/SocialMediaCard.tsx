import { SocialMediaCardProps } from 'types';
import { YellowButton, RedButton } from '../components';
import { capitalize } from 'helpers';

const SocialMediaCard: React.FC<SocialMediaCardProps> = (props) => {
  const iconUrl = `${process.env.REACT_APP_API_BASE_URL}/${props.iconPath}`;

  return (
    <div className='bg-primary-gray w-full h-16 py-3 pl-5 pr-5 flex justify-between items-center border border-black rounded-[5px] shadow-social-media-card'>
      <figure className='w-11 h-16 py-3 flex justify-center items-center'>
        {props.iconPath && (
          <img
            src={iconUrl}
            className='max-w-full max-h-full'
            alt='Social media icon'
          />
        )}
      </figure>
      <h2 className='text-content-white w-32 text-lg text-center font-nino-mtavruli truncate'>
        {capitalize(props.name)}
      </h2>
      <a
        href={props.url}
        target='_blank'
        className='text-social-media-link w-80 text-sm text-center underline truncate'
        rel='noreferrer'
      >
        {props.url}
      </a>
      <YellowButton _id={props._id} />
      <RedButton _id={props._id} index={props.index} />
    </div>
  );
};

export default SocialMediaCard;
