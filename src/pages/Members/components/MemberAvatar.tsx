import { DefaultAvatar } from 'components';
import { MemberAvatarProps } from 'types';

const MemberAvatar: React.FC<MemberAvatarProps> = (props) => {
  const avatarUrl =
    props.source || `${process.env.REACT_APP_API_BASE_URL}/${props.avatarPath}`;

  return props.avatarPath || props.source ? (
    <figure
      className={`w-full h-full flex justify-center items-center border border-white rounded-full overflow-hidden ${props.className}`}
      style={{ backgroundColor: props.background }}
    >
      <img src={avatarUrl} alt='Band member avatar' />
    </figure>
  ) : (
    <figure
      className={`bg-primary-dark-blue w-full h-full flex justify-center items-center border border-white rounded-full ${props.className}`}
      style={{ backgroundColor: props.background }}
    >
      <DefaultAvatar />
    </figure>
  );
};

export default MemberAvatar;
