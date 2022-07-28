import { MemberAvatarProps } from 'types';
import { AvatarBlackHaired, AvatarPinkHaired, AvatarBlonde } from './svgs';

const defaultAvatars = [
  <AvatarBlackHaired />,
  <AvatarPinkHaired />,
  <AvatarBlonde />,
];

const MemberAvatar: React.FC<MemberAvatarProps> = (props) => {
  const avatarUrl = `${process.env.REACT_APP_API_BASE_URL}/${props.avatarPath}`;

  return props.avatarPath === '' ? (
    <figure className='bg-primary-dark-blue w-36 h-36 mt-6 mb-5 mx-9 flex justify-center items-center border border-white rounded-full'>
      {defaultAvatars[props.index]}
    </figure>
  ) : (
    <figure
      className='w-36 h-36 mt-6 mb-5 mx-9 flex justify-center items-center border border-white rounded-full overflow-hidden'
      style={{ backgroundColor: props.background }}
    >
      <img src={avatarUrl} alt='Band member avatar' />
    </figure>
  );
};

export default MemberAvatar;
