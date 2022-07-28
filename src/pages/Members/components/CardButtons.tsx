import { GreenCircle, RedCircle, YellowCircle } from './svgs';

const CardButtons: React.FC = () => {
  return (
    <div className='w-full mt-3 py-2 px-5 flex items-center justify-between border-t border-t-black shadow-member-card-buttons'>
      <GreenCircle />
      <RedCircle />
      <YellowCircle />
    </div>
  );
};

export default CardButtons;
