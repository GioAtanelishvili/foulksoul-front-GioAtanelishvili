import { MemberCardProps } from './types';
import {
  AvatarUploadButton,
  MemberAvatar,
  YellowButton,
  GreenButton,
  RedButton,
} from './index';

const MemberCard: React.FC<MemberCardProps> = (props) => {
  return (
    <div
      className='bg-primary-gray mx-9 relative flex flex-col items-center border border-black rounded-[3px] shadow-member-card'
      data-testid='member-card'
    >
      <div className='w-36 h-36 mt-6 mb-5 mx-9 relative'>
        <MemberAvatar background={props.color} avatarPath={props.avatarPath} />
        <AvatarUploadButton _id={props._id} />
      </div>
      <h2 className='text-white text-lg font-nino-mtavruli tracking-[0.11em]'>
        {props.name}
      </h2>
      <div className='w-full mt-3 py-2 px-5 flex items-center justify-between border-t border-t-black shadow-member-card-buttons'>
        <GreenButton _id={props._id} />
        <YellowButton _id={props._id} />
        <RedButton _id={props._id} />
      </div>
    </div>
  );
};

export default MemberCard;
