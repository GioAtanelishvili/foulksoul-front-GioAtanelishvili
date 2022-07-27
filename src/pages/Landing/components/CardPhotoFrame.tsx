import { WrapperProps } from 'types';

const CardPhotoFrame: React.FC<WrapperProps> = (props) => {
  return (
    <div className='border-white w-70 h-70 absolute -top-35 left-[calc(50%-8.75rem)] flex justify-center items-center border-[1.54px] rounded-full bg-gradient-radial-purple drop-shadow-card-photo-frame'>
      {props.children}
    </div>
  );
};

export default CardPhotoFrame;
