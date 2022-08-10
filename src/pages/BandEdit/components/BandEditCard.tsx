import { WrapperProps } from 'types';

const BandEditCard: React.FC<WrapperProps> = (props) => {
  return (
    <div className='bg-band-edit-card w-full h-full pt-4 pb-6 pl-6 pr-4 rounded-[10px] shadow-band-edit-card'>
      {props.children}
    </div>
  );
};

export default BandEditCard;
