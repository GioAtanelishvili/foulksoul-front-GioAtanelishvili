import { CardPhotoFrameProps } from 'types';

const CardPhotoFrame: React.FC<CardPhotoFrameProps> = (props) => {
  return (
    <div
      className='border-white w-64 h-64 absolute -top-32 left-[calc(50%-8rem)] flex justify-center items-center border-[1.54px] rounded-full overflow-hidden drop-shadow-card-photo-frame'
      style={
        props.style || {
          backgroundImage:
            'radial-gradient(50% 50% at 50% 50%, #534571 0%, #342C46 100%)',
        }
      }
    >
      {props.children}
    </div>
  );
};

export default CardPhotoFrame;
