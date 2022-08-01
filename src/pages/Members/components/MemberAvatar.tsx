import { MemberAvatarProps } from 'types';
import { DefaultAvatar } from 'components';

const MemberAvatar: React.FC<MemberAvatarProps> = (props) => {
  const avatarUrl = `${process.env.REACT_APP_API_BASE_URL}/${props.avatarPath}`;

  return props.avatarPath ? (
    <figure
      className={`w-36 h-36 mt-6 mb-5 mx-9 flex justify-center items-center border border-white rounded-full overflow-hidden ${props.className}`}
      style={{ backgroundColor: props.background }}
    >
      <img src={avatarUrl} alt='Band member avatar' />
    </figure>
  ) : (
    <figure
      className={`bg-primary-dark-blue w-36 h-36 mt-6 mb-5 mx-9 flex justify-center items-center border border-white rounded-full ${props.className}`}
      style={{ backgroundColor: props.background }}
    >
      <DefaultAvatar />
    </figure>
  );
};

export default MemberAvatar;
