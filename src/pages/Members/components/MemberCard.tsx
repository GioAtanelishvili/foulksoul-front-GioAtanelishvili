import { MemberAvatar, CardButtons } from '../components';
import { MemberCardProps } from 'types';

const MemberCard: React.FC<MemberCardProps> = (props) => {
  return (
    <div className='bg-primary-gray mx-9 relative flex flex-col items-center border border-black rounded-[3px] shadow-member-card'>
      <MemberAvatar
        background={props.color}
        avatarPath={props.avatarPath}
        index={props.index}
      />
      <h2 className='text-white text-lg font-nino-mtavruli tracking-[0.11em]'>
        {props.name}
      </h2>
      <CardButtons />
    </div>
  );
};

export default MemberCard;
